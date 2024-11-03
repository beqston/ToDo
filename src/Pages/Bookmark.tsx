import Header from "../Components/Header";
import Navbar from "../Components/Navbar";


const Bookmark = ()=> {
    return(
        <main className="w-full flex bg-[#F6F6F7]">

            <div className="max-w-[290px] w-[20%] ">
                <Navbar />
            </div>

            <div className="w-[80%] ">
                <Header />
            </div>
            
        </main>
    )
}

export default Bookmark;