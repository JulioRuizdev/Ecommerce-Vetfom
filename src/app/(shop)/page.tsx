import Image from "next/image";
import { titleFont } from "../config/fonts";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { getPaginatedProductsWithImages } from "@/actions";


interface Props{
  searchParams: {
    page?: string;
  }
}


export default async function Home( {searchParams}: Props ) {

  const page = searchParams.page ? parseInt(searchParams.page):1;

  const {products} = await getPaginatedProductsWithImages({page});


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

    </>

  );
}
