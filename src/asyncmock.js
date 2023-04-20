const products = [
    { name: "Hoodie", price: 65, id: 1, img: '../img/image.png', color: "Red", size: "Small", gender: "Male", category: "Hoodies", special: 'yes' },
    { name: "Bag", price: 70, id: 2, img: '../img/image.png', color: "Blue", size: "Medium", gender: "Female", category: "Bags", special: 'yes' },
    { name: "T-shirt", price: 75, id: 3, img: '../img/image.png', color: "Black", size: "Large", gender: "Female", category: "Shirts", special: 'yes' },
    { name: "Sweatshirt", price: 80, id: 4, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: 'yes' },
    { name: "Hat", price: 85, id: 5, img: '../img/image.png', color: "Red", size: "Medium", gender: "Female", category: "Hats", special: 'yes' },
    { name: "Sweatshirt", price: 80, id: 6, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special:'no' },
    { name: "Sweatshirt", price: 80, id: 7, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: 'no' },
    { name: "Sweatshirt", price: 80, id: 8, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: 'no' },
    { name: "Sweatshirt", price: 80, id: 9, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: 'no' },
    { name: "Sweatshirt", price: 80, id: 10, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: 'no' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products);
    })
}