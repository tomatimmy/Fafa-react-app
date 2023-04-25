const products = [
    { name: "Hoodie", price: 65, id: 1, img: '../img/image.png', color: "Red", size: "Small", gender: "Male", category: "Hoodies", special: true },
    { name: "Bag", price: 70, id: 2, img: '../img/image.png', color: "Blue", size: "Medium", gender: "Female", category: "Bags", special: true },
    { name: "T-shirt", price: 75, id: 3, img: '../img/image.png', color: "Black", size: "Large", gender: "Female", category: "Shirts", special: true },
    { name: "Sweatshirt", price: 80, id: 4, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: true },
    { name: "Hat", price: 85, id: 5, img: '../img/image.png', color: "Red", size: "Medium", gender: "Female", category: "Hats", special: true },
    { name: "Sweatshirt", price: 80, id: 6, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special:false },
    { name: "Sweatshirt", price: 80, id: 7, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: false },
    { name: "Sweatshirt", price: 80, id: 8, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: false },
    { name: "Sweatshirt", price: 80, id: 9, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: false },
    { name: "Sweatshirt", price: 80, id: 10, img: '../img/image.png', color: "Green", size: "Extra-large", gender: "Male", category: "Sweatshirts", special: false }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products);
    })
}

export const getProductsSpecial = () => {
    return new Promise((resolve) => {
        const special = products.filter((product) => product.special);
        if (special.length > 0) {
            resolve(special)
        console.log(special)
        }
    })
}