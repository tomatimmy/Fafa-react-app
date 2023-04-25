import './ProductCardsList.css'
import ProductCard from '../ProductsCards/ProductCard'

const ProductCardsList = ({products}) => {
  return (
    <div className="productsCardList">
        {products.filter(el => el.special === true).map(prod => <ProductCard key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ProductCardsList