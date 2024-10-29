import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
    // Borrar los registros de la base de datos
    await prisma.orderAddress.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.userAddress.deleteMany();
    await prisma.user.deleteMany();

    const { products, categories, users } = initialData;

    // Crear usuarios
    await prisma.user.createMany({
        data: users
    });

    // Crear categorías
    const categoriesData = categories.map(category => ({
        name: category
    }));
    await prisma.category.createMany({
        data: categoriesData
    });

    // Obtener las categorías desde la base de datos
    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>);

    // Crear productos
    for (const product of products) {
        const { type, images, ...rest } = product;
        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type.toLowerCase()],  // Asegúrate de que coincida el nombre de la categoría
            }
        });

        const imagesData = images.map(image => ({
            url: image,
            productId: dbProduct.id,
        }));
        await prisma.productImage.createMany({
            data: imagesData
        });
    }

    // Crear órdenes
    const user = await prisma.user.findFirst(); // Obtener un usuario aleatorio para asociar con la orden
    const productsDB = await prisma.product.findMany();

    for (let i = 0; i < 3; i++) { // Crear 3 órdenes de ejemplo
        const order = await prisma.order.create({
            data: {
                subTotal: 100.0 + i * 10, // Ejemplo de subtotal variable
                tax: 18.0,                // Ejemplo de impuesto fijo
                total: 118.0 + i * 10,    // Ejemplo de total
                itemsInOrder: 2 + i,      // Cantidad de ítems en la orden
                isPaid: i % 2 === 0,      // Alternar entre pagado y no pagado
                userId: user!.id          // Asociar el usuario obtenido
            }
        });

        // Crear elementos de orden asociados
        for (const product of productsDB.slice(0, 2 + i)) { // Añadir algunos productos en cada orden
            await prisma.orderItem.create({
                data: {
                    quantity: 1 + i,  // Cantidad de producto
                    price: product.price,
                    orderId: order.id,
                    productId: product.id
                }
            });
        }

        // Crear dirección de la orden
        await prisma.orderAddress.create({
            data: {
                firstName: "Nombre",
                lastName: "Apellido",
                address: "Dirección Ejemplo",
                postalCode: "12345",
                city: "Ciudad Ejemplo",
                country: "País Ejemplo",
                phone: "123456789",
                orderId: order.id
            }
        });
    }

    console.log("Datos de ejemplo insertados correctamente");
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();
