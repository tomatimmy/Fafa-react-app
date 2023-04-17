import './ProductCard.css'

const ProductCard = ({ id, price, name, img, color }) => {
    const likeBtn = "https://cdn-icons-png.flaticon.com/512/54/54966.png";
    return (
        <div className="card" key={id}>
            <div className="saleContainer">
                <p>Sale</p>
            </div>
            <div className="likeBtnCardContainer">
                <img className="likeBtnCard" src={likeBtn} alt="" />
            </div>
            <img className="productImage" src={img} alt="" />
            <div className="productNameSaleContainer">
                <div className="productNameTitleContainer">
                    <h3 className="productNameTitle">{name}</h3>
                    <h4 className="productColor">{color}</h4>
                </div>
                <div className="priceContainer">
                    <h3 className="productSale">Sale</h3>
                    <h4 className="productPrice">$ {price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductCard