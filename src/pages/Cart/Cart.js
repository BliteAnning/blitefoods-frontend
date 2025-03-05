import { useContext } from "react";
import { StoredContext } from "../../Context/StoredContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {

    const { food_list, cartItem, removeFromCart, getTotalAmount,url } = useContext(StoredContext);
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart-item">
                <div className="cartTitle">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItem[item._id] > 0) {
                        return (
                            <div>
                                <div className="cartTitle cartitem">
                                    <img src={url+"/images/"+item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>${item.price * cartItem[item._id]}</p>
                                    <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }

                })}
            </div>
            <div className="cartDelivery">
                <div className="cartTotal">
                    <div>
                        <h2>Total Cart</h2>
                        <div className="cartTotalDetails">
                            <p>subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartTotalDetails">
                            <p>Delivery fee</p>
                            <p>${getTotalAmount() ===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cartTotalDetails">
                            <p>Total</p>
                            <p>${getTotalAmount()===0?0:getTotalAmount() + 2}</p>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
                </div>
                <div className="promocode">
                <div>
                    <p>Enter your promo code here if you have one</p>
                    <div className="promocodeInput">
                        <input type="text" placeholder="promo code" />
                        <button>submit</button>
                    </div>
                </div>
            </div>
                
            </div>
            

        </div>
    );
}

export default Cart;