import { useContext,useState, useEffect } from "react";
import { StoredContext } from "../../Context/StoredContext";

const PlaceOrder = () => {

    const {getTotalAmount,token, food_list,url, cartItem} =useContext(StoredContext);

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

    useEffect(()=>{
        console.log(data);
        
    },[data])


    return (
        <form className="order">
            <div className="orderLeft">
                <p className="orderTitle">Delivery information</p>
                <div className="multiFields">
                    <input name='firstname' onChange={onChangeHandler} value={data.firstname} type="text" placeholder="First name" />
                    <input name='lastname' type="text" onChange={onChangeHandler} value={data.lastname} placeholder="Last name" />
                </div>
                <input name='street' type="text" onChange={onChangeHandler} value={data.street} placeholder="Street" />
                <input name='email' type="email" onChange={onChangeHandler} value={data.email} placeholder="Email" />
                <div className="multiFields">
                    <input name='city' type="text" onChange={onChangeHandler} value={data.city} placeholder="City" />
                    <input name='state' type="text" onChange={onChangeHandler} value={data.state} placeholder="State" />
                </div>
                <div className="multiFields">
                    <input name='zipcode' type="text" onChange={onChangeHandler} value={data.zipcode} placeholder="zip code" />
                    <input name='country' type="text" onChange={onChangeHandler} value={data.country} placeholder="Country" />
                </div>
                <input name='phone' type="tel" onChange={onChangeHandler} value={data.phone} placeholder="Phone" />
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
                    <button >Proceed to payment</button>
                </div>
            </div>

        </form>
    );
}

export default PlaceOrder;