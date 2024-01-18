import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import store from "../utils/store";

export const Title = () => (
    <Link className="redirect" to="/">
    <img className="h-16 mt-2 ml-5" alt="logo" src={logo}/>
    </Link>
);

const HeaderComponent = () => {
    const cartItems = useSelector(store=>store.cart.items);

return(
    <div className=" flex justify-between bg-blue-100 shadow-md">
        <Title />
        <div className=" mr-20">
            <ul className=" flex py-5">
                <li className=" px-2 my-1 hover:font-bold"><Link className="" to="/">Home</Link></li>
                <li className=" px-2 my-1 hover:font-bold"><Link className="" to="/about">About Us</Link></li>
                <li className=" px-2 my-1 hover:font-bold"><Link className="" to="/contact">Contact Us</Link></li>
                <li className=" px-2 my-1 hover:font-bold"><Link className="" to="/cart">Cart ({cartItems.length})</Link></li>
                <li className=" px-2 my-1 hover:font-bold"><Link className="" to="/profile">Profile</Link></li>
                <button className="border-blue-500 text-white border p-1.5 px-3 ml-10 rounded-md bg-blue-500 hover:bg-white hover:text-blue-700">Login</button>
            </ul>
        </div>
    </div>
)
};

export default HeaderComponent;