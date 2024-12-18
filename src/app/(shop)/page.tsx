export const revalidate = 60;

import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Landbot from "@/components/bot/Landbot";


interface Props{
  searchParams: {
    page?: string;
  }
}


export default async function Home( {searchParams}: Props ) {

  const page = searchParams.page ? parseInt(searchParams.page):1;

  const {products, totalPages} = await getPaginatedProductsWithImages({page});

  // console.log(currentPage, totalPages);

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

    <ToastContainer />

    <Landbot />
    </>



  );
}
