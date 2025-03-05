import { useContext} from "react";
import { assets } from "../assets/assets";
import { StoredContext } from "../Context/StoredContext";

const FoodItems = ({id, price, name, description, image}) => {


    const {addToCart, removeFromCart, cartItem,url} = useContext(StoredContext);

    return ( 
        <div id="foodItems">
            <div className="foodItemContainer">
                <img src={url+"/images/"+image} className="foodItemImg" alt="" />
                {!cartItem[id] 
                    ? <img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)} alt="" />
                    : <div className="foodItemCount">
                        <img src={assets.remove_icon_red}onClick={()=>removeFromCart(id)} alt="" className="removeItem" />
                        <p>{cartItem[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" className="itemAdd" />
                    </div>
                }
            </div>
            <div className="foodItemInfo">
                <div className="foodItemRating">
                    <p className="foodItemName">{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="foodItemDesc">{description}</p>
                <p className="foodItemPrice">${price}</p>
            </div>
        </div>
     );
}
 
export default FoodItems;