const products = [
    {name: "Hoodie", price: 65, id: 1, img: '../img/image.png'},
    {name: "Bag", price: 70, id: 2, img: '../img/image.png'},
    {name: "Tshirt", price: 75, id: 3, img: '../img/image.png'},
    {name: "Sweatshirt", price: 80, id: 4, img: '../img/image.png'},
    {name: "Hat", price: 85, id: 5, img: '../img/image.png'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 2000)
    })
}