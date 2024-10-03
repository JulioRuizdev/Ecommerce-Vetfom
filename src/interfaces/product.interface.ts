export interface Product {
    //Todo: id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    type: Types;
    section: Category;
}

export type Category = 'food'|'toy'|'article'|'medicine';
export type Types = 'cat'|'dog'|'chicken'|'other';