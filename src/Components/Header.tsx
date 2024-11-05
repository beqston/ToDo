import search from "../assets/Photo/search.png"
import arrow from "../assets/Photo/arrow.png"
import profile from "../assets/Photo/profile.png"
import burgMenu from "../assets/Photo/burgMenu.png"
import bgProfile from "../assets/Photo/bgProfile.png"
import lineY from "../assets/Photo/LineY.png"
import { useState } from "react"

const Header = ()=> {
    const[showInput, setShowInput] = useState(false);

    const handlInputShow = ()=> {
        setShowInput(!showInput)
    }

    return(
    <>
        <header className="hidden md:flex w-full flex  border-b-[1px] border-[#C7CAD0]">

            <div className="relative ml-[30px] my-[14px] w-[430px] h-[40px] flex items-center">
                <img src={search} alt="search" className="absolute left-[14px] w-[22px] h-[22px] "/>
                <input className="bg-[#C7CAD0] w-[430px] h-[40px] rounded-[8px] placeholder: pl-[42px] placeholder:text-[14px] placeholder:font-bold placeholder:text-[black] " type="text" placeholder="search"/>
            </div>

            <div className="flex items-center absolute top-[12px] right-[40px] ">
                <h2 className="flex">
                    EN
                </h2>
                <img src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
                <img src={profile} alt="profile" className="ml-[18px] w-[44px] h-[44px]"/>
            </div>

        </header>


        <header className=" max-md:flex justify-between items-center p-[1rem] border-b-[2px] border-[#C7CAD0] relative  hidden">
            <img src={burgMenu} alt="burg-menu" />
            <img src={bgProfile} alt="bg-profile" />

            <input className={`${showInput? "flex": "hidden"} bg-[#C7CAD0] outline-none max-w-[230px] w-[40%] h-[32px] rounded-[8px] placeholder: pl-[42px] placeholder:text-[14px] placeholder:font-bold placeholder:text-[black] `} type="text" placeholder="Search" />

            <div className="min-w-[72px] min-w-[100px] flex justify-between  ">
                <img onClick={handlInputShow} className="w-[24px] h-[24px] " src={search} alt="search" />
                <img src={lineY} alt="line" /> 
                <img className="w-[24px] h-[24px] " src={profile} alt="profile" />
            </div>

        </header>

        

        </>
    )
}
export default Header;