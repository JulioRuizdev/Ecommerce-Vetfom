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
    

   
   

   
    console.log("ejecutado correctamente");
}



(() => {
    if(process.env.NODE_ENV === 'production') return; 

    main();
})();