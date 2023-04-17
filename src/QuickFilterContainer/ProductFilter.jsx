import React, { useState, useEffect } from 'react';
import { getProducts } from "../asyncmock";
import "./QuickFilter.css"


const genders = ['', '--------', 'Male', 'Female'];
const sizes = ['', '--------', 'Small', 'Medium', 'Large', 'Extra-large'];
const colors = ['', '--------', 'Red', 'Blue', 'Black', 'Green'];
const categories = ['', '--------', 'Hoodies', 'Bags', 'Shirts', 'Sweatshirts', 'Hats']
const likeBtn = "https://cdn-icons-png.flaticon.com/512/54/54966.png";

function ProductFilter() {
    const [selectedFilters, setSelectedFilters] = useState({
        gender: '',
        size: '',
        color: '',
        category: ''
    });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => setProducts(response))
            .catch(error => console.error(error))
    })

    const filteredProducts = products.filter(product => {
        return (
            (selectedFilters.gender === '' || selectedFilters.gender === product.gender || selectedFilters.gender === '--------') &&
            (selectedFilters.size === '' || selectedFilters.size === product.size || selectedFilters.size === '--------') &&
            (selectedFilters.color === '' || selectedFilters.color === product.color || selectedFilters.color === '--------') &&
            (selectedFilters.category === '' || selectedFilters.category === product.category || selectedFilters.category === '--------')
        );
    });

    return (
        <div>
            <div className="contenedorQuickFilter">
                <select
                    value={selectedFilters.gender}
                    onChange={e =>
                        setSelectedFilters({ ...selectedFilters, gender: e.target.value })
                    }
                >
                    <option value="">Gender</option>
                    {genders.map(gender => (
                        <option key={gender} value={gender}>
                            {gender || 'All'}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedFilters.size}
                    onChange={e =>
                        setSelectedFilters({ ...selectedFilters, size: e.target.value })
                    }
                >
                    <option value="">Size</option>
                    {sizes.map(size => (
                        <option key={size} value={size}>
                            {size || 'All'}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedFilters.color}
                    onChange={e =>
                        setSelectedFilters({ ...selectedFilters, color: e.target.value })
                    }
                >
                    <option value="">Color</option>
                    {colors.map(color => (
                        <option key={color} value={color}>
                            {color || 'All'}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedFilters.category}
                    onChange={e =>
                        setSelectedFilters({ ...selectedFilters, category: e.target.value })
                    }
                >
                    <option value="">Category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category || 'All'}
                        </option>
                    ))}
                </select>
            </div>

            <ul>
                {filteredProducts.map((product) => (
                    <div className="card" key={product.id}>
                        <div className="saleContainer">
                            <p>Sale</p>
                        </div>
                        <div className="likeBtnCardContainer">
                            <img className="likeBtnCard" src={likeBtn} alt="" />
                        </div>
                        <img className="productImage" src={product.img} alt="" />
                        <div className="productNameSaleContainer">
                            <div className="productNameTitleContainer">
                                <h3 className="productNameTitle">{product.name}</h3>
                                <h4 className="productColor">{product.color}</h4>
                            </div>
                            <div className="priceContainer">
                                <h3 className="productSale">{product.gender}</h3>
                                <h4 className="productPrice">$ {product.price}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ProductFilter;
