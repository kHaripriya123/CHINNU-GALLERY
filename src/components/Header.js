import logo from "../assets/images/Gemini_Generated_Image.jpg";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-between border border-solid border-gray-400 shadow-lg h-32 bg-emerald-600">
            <div className="flex p-2 m-2" >
                <img className="w-28  rounded-full" src={logo} />

                <h1 className="font-bold text-xl font-[cursive]  p-2 m-2"> CHINNU GALLERY </h1>
            </div>
            <div className="flex p-2 m-2">
                <Link to="/Home" className="p-2 m-2 font-bold"> HOME </Link>
                <Link to="/Cart" className="p-2 m-2 font-bold"> CART </Link>
            </div>
        </div>

    )
}
export default Header;