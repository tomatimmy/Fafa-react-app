const products = [
    { name: "Hoodie", price: 65, id: 1, img: '../img/image.png', color: "Red", size: "Small", gender: "Male", category: "Hoodies" },
    { name: "Bag", price: 70, id: 2, img: '../img/image.png', color: "Blue", size: "Medium", gender: "Female", category: "Bags", special: true },
    { name: "T-shirt", price: 75, id: 3, img: '../img/image.png', color: "Black", size: "Large", gender: "Female", category: "Shirts" },
    { name: "Sweatshirt", price: 80, id: 4, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts" },
    { name: "Hat", price: 85, id: 5, img: '../img/image.png', color: "Red", size: "Medium", gender: "Female", category: "Hats", special: true }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products);
    })
}