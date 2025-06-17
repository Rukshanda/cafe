import React from 'react';
import { FaCartArrowDown, FaDollarSign } from 'react-icons/fa6';

function Cards({ index, ID, pic, name, price, selectedItems, addToCart, className }) {
    return (
        <li key={index} id={ID}>
            <div className={`product-box ${className || ''}`}> {/* Add className prop */}
                <div className="product-img">
                    <img src={pic} alt={name} />
                </div>
                <div className="product-name text-center">
                    <h3>{name}</h3>
                </div>
                <div className="product-det flex items-center justify-between">
                    <div
                        className={`addTocart-btn ${selectedItems.includes(ID) ? "selectedCart" : ""}`}
                        onClick={() => addToCart(ID)}
                    >
                        <FaCartArrowDown />
                    </div>
                    <div className="product-price flex items-center">
                        <h4 className="text-[1.7rem]">{price}.00</h4>
                        <FaDollarSign className="dollar" />
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Cards;
