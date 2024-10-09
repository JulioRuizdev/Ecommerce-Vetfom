import {initialData} from './seed';
import prisma from '../lib/prisma';



async function main() {


    //borrar los registros de la base de datos
    // await Promise.all([

    await prisma.orderAddress.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
       
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.userAddress.deleteMany();
    await prisma.user.deleteMany();
    // ]);

    const {products, categories, users} = initialData;

    await prisma.user.createMany({
        data: users
    });

    const categoriesData = categories.map( category => ({
        name: category
    }));

    await prisma.category.createMany({
        data: categoriesData
    });


    const categoriesDB = await prisma.category.findMany();
    
    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map
    }, {} as Record<string, string>);
    
        //crear las categorias
    // await prisma.category.create({
    //     data: {
    //         name: 'Cat',
    //     }
    // });


    //crear los productos
    products.forEach(async (product) => {
        const {type, images, ...rest}=product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type],
            }
        })

        const imagesData = images.map(image => ({
            url: image,
            productId: dbProduct.id,
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

   
    console.log(categoriesMap);
    console.log("se ejecuto correctamente  el seed");
}



(() => {
    if(process.env.NODE_ENV === 'production') return; 

    main();
})();