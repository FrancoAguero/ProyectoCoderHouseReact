import React from 'react'

//Material UI
import { Grid } from '@material-ui/core'

//style
import '../assets/styles/cart.css'

//Context
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cart } = useCart()
    
    return (
        <Grid container justifyContent="center">
            <div item className="cart_container">
                <div className="cart_title">
                    Shopping Cart<small> ((agregar numero) item in your cart)</small>
                    {cart?.map((item) => (
                            <div className="cart_items">
                            <ul className="cart_list">
                                <li className="cart_item clearfix">
                                    <div className="cart_item_image"><img src="" alt=""/></div>
                                    <div className="cart_item_info">
                                        <div className="cart_item_name cart_info_col">
                                            <div className="cart_item_title">Name</div>
                                            <div id="name" className="cart_item_text"><p>{item.product.name}</p></div>
                                        </div>
                                        <div className="cart_item_quantity cart_info_col">
                                            <div className="cart_item_title">Quantity</div>
                                            <div className="cart_item_text">{item.quantity}</div>
                                        </div>
                                        <div className="cart_item_price cart_info_col">
                                            <div className="cart_item_title">Price</div>
                                            <div className="cart_item_text">${item.product.price}</div>
                                        </div>
                                        <div className="cart_item_total cart_info_col">
                                            <div className="cart_item_title">Total</div>
                                            <div className="cart_item_text">${item.product.price}</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        )
                    )
                    }
                </div>
                <div className="order_total">
                    <div className="order_total_content text-md-right">
                        <div className="order_total_title">Order Total:</div>
                        <div className="order_total_amount">test</div>
                    </div>
                </div>
                <div className="cart_buttons"> 
                    <button id="reset" type="button" className="button cart_button_clear">reset cart</button>
                    <button type="button" className="button cart_button_checkout">Add to Cart</button>
                </div>
            </div>
        </Grid>
    )
}

export default Cart
