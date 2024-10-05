import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
import { Category } from '@prisma/client';
import { redirect } from 'next/navigation';


interface Props{
    params: {
        category: string;
    },
    searchParams: {
        page?: string;
    }
}



export default async function ( {params, searchParams}: Props){

    const {category} = params;
    
    const page = searchParams.page ? parseInt(searchParams.page) : 1;

    const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({
        page, 
        category: category as unknown as Category,
    });

    console.log(currentPage, totalPages);

    if ( products.length === 0){
        redirect(`/category/${category}`);
    }

    const labels: Record<string, string> = {
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
          title={ `${labels[category]}` }
          subtitle="Todos los Productos"
          className="mb-2"
        />
        
        <ProductGrid 
          products = { products }
        />

        <Pagination totalPages={totalPages}/>
    
        </>
    )
}