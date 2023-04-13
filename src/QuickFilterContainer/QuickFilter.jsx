import './QuickFilter.css'

const QuickFilter = () => {
    return (
        <div className="contenedorQuickFilter">
            <select name="Product" id="product">
                <option value="" disabled selected hidden>Product</option>
                <option value="hoodies">Hoodies</option>
                <option value="sweatshirts">Sweatshirts</option>
                <option value="shirts">T-Shirts</option>
            </select>
            <select name="Gender" id="gender">
                <option value="" disabled selected hidden>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <select name="Size" id="size">
                <option value="" disabled selected hidden>Size</option>
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
                <option value="xl">Extra-large</option>
            </select>
            <select name="Color" id="color">
                <option value="" disabled selected hidden>Color</option>
            </select>
            {/* <select name="Price" id="price">
                <option value="" disabled selected hidden>Price</option>
            </select> */}
            <select name="Specials" id="specials">
                <option value="" disabled selected hidden>Specials</option>
                <option value="bags">Bags</option>
                <option value="beanies">Beanies</option>
                <option value="caps">Caps</option>
            </select>
        </div>
    )
}

export default QuickFilter