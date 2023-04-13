import './CategoriesHomeB.css'
import Beanie from './Beanie.png'
import Hoodie from './Hoodie.png'

const CategoriesHomeB = () => {
  return (
    <div className="categoriesHomeContainerB">
        <div className="categoriesCardB">
            <img src={Beanie} alt="" />
            <h2>Beanies</h2>
        </div>
        <div className="categoriesCardB">
            <img src={Hoodie} alt="" />
            <h2>Hats</h2>
        </div>
    </div>
  )
}

export default CategoriesHomeB