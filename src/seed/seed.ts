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

interface SeedData {
    products: Product[];
}

export const initialData: SeedData = {
    products: [
        {
            description: "Pedigree dog food, ideal for keeping your dog healthy and full of energy.",
            images: ['comida_01.jpg',
                'comida_06.jpg'
            ],
            inStock: 10,
            price: 59.9,
            slug: "pedigree",
            tags: ['dog', 'food'],
            title: "Pedigree",
            type: 'dog',
            section: 'food'
        },
        {
            description: "Ricocat cat food, with all the necessary nutrients for their well-being.",
            images: ['comida_02.jpg',
                'comida_01.jpg'
            ],
            inStock: 8,
            price: 49.9,
            slug: "ricocat",
            tags: ['cat', 'food'],
            title: "Ricocat",
            type: 'cat',
            section: 'food'
        },
        {
            description: "Rico Crack biscuits, a delicious and crunchy snack for your dog.",
            images: ['comida_06.jpg',
                'comida_01.jpg'
            ],
            inStock: 15,
            price: 19.9,
            slug: "rico_crack",
            tags: ['dog', 'food'],
            title: "Rico Crack",
            type: 'dog',
            section: 'food'
        },
        {
            description: "Canbo dog food, the perfect balance for your pet's nutrition.",
            images: ['comida_07.jpg',
                'comida_01.jpg',
            ],
            inStock: 25,
            price: 69.9,
            slug: "canbo",
            tags: ['dog', 'food'],
            title: "Canbo",
            type: 'dog',
            section: 'food'
        },
        {
            description: "Whiskas Premium cat food, designed to provide the best nutrition.",
            images: ['comida_08.jpg',
                'comida_01.jpg',
            ],
            inStock: 10,
            price: 75.9,
            slug: "whiskas_premium",
            tags: ['cat', 'food'],
            title: "Whiskas Premium",
            type: 'cat',
            section: 'food'
        },
        {
            description: "Super Cat premium cat food, with high-quality proteins.",
            images: ['comida_03.jpg',
                'comida_01.jpg',
            ],
            inStock: 5,
            price: 54.9,
            slug: "super_cat",
            tags: ['cat', 'food'],
            title: "Super Cat",
            type: 'cat',
            section: 'food'
        },
        {
            description: "Toy mouse for cats, helps stimulate their natural instincts.",
            images: ['juguete_02.jpg',
                'comida_01.jpg',
            ],
            inStock: 30,
            price: 14.9,
            slug: "toy_mouse",
            tags: ['cat', 'toy'],
            title: "Toy Mouse",
            type: 'cat',
            section: 'toy'
        },
        {
            description: "Interactive toy for cats, perfect for keeping them entertained.",
            images: ['juguete_03.jpg',
                'comida_01.jpg',
            ],
            inStock: 25,
            price: 24.9,
            slug: "interactive_toy",
            tags: ['cat', 'toy'],
            title: "Interactive Toy",
            type: 'cat',
            section: 'toy'
        },
        {
            description: "Leather collar for dogs, durable and stylish accessory.",
            images: ['accesorio_01.jpg',
                'comida_01.jpg',
            ],
            inStock: 10,
            price: 29.9,
            slug: "leather_collar",
            tags: ['dog', 'article'],
            title: "Leather Collar",
            type: 'dog',
            section: 'article'
        },

        {
            description: "Medicine 1 for pets, helps treat specific health conditions.",
            images: ['medicina_01.png',
                'comida_01.jpg',
            ],
            inStock: 15,
            price: 99.9,
            slug: "medicine_01",
            tags: ['medicine', 'health'],
            title: "Medicine 1",
            type: 'dog',
            section: 'medicine'
        },
        {
            description: "Medicine 2, perfect for supporting your pet's immune system.",
            images: ['medicina_02.jpg',
                'comida_01.jpg',
            ],
            inStock: 20,
            price: 89.9,
            slug: "medicine_02",
            tags: ['medicine', 'health'],
            title: "Medicine 2",
            type: 'cat',
            section: 'medicine'
        },
        {
            description: "Medicine 3 for cats and dogs, ideal for digestive issues.",
            images: ['medicina_03.jpg',
                'comida_01.jpg',
            ],
            inStock: 18,
            price: 79.9,
            slug: "medicine_03",
            tags: ['medicine', 'health'],
            title: "Medicine 3",
            type: 'dog',
            section: 'medicine'
        },
        {
            description: "Medicine 4, improves joint health in pets.",
            images: ['medicina_04.jpg',
                'comida_01.jpg',
            ],
            inStock: 10,
            price: 59.9,
            slug: "medicine_04",
            tags: ['medicine', 'health'],
            title: "Medicine 4",
            type: 'dog',
            section: 'medicine'
        },
        {
            description: "Medicine 5, designed to enhance heart health in pets.",
            images: ['medicina_05.jpg',
                'comida_01.jpg',
            ],
            inStock: 25,
            price: 99.9,
            slug: "medicine_05",
            tags: ['medicine', 'health'],
            title: "Medicine 5",
            type: 'cat',
            section: 'medicine'
        },
        {
            description: "Medicine 6 for respiratory issues, suitable for cats and dogs.",
            images: ['medicina_06.png',
                'comida_01.jpg',
            ],
            inStock: 12,
            price: 109.9,
            slug: "medicine_06",
            tags: ['medicine', 'health'],
            title: "Medicine 6",
            type: 'dog',
            section: 'medicine'
        },
        {
            description: "Medicine 7, an all-in-one solution for common pet ailments.",
            images: ['medicina_07.jpg',
                'comida_01.jpg',
            ],
            inStock: 30,
            price: 69.9,
            slug: "medicine_07",
            tags: ['medicine', 'health'],
            title: "Medicine 7",
            type: 'dog',
            section: 'medicine'
        }
    ]
};