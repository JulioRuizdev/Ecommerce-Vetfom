import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import {notFound} from 'next/navigation';


const seedProducts = initialData.products;

interface Props{
    params: {
        id: Category;
    }
}



export default function ( {params}: Props){

    const {id} = params;
    const products = seedProducts.filter( product => product.section === id);

    const labels: Record<Category, string> = {
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
          title={ `${labels[id]}` }
          subtitle="Todos los Productos"
          className="mb-2"
        />
        
        <ProductGrid 
          products = { products }
        />
    
        </>
    )
}