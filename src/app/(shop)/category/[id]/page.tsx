import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
import {notFound} from 'next/navigation';


const seedProducts = initialData.products;

interface Props{
    params: {
        id: string;
    }
}



export default function ( {params}: Props){

    const {id} = params;
    const products = seedProducts.filter( product => product.section === id);

    const labels = {
        food: 'Comidas',
        toy: 'Juguetes',
        article: 'Articulos',
        medicine: 'Medicamentos'
    }

    // if( id === 'food'){
    //     notFound();

    // }

    return (
        <>
        <Title 
          title={ `${(labels as any)[id]}` }
          subtitle="Todos los Productos"
          className="mb-2"
        />
        
        <ProductGrid 
          products = { products }
        />
    
        </>
    )
}