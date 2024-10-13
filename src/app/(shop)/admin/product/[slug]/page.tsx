import { getCategories, getProductBySlug } from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProductForm } from "./ui/ProductForm";
// import { Product } from "@/interfaces";

interface Props{
    params:{
        slug: string;
    }
}


export default async function ProductPage({params}: Props) {
    const {slug} = params;
  
    const [product , categories] = await Promise.all([
      getProductBySlug(slug),
      getCategories()
    ]);
  
    if(!product && slug !== 'new'){
      redirect('/admin/products');
    }
  
    // // Transform the product data to match the expected type
    // const product: Product & { ProductImage?: { id: number; url: string; productId: string; }[] } = {
    //   ...productData,
    //   ProductImage: productData.ProductImage.map(img => ({
    //     ...img,
    //     productId: productData.id // Assuming the product's id should be used as productId
    //   }))
    // };
  
    const title = (slug === 'new') ? 'Nuevo Producto' : 'Editar Producto';
  
    return (
      <>
        <Title title={title} />
        <ProductForm product={product ?? {}} categories={categories} />
      </>
    )
  }