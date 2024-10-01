interface Product {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    section: 'food' | 'toy' | 'article' | 'medicine';
}

type ValidSizes = '500 gr' | '1 KG' | '2 KG' | '5 KG' | '10 KG';
type ValidTypes = 'cat' | 'dog' | 'bird' | 'other';

interface SeedData {
    products: Product[];
}

export const initialData: SeedData = {
    products: [
        {
            description: "Pedigree dog food, ideal for keeping your dog healthy and full of energy.",
            images: ['comida_01.jpg'],
            inStock: 10,
            price: 59.9,
            sizes: ['1 KG', '2 KG', '5 KG'],
            slug: "pedigree",
            tags: ['dog', 'food'],
            title: "Pedigree",
            type: 'dog',
            section: 'food'
        },
        {
            description: "Ricocat cat food, with all the necessary nutrients for their well-being.",
            images: ['comida_02.jpg'],
            inStock: 8,
            price: 49.9,
            sizes: ['500 gr', '1 KG', '2 KG'],
            slug: "ricocat",
            tags: ['cat', 'food'],
            title: "Ricocat",
            type: 'cat',
            section: 'food'
        },
        {
            description: "Super Cat premium cat food, with high-quality proteins.",
            images: ['comida_03.jpg'],
            inStock: 5,
            price: 54.9,
            sizes: ['500 gr', '1 KG'],
            slug: "super_cat",
            tags: ['cat', 'food'],
            title: "Super Cat",
            type: 'cat',
            section: 'food'
        },
        {
            description: "Ricocan balanced food for dogs, ideal for dogs of all ages.",
            images: ['comida_04.jpg'],
            inStock: 7,
            price: 54.9,
            sizes: ['1 KG', '2 KG'],
            slug: "ricocan",
            tags: ['dog', 'food'],
            title: "Ricocan",
            type: 'dog',
            section: 'food'
        },
        {
            description: "Whiskas cat food made with natural ingredients and delicious taste.",
            images: ['comida_05.jpg'],
            inStock: 12,
            price: 54.9,
            sizes: ['500 gr', '1 KG'],
            slug: "whiskas",
            tags: ['cat', 'food'],
            title: "Whiskas",
            type: 'cat',
            section: 'food'
        },
        {
            description: "Bone toy for dogs, ideal to keep your pet active and happy.",
            images: ['juguete_01.jpg'],
            inStock: 20,
            price: 39.9,
            sizes: ['500 gr'],
            slug: "bone_toy",
            tags: ['dog', 'toy'],
            title: "Bone Toy",
            type: 'dog',
            section: 'toy'
        },
        {
            description: "Rico Crack biscuits, a delicious and crunchy snack for your dog.",
            images: ['comida_06.jpg'],
            inStock: 15,
            price: 19.9,
            sizes: ['500 gr'],
            slug: "rico_crack",
            tags: ['dog', 'food'],
            title: "Rico Crack",
            type: 'dog',
            section: 'food'
        },
        {
            description: "Canbo dog food, the perfect balance for your pet's nutrition.",
            images: ['comida_07.jpg'],
            inStock: 25,
            price: 69.9,
            sizes: ['2 KG', '5 KG'],
            slug: "canbo",
            tags: ['dog', 'food'],
            title: "Canbo",
            type: 'dog',
            section: 'food'
        },
        {
            description: "Whiskas Premium cat food, designed to provide the best nutrition.",
            images: ['comida_08.jpg'],
            inStock: 10,
            price: 75.9,
            sizes: ['1 KG', '2 KG', '5 KG'],
            slug: "whiskas_premium",
            tags: ['cat', 'food'],
            title: "Whiskas Premium",
            type: 'cat',
            section: 'food'
        },
        {
            description: "Toy mouse for cats, helps stimulate their natural instincts.",
            images: ['juguete_02.jpg'],
            inStock: 30,
            price: 14.9,
            sizes: ['500 gr'],
            slug: "toy_mouse",
            tags: ['cat', 'toy'],
            title: "Toy Mouse",
            type: 'cat',
            section: 'toy'
        },
        {
            description: "Interactive toy for cats, perfect for keeping them entertained.",
            images: ['juguete_03.jpg'],
            inStock: 25,
            price: 24.9,
            sizes: ['500 gr'],
            slug: "interactive_toy",
            tags: ['cat', 'toy'],
            title: "Interactive Toy",
            type: 'cat',
            section: 'toy'
        },
        {
            description: "Leather collar for dogs, durable and stylish accessory.",
            images: ['accesorio_01.jpg'],
            inStock: 10,
            price: 29.9,
            sizes: ['500 gr'],
            slug: "leather_collar",
            tags: ['dog', 'article'],
            title: "Leather Collar",
            type: 'dog',
            section: 'article'
        }
    ]
};
