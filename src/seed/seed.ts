import bcryptjs from 'bcryptjs';

export interface SeedProduct {
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


interface SeedUser{
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user';
}

export type Category = 'food' | 'toy' | 'article' | 'medicine';
export type Types = 'Gato' | 'Perro' | 'Ave' | 'Otro';

interface SeedData {
    users: SeedUser[];
    categories:string[];
    products: SeedProduct[];
}




export const initialData: SeedData = {

    users: [
        {
            email: 'julio@gmail.com',
            name: 'Julio',
            password: bcryptjs.hashSync('123456'),
            role: 'admin'
        },

        {
            email: 'cesar@gmail.com',
            name: 'Cesar',
            password: bcryptjs.hashSync('123456'),
            role: 'user'
        },
    ],

    categories: ['Gato', 'Perro', 'Ave', 'Otro'],

    products: [
        {
            description: "Alimento para perros Pedigree, ideal para mantener a tu perro saludable y lleno de energía.",
            images: ['Pedigree_1.png', 
                'Pedigree_2.png'],
            inStock: 10,
            price: 59.9,
            slug: "pedigree",
            tags: ['perro', 'comida'],
            title: "Pedigree",
            type: 'Perro',
            section: 'food'
        },
        {
            description: "Alimento para gatos Ricocat, con todos los nutrientes necesarios para su bienestar.",
            images: ['Ricocat_1.png', 'Ricocat_2.png'],
            inStock: 8,
            price: 49.9,
            slug: "ricocat",
            tags: ['gato', 'comida'],
            title: "Ricocat",
            type: 'Gato',
            section: 'food'
        },
        {
            description: "Galletas Rico Crack, un delicioso y crujiente snack para tu perro.",
            images: ['Ricocrack_1.png', 'Ricocrack_2.png'],
            inStock: 15,
            price: 19.9,
            slug: "rico_crack",
            tags: ['perro', 'comida'],
            title: "Rico Crack",
            type: 'Perro',
            section: 'food'
        },
        {
            description: "Alimento para perros Canbo, el equilibrio perfecto para la nutrición de tu mascota.",
            images: ['Canbo_1.png', 'Canbo_2.png'],
            inStock: 25,
            price: 69.9,
            slug: "canbo",
            tags: ['perro', 'comida'],
            title: "Canbo",
            type: 'Perro',
            section: 'food'
        },
        {
            description: "Alimento para gatos Whiskas Premium, diseñado para proporcionar la mejor nutrición.",
            images: ['Whiskaspremium_1.png', 'Whiskaspremium_2.png'],
            inStock: 10,
            price: 75.9,
            slug: "whiskas_premium",
            tags: ['gato', 'comida'],
            title: "Whiskas Premium",
            type: 'Gato',
            section: 'food'
        },
        {
            description: "Alimento premium para gatos Super Cat, con proteínas de alta calidad.",
            images: ['Supercat_1.png', 'Supercat_2.png'],
            inStock: 5,
            price: 54.9,
            slug: "super_cat",
            tags: ['gato', 'comida'],
            title: "Super Cat",
            type: 'Gato',
            section: 'food'
        },
        {
            description: "Ratón de juguete para gatos, ayuda a estimular sus instintos naturales.",
            images: ['Toymouse_1.png', 'Toymouse_2.png'],
            inStock: 30,
            price: 14.9,
            slug: "raton_juguete",
            tags: ['gato', 'juguete'],
            title: "Ratón Juguete",
            type: 'Gato',
            section: 'toy'
        },
        {
            description: "Juguete interactivo para gatos, perfecto para mantenerlos entretenidos.",
            images: ['Interactivetoy_1.png', 'Interactivetoy_2.png'],
            inStock: 25,
            price: 24.9,
            slug: "juguete_interactivo",
            tags: ['gato', 'juguete'],
            title: "Juguete Interactivo",
            type: 'Gato',
            section: 'toy'
        },
        {
            description: "Collar de cuero para perros, accesorio duradero y elegante.",
            images: ['Collar_1.png', 'Collar_2.png'],
            inStock: 10,
            price: 29.9,
            slug: "collar_cuero",
            tags: ['perro', 'articulo'],
            title: "Collar de Cuero",
            type: 'Perro',
            section: 'article'
        },
        {
            description: "Medicina 1 para mascotas, ayuda a tratar condiciones de salud específicas.",
            images: ['Medicina1_1.png', 'Medicina1_2.png'],
            inStock: 15,
            price: 99.9,
            slug: "medicina_01",
            tags: ['medicina', 'salud'],
            title: "Medicina 1",
            type: 'Perro',
            section: 'medicine'
        },
        {
            description: "Medicina 2, perfecta para fortalecer el sistema inmunológico de tu mascota.",
            images: ['Medicina2_1.png', 'Medicina2_2.png'],
            inStock: 20,
            price: 89.9,
            slug: "medicina_02",
            tags: ['medicina', 'salud'],
            title: "Medicina 2",
            type: 'Gato',
            section: 'medicine'
        },
        {
            description: "Medicina 3 para gatos y perros, ideal para problemas digestivos.",
            images: ['Medicina3_1.png', 'Medicina3_2.png'],
            inStock: 18,
            price: 79.9,
            slug: "medicina_03",
            tags: ['medicina', 'salud'],
            title: "Medicina 3",
            type: 'Perro',
            section: 'medicine'
        },
        {
            description: "Medicina 4, mejora la salud articular de las mascotas.",
            images: ['Medicina4_1.png', 'Medicina4_2.png'],
            inStock: 10,
            price: 59.9,
            slug: "medicina_04",
            tags: ['medicina', 'salud'],
            title: "Medicina 4",
            type: 'Perro',
            section: 'medicine'
        },
        {
            description: "Medicina 5, diseñada para mejorar la salud del corazón en mascotas.",
            images: ['Medicina5_1.png', 'Medicina5_2.png'],
            inStock: 25,
            price: 99.9,
            slug: "medicina_05",
            tags: ['medicina', 'salud'],
            title: "Medicina 5",
            type: 'Gato',
            section: 'medicine'
        },
        {
            description: "Medicina 6 para problemas respiratorios, adecuada para gatos y perros.",
            images: ['Medicina6_1.png', 'Medicina6_2.png'],
            inStock: 12,
            price: 109.9,
            slug: "medicina_06",
            tags: ['medicina', 'salud'],
            title: "Medicina 6",
            type: 'Perro',
            section: 'medicine'
        },
        {
            description: "Medicina 7, una solución integral para dolencias comunes en mascotas.",
            images: ['Medicina7_1.png', 'Medicina7_2.png'],
            inStock: 30,
            price: 69.9,
            slug: "medicina_07",
            tags: ['medicina', 'salud'],
            title: "Medicina 7",
            type: 'Perro',
            section: 'medicine'
        },
        {
            description: "Ropa para gatos, diseño cómodo y elegante.",
            images: ['Ropagatos_1.png', 'Ropagatos_2.png'],
            inStock: 12,
            price: 35.9,
            slug: "ropa_gatos",
            tags: ['gato', 'articulo'],
            title: "Ropa Gatos",
            type: 'Gato',
            section: 'article'
        },
        {
            description: "Ropa para perros, ideal para mantener a tu perro abrigado.",
            images: ['Ropaperros_1.png', 'Ropaperros_2.png'],
            inStock: 15,
            price: 49.9,
            slug: "ropa_perros",
            tags: ['perro', 'articulo'],
            title: "Ropa Perros",
            type: 'Perro',
            section: 'article'
        }
    ]
};
