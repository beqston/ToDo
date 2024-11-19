import search from "../assets/Photo/search.png"
import arrow from "../assets/Photo/arrow.png"
import burgMenu from "../assets/Photo/burgMenu.png"
import bgProfile from "../assets/Photo/bgProfile.png"
import lineY from "../assets/Photo/LineY.png"
import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import MyDay from "../assets/Photo/MyDay.png"
import bookmark from "../assets/Photo/bookmark.png"
import dashboard from "../assets/Photo/dashboard.png"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

const Header = ()=> {
    const[showInput, setShowInput] = useState(false);
    const[ showMenu, setShowMenu] = useState("hidden");

    const searchTodo = useRef()


    const handlInputShow = ()=> {
        setShowInput(!showInput)
    }

    const navigate = useNavigate();

    const handlShowMenu = ()=> {
        if(showMenu === "hidden"){
            setShowMenu("block")
        }else{
            setShowMenu("hidden")
        }
    }

    return(
    <>
        <header className="hidden md:flex w-full flex  border-b-[1px] border-[#C7CAD0]">

            <div className="relative ml-[30px] my-[14px] w-[430px] h-[40px] flex items-center">
                <img src={search} alt="search" className="absolute left-[14px] w-[22px] h-[22px] "/>
                <input ref={searchTodo.current} className="bg-[#C7CAD0] w-[430px] h-[40px] rounded-[8px] placeholder: pl-[42px] placeholder:text-[14px] placeholder:font-bold placeholder:text-[black] " type="text" placeholder="search"/>
            </div>

            <div className="flex items-center absolute top-[12px] right-[40px] ">
                <h2 className="flex">
                    EN
                </h2>
                
                <img src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
                <div className="ml-[12px]">
                    <SignedIn>
                    <UserButton />
                    </SignedIn>

                    <SignedOut>
                    <Link to="/sign-in">Sign In</Link>
                    </SignedOut>
                </div>
            </div>

        </header>


        <header className="max-md:flex justify-between items-center p-[1rem] border-b-[2px] border-[#C7CAD0] relative  hidden">
            <img onClick={handlShowMenu} src={burgMenu} alt="burg-menu" />
            <img src={bgProfile} alt="bg-profile" />

            <input className={`${showInput? "flex": "hidden"} bg-[#C7CAD0] outline-none max-w-[230px] w-[40%] h-[32px] rounded-[8px] placeholder: pl-[42px] placeholder:text-[14px] placeholder:font-bold placeholder:text-[black] `} type="text" placeholder="Search" />

            <div className="min-w-[72px] min-w-[100px] flex justify-between  ">
                <img onClick={handlInputShow} className="w-[24px] h-[24px] " src={search} alt="search" />
                <img src={lineY} alt="line" /> 

                <div className="ml-[12px]">
                    <SignedIn>
                    <UserButton />
                    </SignedIn>

                    <SignedOut>
                    <Link to="/sign-in">Sign In</Link>
                    </SignedOut>
                </div>
                
            </div>

            <nav onClick={handlShowMenu} className={`h-screen w-[48%] ${showMenu} transition-all pt-[20px] pl-[10px] bg-[#8FB52D] justify-start content-start z-20 flex flex-col items-start absolute top-[0px] left-[0px] `}>
                    <li  onClick={()=> navigate("/")} className="flex text-[#252931] font-medium  w-[90%]  gap-x-[12px] items-center cursor-pointer hover:bg-[#E7E8EA] p-[1rem]">
                        <img className="w-[20px] h-[20px] " src={MyDay} alt="My-Day" />
                        <Link to={"/"}>My Day</Link>
                    </li>

                    <li onClick={()=> navigate("/bookmark")} className="flex text-[#252931] font-medium  w-[90%] gap-x-[12px] items-center cursor-pointer hover:bg-[#E7E8EA] p-[1rem]">
                        <img className="w-[20px] h-[20px] " src={bookmark} alt="bookmark" />
                        <Link to={"/bookmark"}>Important</Link>
                    </li>

                    
                    <li onClick={()=> navigate("/dashboard")} className="flex text-[#252931] font-medium  w-[90%] gap-x-[12px] items-center cursor-pointer hover:bg-[#E7E8EA] p-[1rem]">
                        <img className="w-[20px] h-[20px] " src={dashboard} alt="bookmark" />
                        <Link to={"/bookmark"}>Dashboard</Link>
                    </li>
            </nav>

        </header>
        </>
    )
}
export default Header;