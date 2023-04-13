import './CategoriesHome.css'
import Bag from './Bag.png'
import Tshirt from './TShirt.png'
import Hoodie from './Hoodie.png'
import Sweatshirt from './Sweatshirt.png'

const CategoriesHome = () => {
  return (
    <div className="categoriesHomeContainer">
        <div className="categoriesCard">
            <img src={Bag} alt="" />
            <h2>Bags</h2>
        </div>
        <div className="categoriesCard">
            <img src={Hoodie} alt="" />
            <h2>Hoodies</h2>
        </div>
        <div className="categoriesCard">
            <img src={Sweatshirt} alt="" />
            <h2>Sweatshirts</h2>
        </div>
        <div className="categoriesCard">
            <img src={Tshirt} alt="" />
            <h2>T-Shirt</h2>
        </div>
    </div>
  )
}

export default CategoriesHome