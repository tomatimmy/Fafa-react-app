import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock'
import { getProductsSpecial } from '../asyncmock';
import ProductCardsList from '../ProductCardsList/ProductCardsList';
import './ProductCardsContainer.css'

const ProductCardsContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsSpecial()
            .then(response => setProducts(response))
            .catch(error => console.error(error))
    })

    return (
        <div className="productsCardContainer">
            <ProductCardsList products={products} />
        </div>
    )
}

export default ProductCardsContainer