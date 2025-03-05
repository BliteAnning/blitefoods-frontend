import { useContext } from "react";
import { StoredContext } from "../Context/StoredContext";
import FoodItems from "./FoodItems";

const DisplayFood = ({category}) => {

    const {food_list} = useContext(StoredContext)
    return ( 
        <div id="displayFood">
            <div className="displayFoodHeader">
                <h1>Top dishes near you</h1>
            </div>
            <div className="displyFoodImgs">
                {food_list.map((item,index) => {
                    {console.log(category, item.category);}
                    if(category === 'All' || category===item.category){
                        return <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    }
                    
                    
                })}
            </div>
        </div>
     );
}
 
export default DisplayFood;