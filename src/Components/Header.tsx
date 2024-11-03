import search from "../assets/Photo/search.png"
import arrow from "../assets/Photo/arrow.png"
import profile from "../assets/Photo/profile.png"

const Header = ()=> {
    return(
        <header className="w-full flex  border-b-[1px] border-[#C7CAD0]">

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
    )
}
export default Header;