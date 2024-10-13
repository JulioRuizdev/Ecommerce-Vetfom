export const revalidate = 10080;

import { getProductBySlug } from "@/actions";
import { titleFont } from "@/app/config/fonts";
import { ProductMobileSlidshow, ProductSlidshow, StockLabel } from "@/components";
import { Metadata } from "next";

import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";


interface Props {
    params: {
        slug: string;
    }
}

export async function generateMetadata(
    { params}: Props,
        
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
   
    // fetch data
    const product = await getProductBySlug(slug)
   
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      openGraph: {
        title: product?.title ?? 'Producto no encontrado',
        description: product?.description ?? '',
        images: [`/products/${product?.images[1]}`],
      },
    }
  }


export default async function ProductSlugPage( {params}: Props){

    const {slug} = params;
    const product = await getProductBySlug(slug);

    if(!product){
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">


            

            
            <div className="col-span-1 md:col-span-2"> 
                {/* Mobile slideshow */}

                <ProductMobileSlidshow 
                    title={product.title}
                    images={product.images}
                    className="block md:hidden"
                />


                {/* Escritorio slideshow */}
                <ProductSlidshow 
                    title={product.title}
                    images={product.images}
                    className="hidden md:block"
                />
            </div>

            <div className="col-span-1 px-5">

                <StockLabel slug={product.slug}/>

                <h1 className={`${ titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>



                <p className="text-lg mb-5 ">
                S/ {product.price}
                </p>


                <AddToCart product={product}/>


                {/* <button 
                    className="btn-primary my-5">
                    Agregar al carrito
                </button> */}

                <h3 className="font-bold text-sm"> Descripcion</h3>
                <p className="font-light"> {product.description}</p>


            </div>
        </div>
    )
}