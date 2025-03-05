import { assets } from '../assets/assets';
import {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { StoredContext } from '../Context/StoredContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");
    const {getTotalAmount, token, setToken} = useContext(StoredContext);
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
            <div className="navMenu">
                <ul className="navList">
                    <Link to='/' onClick={() => setMenu("Home")} className ={menu === 'Home'? "active" : ""} >Home</Link>
                    <a href='#exploreMenu' onClick={() => setMenu("Menu")} className ={menu === 'Menu'? "active" : ""}>Menu</a>
                    <a href='#appDownload' onClick={() => setMenu("Mobile App")} className ={menu === 'Mobile App'? "active" : ""}>Mobile App</a>
                    <a href='#footer' onClick={() => setMenu("Contact us")} className ={menu === 'Contact us'? "active" : ""}>Contact us</a>
                </ul>
            </div>
            <div className="navRightMenu">
                <img src={assets.search_icon} alt="" className="searchIcon" />
                <div className="navSearchMenu">
                    <Link to="/Cart"><img src={assets.basket_icon} alt="" className="basketIcon" /></Link>
                    <div className={getTotalAmount()===0?"":"dot"}></div>
                </div>
                {!token?<button onClick={()=>setShowLogin(true)} className="sign">Sign Up</button>
                : <div className="navBarProfile">
                    <img src={assets.profile_icon} alt="" />
                    <ul className="dropDown">
                        <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                </div>
                }
                
            </div>
        </div>
    );
}

export default Navbar;