import React, { useContext } from 'react';
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, decreaseQuantity } = useContext(CartContext);

    console.log("Cart items:", cart);

    return (
        <section className='cart'>
            <HeaderContainer imageSrc="/merchandise_header_img.webp" title="CART"/>
            <hr />
            {cart.length === 0 ? (
                <h2>You have an empty cart.<br /><h6>Browse our Merchandise to add products to your cart!</h6></h2>
            ) : (
                <div className='cart-items'>
                    {cart.map((product) => (
                        <div key={product.id} className="cart-item">
                            <img src={product.imageUrl} alt={product.name} loading="lazy"/>
                            <div className='cart-item-details'>
                                <h3>{product.name}</h3>
                                <p>{product.category}</p>
                                <p className='price'>£{product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                                <div className="cart-item-buttons">
                                    <button className="decrease" onClick={() => decreaseQuantity(product.id)}>-</button>
                                    <button className="remove" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Cart;