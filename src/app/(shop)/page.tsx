import Image from "next/image";
import { titleFont } from "../config/fonts";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { getPaginatedProductsWithImages } from "@/actions";





export default async function Home() {

  const {products} = await getPaginatedProductsWithImages();


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
