import PieChart from "./Pie";

const ChartContent = ()=> {
    return (
        <main className="w-full mt-[50px] min-h-screen">
            <div className="w-[97%] m-auto flex gap-[24px] flex-wrap  max-md: justify-center  max-xl: justify-around  ">

                <div className="px-[1rem] min-w-[159px] max-md: max-w-[47%] md: w-[23%] bg-[white] flex flex-col h-[190px] w-[23%] max-w-[48%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        All Task
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                        5
                    </h2>
                </div>

                <div className="px-[1rem] min-w-[159px] w-[23%] bg-[white] flex flex-col h-[190px] max-w-[48%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        In Progress
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                        2
                    </h2>
                </div>

                <div className="px-[1rem] min-w-[159px] w-[23%] bg-[white] flex flex-col h-[190px]  max-w-[48%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        Stuck
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                       2
                    </h2>
                </div>

                <div className="px-[1rem] min-w-[159px] w-[23%] bg-[white] flex flex-col h-[190px] max-w-[40%] ">
                    <h3 className="border-b pt-[12px] pb-[12px] text-[#252931] font-medium ">
                        Done
                    </h3>
                    <h2 className="text-[2rem] h-screen text-[#252931] font-medium flex justify-center items-center ">
                        1
                    </h2>
                </div>

          

            </div>

            <div className="w-[300px] ">
                <PieChart />
            </div>

            

        </main>
    )
}

export default ChartContent;