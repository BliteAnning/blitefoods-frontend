import {menu_list} from '../assets/assets';


const ExploreMenu = ({category, setCategory}) => {
    return ( 
        <div id="exploreMenu">
            <h1>Explore our Menu</h1>
            <p className="exploreMenuText">
                Choose from a diverse menu of foods ranging from Noodles, Rice, Pastries and desserts. We are here to serve you. Scroll through our menu
                and find the one the appetizes you.
            </p>
            <div  className="exploreMenuItems">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=> setCategory(prev => prev === item.menu_name?'All' : item.menu_name)} key={index} className="exploreMenuList">
                            <img className={category === item.menu_name?'active':''}  src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
     );
}
 
export default ExploreMenu;