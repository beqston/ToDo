import add from "../assets/Photo/add.png"
import dataIMG from "../assets/Photo/data.png"
import menuIcon from "../assets/Photo/menuIcon.png"
import bookmark from "../assets/Photo/bookmark.png"
import complete from "../assets/Photo/complete.png"
import edit from "../assets/Photo/edit.png"
import detele from "../assets/Photo/delete.png"
import { useState } from "react"

const HomeContent =()=> {

    const [todoArr, setTodoArrs] = useState([
        {
            id:1,
            data:" 5/03/2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            id:2,
            data:" 4/03/2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  "
        },
        {
            id:3,
            data:" 3/03/2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id:4,
            data:" 2/03/2024",
            description: "Lorem ipsum dolor sit amet, consectetur"
        },
    ])


    const [innerHeight, setInnerHeight] = useState(false);
    const [showIcon, setShowIcon] = useState<number>();
    const [showMenu, setShowMenu] = useState<number>();
    const [hiddenMenu, setHiddenMenu] = useState(false);
    const [addTask, setAddTask] = useState(false);

    const [description, setDescription] = useState("")



    const handlIcon = ()=> {
        if(window.innerWidth > 80){
            setInnerHeight(true)
        }else{
            setInnerHeight(false)
        }
    }

    const handlHover = (index: number)=>{
        setShowIcon(index)
    }

    const handlShowMenu = (index: number)=> {
        setShowMenu(index)
        setHiddenMenu(!hiddenMenu)
    }

    const handlHiddenMenu = ()=> {
       if(showMenu){
        if(showMenu >= 0){
            setShowMenu(-1)
        }
       }
    }

    const handlAddTaskValue = ()=>{
        setAddTask(!addTask)
    }

    const handlAddTask = ()=>{


        if(description === "") return

        const date = new Date()
        const year = date.getFullYear()
        const moths = date.getMonth()
        const day = date.getDay()
    
        const fullDate = `${day}/${moths}/${year}`

        setTodoArrs([
            ...todoArr, 
            {
                id: (todoArr.length - 1) + 1,
                description: description,
                data: fullDate
            }
        ])

        setDescription("")
    }


    return(
        <section onClick={handlHiddenMenu} className="w-full">
            <div className="flex items-center relative max-w-[570px] h-[48px] m-auto pl-[14px] bg-white  ">
                <img onClick={handlAddTaskValue} src={add} alt="add" className="w-[24px] h-[24px] cursor-pointer"/>
                <input type="text" placeholder="Add a task" onChange={(e)=> setDescription(e.target.value)} value={description} className="w-[570px] h-[48px] rounded-[8px] outline-0 pl-[4px]" />
            </div>

            {
                addTask && 
                <div className="transition-all flex flex-col relative max-w-[570px] m-auto pl-[14px] bg-white mt-[2rem] p-[1rem] ">
                    <span>Task</span>

                    <textarea className="outline-none pt-[1rem]" onChange={(e)=> setDescription(e.target.value)} value={description} placeholder="Whrite a task" ></textarea>
                    <div className="flex justify-between">
                    <input className="w-[24px] h-[24px] " type="image" src={dataIMG} />
                        <button onClick={handlAddTask}>Add</button>
                    </div>
                </div>
            }

            

            <div onMouseOver={handlIcon}  className="w-full mt-[54px] flex flex-wrap gap-y-[24px] gap-x-[2%] justify-center lg:justify-start  ">
                {
                    todoArr.map((item, index)=> {
                        return(
                            <div key={item.id} onMouseOver={()=> handlHover(index)} onMouseLeave={()=> setShowIcon(-1)} className={`w-[22%] max-w-[38%] min-w-[280px] p-[16px] flex-wrap relative pt-[12px rounded-xl ${(index + 1 ) % 4 === 0? "bg-[#FCE4E4]": (index + 1) % 3 == 0? "bg-[#E4F6FC]": (index + 1) % 2 === 0? "bg-[#FBF0E4]":index == 0?"bg-[#E3EBFC]": index === 4? "bg-[#E3EBFC]":index ==6?"bg-[#E4F6FC]": index ===7?"bg-[#FBF0E4]": index === 9?"bg-[#FBF0E4]":"" } hover:bg-[#E3EBFC]`}>
                                <div className="flex items-center w-[110px] gap-x-[8px] bg-white rounded-[20px] p-[8px] pl-[14px]">
                                        <img src={dataIMG} alt="data"  className="w-[15px] h-[17px] "/>
                                     <p className="text-[0.8rem]">{item.data}</p>
                                </div>
                                <p className="mt-[1rem] text-[14px] ">{item.description}</p>

                                {
                                    showIcon ===index && <img onClick={()=> handlShowMenu(index)} src={menuIcon} alt="menu-icon" className={`cursor-pointer max-w-[32px] max-h-[32px] ${innerHeight?"bottom-[10px]":"top-[10px]"} absolute right-[8px]`} />
                                }

                                {
                                   hiddenMenu && showMenu === index &&              
                                    <div className={` absolute max-w-[192px] w-[80%] h-[190px] rounded-[8px] ${innerHeight?"bottom-[38px]":"top-[48px]"}  ${innerHeight?"left-[40px]":"right-[10px]"}`}>
                                    <nav className="h-[100%] bg-[#F6F6F7] p-[10px]">
                                        <ul className="flex flex-col justify-center gap-y-[14px]">
                                            <li className="flex items-center gap-x-[8px] cursor-pointer">
                                                <img src={bookmark} alt="bookmark" />
                                                <span>Importance</span>
                                            </li>
                                            <li className="flex items-center gap-x-[8px] border-b-2 pb-[8px] border-[#E8E9EB] cursor-pointer">
                                                <img src={complete} alt="complete" />
                                                <span>Complete</span>
                                            </li>
                                            <li className="flex items-center gap-x-[8px] border-b-2 pb-[8px] border-[#E8E9EB] cursor-pointer">
                                                <img src={edit} alt="edit" />
                                                <span>Edit</span>
                                            </li>
                                            <li className="flex items-center gap-x-[8px] cursor-pointer">
                                                <img src={detele} alt="detele" />
                                                <span>Delete</span>
                                            </li>
                                 
                                        </ul>
                                    </nav>
                                </div>
                                }

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HomeContent;