import Header from "../Components/Header";
import HomeContent from "../Components/HomeContent";
import Navbar from "../Components/Navbar";

const Home = ()=>{
    return(
        <main className="w-full flex bg-[#F6F6F7]">

            <div className="w-[20%] ">
                <Navbar />
            </div>

            <div className=" w-full md: w-[80%] ">
                <Header />
                <div className="m-[32px]">
                    <HomeContent />
                </div>
            </div>
            
        </main>
    )
}

export default Home;