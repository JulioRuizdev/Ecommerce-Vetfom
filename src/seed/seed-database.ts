import {initialData} from './seed';
import prisma from '../lib/prisma';

interface Abc{
    assd: String;
}

async function main() {


    //borrar los registros de la base de datos
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ]);

    const {products, categories} = initialData;

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
    });

   
    console.log(categoriesMap);
}



(() => {
    if(process.env.NODE_ENV === 'production') return; 

    main();
})();