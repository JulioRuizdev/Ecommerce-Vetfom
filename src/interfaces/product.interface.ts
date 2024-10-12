export interface Product {
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    //ToDo type: Types;
    section: Category;
}


export interface CartProduct{
    id: string;
    slug: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export interface ProductImage{
    id: number;
    url: string;
    productId: string;
}

type Category = 'food'|'toy'|'article'|'medicine';
export type Types = 'cat'|'dog'|'chicken'|'other';