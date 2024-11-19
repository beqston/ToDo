import frame1  from "../assets/AutPhoto/frame1.png"
import frame2  from "../assets/AutPhoto/frame2.png"
import frame3  from "../assets/AutPhoto/frame3.png"
import frame4  from "../assets/AutPhoto/frame4.png"
import frame5  from "../assets/AutPhoto/frame5.png"
import frame6  from "../assets/AutPhoto/frame6.png"
import frame7  from "../assets/AutPhoto/frame7.png"
import frame8  from "../assets/AutPhoto/frame8.png"
import frame9  from "../assets/AutPhoto/frame9.png"
import frame10  from "../assets/AutPhoto/frame10.png"
import frame11  from "../assets/AutPhoto/frame11.png"
import frame12  from "../assets/AutPhoto/frame12.png"
import frame13  from "../assets/AutPhoto/frame13.png"
import frame14  from "../assets/AutPhoto/frame14.png"
import frame15  from "../assets/AutPhoto/frame15.png"
import frame16  from "../assets/AutPhoto/frame16.png"
import frame17  from "../assets/AutPhoto/frame17.png"
import frame18  from "../assets/AutPhoto/frame18.png"
import frame19  from "../assets/AutPhoto/frame19.png"
import { SignIn } from "@clerk/clerk-react"

const Login = ()=> {
    return(
        <main className="max-w-screen max-h-[142vh] flex items-center bg-[#F6F6F7]">
            <div className="w-[38%] max-h-[142vh] ml-[4%] mr-[4%] flex flex-wrap gap-[12px] justify-center  ">
                <img src={frame1} alt="photo" />
                <img src={frame2} className="h-fit " alt="photo" />
                <img src={frame3} className="h-fit " alt="photo" />
                <img src={frame4} className="h-fit " alt="photo" />
                <img src={frame5} className="h-fit translate-y-[-3.2rem] " alt="photo" />
                <img src={frame6} className="h-fit translate-y-[-3.4rem]" alt="photo" />
                <img src={frame7} className="h-fit translate-y-[-3.4rem]" alt="photo" />
                <img src={frame8} className="h-fit translate-y-[-6.2rem] " alt="photo" />
                <img src={frame9} className="h-fit translate-y-[-3.8rem]" alt="photo" />
                <img src={frame10} className="h-fit translate-y-[-8rem]" alt="photo" />
                <img src={frame11} className="h-fit translate-y-[-6.2rem]" alt="photo" />
                <img src={frame12} className="h-fit translate-y-[-10rem]" alt="photo" />
                <img src={frame13} className="h-fit translate-y-[-8.2rem]" alt="photo" />
                <img src={frame14} className="h-fit translate-y-[-6.2rem]" alt="photo" />
                <img src={frame15} className="h-fit translate-y-[-12rem]" alt="photo" />
                <img src={frame16} className="h-fit translate-y-[-15.4rem]" alt="photo" />
                <img src={frame17} className="h-fit translate-y-[-16.2rem] translate-x-[11rem]" alt="photo" />
                <img src={frame18} className="h-fit translate-y-[-6.4rem] translate-x-[-20rem]" alt="photo" />
                <img src={frame19} className="h-fit translate-y-[-18.4rem] translate-x-[1rem]" alt="photo" />
            </div>

            <div className="w-[58%] h-[770px] mr-[45px] flex justify-center items-center ">
                <SignIn />
            </div>
        </main>
    )
}

export default Login;