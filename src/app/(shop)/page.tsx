export const revalidate = 60;

import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";


interface Props{
  searchParams: {
    page?: string;
  }
}


export default async function Home( {searchParams}: Props ) {

  const page = searchParams.page ? parseInt(searchParams.page):1;

  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page});

  console.log(currentPage, totalPages);

  if ( products.length === 0){
    redirect('/');
  }

  return (
    <>
    <Title 
      title="Tienda"
      subtitle="Todos los Productos"
      className="mb-2"
    />
    
    <ProductGrid 
      products = { products }
    />

    <Pagination totalPages={totalPages}/>
    </>

  );
}
