export interface Product {
    //Todo: id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    section: 'food'|'toy'|'article'|'medecine'
}

export type ValidSizes = '500 gr'|'1 KG'|'2 KG'|'5 KG'|'10 KG';
export type ValidTypes = 'cat'|'dog'|'chicken'|'other';