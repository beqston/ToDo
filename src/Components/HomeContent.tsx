import add from "../assets/Photo/add.png"

const HomeContent =()=> {
    return(
        <section className="w-full">
            <div className="flex items-center relative w-[570px] h-[48px] m-auto pl-[14px] bg-white  ">
                <img src={add} alt="add" className="w-[24px] h-[24px] cursor-pointer"/>
                <input type="text" placeholder="Add a task" className="w-[570px] h-[48px] rounded-[8px] outline-0 pl-[4px]" />
            </div>
        </section>
    )
}

export default HomeContent;