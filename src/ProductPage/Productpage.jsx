import React from 'react';
import './Productpage.css';

const Productpage = () => {
    return (
        <div className="product-page">
            <div className='Productborder'>
                <div className="product-image">
                    <img src="../../img/image.png" alt="Black and White T-Shirt" className="pimage" />
                </div>
                <div className="product-details">
                    <h1>Product name</h1>
                    <p>Product description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis corrupti tenetur error maiores eos velit, magnam hic quasi suscipit.</p>
                    <p>Features:</p>
                    <ul>
                        <li>100% cotton</li>
                        <li>Regular fit</li>
                        <li>Machine washable</li>
                    </ul>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Productpage;

