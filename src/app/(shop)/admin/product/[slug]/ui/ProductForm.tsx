"use client";

import { Category, Product } from "@/interfaces";

interface Props {
  product: Product;
  categories: Category[];
}


export const ProductForm = ({ product, categories }: Props) => {
  return (
    <form className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3">
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Identificador</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200"
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Precio</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Etiquetas</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Seccion</span>
          <select className="p-2 border rounded-md bg-gray-200">
            <option value="">[Seleccione]</option>
            <option value="food">Comida</option>
            <option value="toy">Juguete</option>
            <option value="article">Articulo</option>
            <option value="medicine">Medicamento</option>
          </select>
        </div>



        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <select className="p-2 border rounded-md bg-gray-200">
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

        </div>
      </div>
    </form>
  );
};
