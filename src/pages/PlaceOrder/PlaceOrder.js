import { useContext,useState } from "react";
import { StoredContext } from "../../Context/StoredContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PlaceOrder = () => {

    const {getTotalAmount, token, food_list,url, cartItem} =useContext(StoredContext);
    //
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email: "",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"",
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data, [name]:value}))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        food_list.map((item)=>{
            if (cartItem[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItem[item._id];
                orderItems.push(itemInfo)
            }
        })
        let orderData ={
            address:data,
            items: orderItems,
            amount: getTotalAmount()+2, 
            email:data.email
        }
        let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}})
        if (response.data.success) {
            const {session_url} = response.data;
            window.location.replace(session_url);
        }else{
            alert("Error")
        }
        
    }
    const navigate = useNavigate();
    useEffect(()=>{
        if (!token) {
            navigate("/cart")
        } else if(getTotalAmount()===0){
            navigate("/cart")
        }
    },[token])



    return (
        <form className="order" onSubmit={placeOrder}>
            <div className="orderLeft">
                <p className="orderTitle">Delivery information</p>
                <div className="multiFields">
                    <input name='firstname' required onChange={onChangeHandler} value={data.firstname} type="text" placeholder="First name" />
                    <input name='lastname'required type="text" onChange={onChangeHandler} value={data.lastname} placeholder="Last name" />
                </div>
                <input name='street' required type="text" onChange={onChangeHandler} value={data.street} placeholder="Street" />
                <input name='email' required type="email" onChange={onChangeHandler} value={data.email} placeholder="Email" />
                <div className="multiFields">
                    <input name='city' required type="text" onChange={onChangeHandler} value={data.city} placeholder="City" />
                    <input name='state' required type="text" onChange={onChangeHandler} value={data.state} placeholder="State" />
                </div>
                <div className="multiFields">
                    <input name='zipcode' required type="text" onChange={onChangeHandler} value={data.zipcode} placeholder="zip code" />
                    <input name='country' required type="text" onChange={onChangeHandler} value={data.country} placeholder="Country" />
                </div>
                <input name='phone' required type="tel" onChange={onChangeHandler} value={data.phone} placeholder="Phone" />
            </div>
            <div className="orderRight">
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
                            <p>${getTotalAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cartTotalDetails">
                            <p>Total</p>
                            <p>${getTotalAmount()===0?0:getTotalAmount() + 2}</p>
                        </div>
                    </div>
                    <button type="submit">Proceed to payment</button>
                </div>
            </div>

        </form>
    );
}

export default PlaceOrder;