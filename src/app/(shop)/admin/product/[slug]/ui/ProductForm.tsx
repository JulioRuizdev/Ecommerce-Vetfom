"use client";

import { Category, Product } from "@/interfaces";
import { ProductImage } from "@prisma/client";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface Props {
  product: Product & { ProductImage?: ProductImage[]};
  categories: Category[];
}

interface FormInputs{
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  tags: string;
  section: 'food' | 'toy' | 'article' | 'medicine';
  categoryId: string;
}


export const ProductForm = ({ product, categories }: Props) => {

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags.join(', '),
      
    }
  });

  const onSubmit = async(data: FormInputs) => {
    console.log({data});
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3">
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200"  {...register('title', { required: true})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Identificador</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register('slug', { required: true})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200"
            {...register('description', { required: true})}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Precio</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200" {...register('price', { required: true, min: 0})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Etiquetas</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register('tags', { required: true})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Seccion</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('section', { required: true})}>
            <option value="">[Seleccione]</option>
            <option value="food">Comida</option>
            <option value="toy">Juguete</option>
            <option value="article">Articulo</option>
            <option value="medicine">Medicamento</option>
          </select>
        </div>



        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('categoryId', { required: true})}>
            <option value="">[Seleccione]</option>
            {
            categories.map( category => (
                <option key={category.id} value={category.id}>{category.name}</option>
                
            ))
            }
          </select>
        </div>

        <button className="btn-primary w-full mt-2">
          Guardar
        </button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="w-full">
        {/* As checkboxes */}
        <div className="flex flex-col">


          <div className="flex flex-col mb-2">

            <span>Fotos</span>
            <input 
              type="file"
              multiple 
              className="p-2 border rounded-md bg-gray-200" 
              accept="image/png, image/jpeg"
            />

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
              product.ProductImage?.map( image => (
                <div key={ image.id}>
                  <Image alt={product.title ?? ''} src={`/products/${image.url}`} width={300} height={300}
                  className="rounded-t shadow-md"/>

                  <button 
                    type="button"
                    onClick={() => console.log(image.id, image.url)}
                  className="btn-danger rounded-b-xl w-full">
                    Eliminar
                  </button>

                </div>
              ))
            }
          </div>

        </div>
      </div>
    </form>
  );
};
