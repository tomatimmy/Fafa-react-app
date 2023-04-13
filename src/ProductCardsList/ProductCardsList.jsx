import './ProductCardsList.css'
import ProductCard from '../ProductsCards/ProductCard'

const ProductCardsList = ({products}) => {
  return (
    <div className="productsCardList">
        {products.map(prod => <ProductCard key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ProductCardsList