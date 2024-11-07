import { Link, useNavigate } from "react-router-dom";
import MyDay from "../assets/Photo/MyDay.png"
import bookmark from "../assets/Photo/bookmark.png"
import dashboard from "../assets/Photo/dashboard.png"


const Navbar = ()=>{

    const navigate = useNavigate();

    return(
        <>
            <nav className="hidden md:block w-full min-h-screen border-r-[1px] border-[#C7CAD0] ">
                <ul className="pt-[100px]">
                    <li  onClick={()=> navigate("/")} className="flex text-[#252931] font-medium  w-[90%] m-auto  gap-x-[12px] items-center cursor-pointer hover:bg-[#E7E8EA] p-[1rem]">
                        <img className="w-[20px] h-[20px] " src={MyDay} alt="My-Day" />
                        <Link to={"/"}>My Day</Link>
                    </li>

                    <li onClick={()=> navigate("/bookmark")} className="flex text-[#252931] font-medium  w-[90%] m-auto gap-x-[12px] items-center cursor-pointer hover:bg-[#E7E8EA] p-[1rem]">
                        <img className="w-[20px] h-[20px] " src={bookmark} alt="bookmark" />
                        <Link to={"/bookmark"}>Important</Link>
                    </li>

                    
                    <li onClick={()=> navigate("/dashboard")} className="flex text-[#252931] font-medium  w-[90%] m-auto gap-x-[12px] items-center cursor-pointer hover:bg-[#E7E8EA] p-[1rem]">
                        <img className="w-[20px] h-[20px] " src={dashboard} alt="bookmark" />
                        <Link to={"/bookmark"}>Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;