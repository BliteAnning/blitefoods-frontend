import { createContext, useEffect, useState } from "react";
/*import { food_list } from "../assets/assets";*/
import axios from 'axios'


export const StoredContext = createContext(null)

const StoredContextProvider = (props)=> {


    const[cartItem, setCartItem] = useState({})
    const url = "http://localhost:4000"
    const[token, setToken] = useState("")
    const[food_list, setFoodList] = useState([])

    const getFoodList = async ()=>{
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    const addToCart = async (itemid) => {
        if(!cartItem[itemid]){
            setCartItem((prev) => ({...prev, [itemid]:1}))
        }else{
            setCartItem((prev)=>({...prev, [itemid]: prev[itemid]+1}))
        }

        if(token){
            await axios.post(url + "/api/cart/add", {itemid}, {headers:{token}})
        }
    }

    const removeFromCart = async (itemid)=> {
        setCartItem((prev)=>({...prev, [itemid]: prev[itemid]-1}))
        if (token) {
            await axios.post(url+ "/api/cart/remove", {itemid}, {headers:{token}})
        }
    }

    const getTotalAmount =() =>{
        let totalAmount = 0;
        for (const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = food_list.find((product)=> product._id === item)
                totalAmount += itemInfo.price * cartItem[item]
            }
            
        }
        return totalAmount;
    }

    const loadCartData = async (token) =>{
        const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}})
        setCartItem(response.data.cartData);
    }

    useEffect(()=>{
        async function loadData (){
            await getFoodList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    useEffect(()=>{
        console.log(cartItem)
    }, [cartItem]);

    




    const StoredValue = { 
        food_list,
        addToCart,
        setCartItem,
        cartItem,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        setToken
    }
    return (
        <StoredContext.Provider value={StoredValue}>
            {props.children}
        </StoredContext.Provider>
    )
}

export default StoredContextProvider;


