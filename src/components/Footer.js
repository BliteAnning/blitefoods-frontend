import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div id="footer">
            <div className="footerContent">
                <div className="footerLeft">
                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ad vitae fugit enim dolorum qui quaerat aperiam saepe laboriosam
                        adipisci, laborum neque sed distinctio iusto excepturi harum aut id eaque!</p>
                    <div className="socials">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footerCenter">
                    <h1>COMPANY</h1>
                    <ul>
                        <li>Home</li>
                        <li>Contact us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footerRight">
                    <h1>GET IN TOUCH</h1>
                    <ul>
                        <li>+233 551 956 888</li>
                        <li>blitefoods@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copyright">All right reserved 2024 - Blitefoods.com</p>
        </div>
    );
}

export default Footer;