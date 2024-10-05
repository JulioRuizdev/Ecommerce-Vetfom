import Image from "next/image";
import { titleFont } from "../config/fonts";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { getPaginatedProductsWithImages } from "@/actions";




const products = initialData.products;

export default async function Home() {

  const productsTemp  = await getPaginatedProductsWithImages();


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
