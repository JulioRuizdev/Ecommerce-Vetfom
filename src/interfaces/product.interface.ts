export interface Product {
    //Todo: id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Types;
    section: Category;
}

export type Category = 'food'|'toy'|'article'|'medicine';
export type Size = '500 gr'|'1 KG'|'2 KG'|'5 KG'|'10 KG';
export type Types = 'cat'|'dog'|'chicken'|'other';