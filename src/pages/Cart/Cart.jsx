import React, { useContext } from 'react';
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

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
                                <p>Quantity: <b>{product.quantity}</b></p>
                                <p className='price'>£{product.price}</p>
                            </div>
                            <div className="cart-item-buttons">
                                <button className="decrease" onClick={() => decreaseQuantity(product.id)}>-</button>
                                <button className="increase" onClick={() => increaseQuantity(product.id)}>+</button>
                                <button className="remove" onClick={() => removeFromCart(product.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <h2>Pay on collection.<br /><h6>All our products are available to complete the order online, however it is a pay at collection service only.</h6></h2>
                    <hr />
                    <div className="total-price">
                        <h1>Total Cart Price: <b>£{totalPrice.toFixed(2)}</b></h1>
                        <h3>Total Item Quantity: {totalQuantity}</h3>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;