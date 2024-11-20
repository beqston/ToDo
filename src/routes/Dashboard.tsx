import ChartContent from "../Components/ChartContent";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";



const Dashboard = ()=> {
    return(
        <main className="w-full flex bg-[#F6F6F7]">

            <div className=" md:w-[20%]">
                <Navbar />
            </div>

            <div className="sm: w-full md: w-[80%] ">
                <Header />
                <ChartContent />
            </div>
            
        </main>
    )
}

export default Dashboard;