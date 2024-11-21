import PieChart from "./Pie";
import useChartjs from "../hooks/useChartjs";

const ChartContent = ()=> {

    const {alltodoLengtth, inProgress, done, stuck} = useChartjs();

    return (
        <main className="w-full mt-[50px] min-h-screen">
            <div className="w-[97%] m-auto flex gap-[24px] flex-wrap  max-md: justify-center  max-xl: justify-around  ">

                <div className="px-[1rem] min-w-[159px] max-md: max-w-[47%] md: w-[23%] bg-[white] flex flex-col h-[190px] w-[23%] max-w-[48%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        All Task
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                        {alltodoLengtth}
                    </h2>
                </div>

                <div className="px-[1rem] min-w-[159px] w-[23%] bg-[white] flex flex-col h-[190px] max-w-[48%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        In Progress
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                        {inProgress}
                    </h2>
                </div>

                <div className="px-[1rem] min-w-[159px] w-[23%] bg-[white] flex flex-col h-[190px]  max-w-[48%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        Stuck
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                       {stuck}
                    </h2>
                </div>

                <div className="px-[1rem] min-w-[159px] w-[23%] bg-[white] flex flex-col h-[190px] max-w-[40%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        Done
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                        {done}
                    </h2>
                </div>

            </div>

            <div className="w-[97%] mt-[24px] m-auto pb-[2rem]  mb-[2rem] ">

                <h3 className="text-[#252931] text-[24px] font-medium pl-[18px] bg-white border-b-2 ">Task by Status</h3>

                <div className="w-full bg-white">
                    <div className="w-[40%] m-auto ">
                        <PieChart />
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default ChartContent;