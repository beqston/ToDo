import dataIMG from "../assets/Photo/data.png";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import menuIcon from "../assets/Photo/menuIcon.png";
import bookmarkImg from "../assets/Photo/bookmark.png";
import complete from "../assets/Photo/complete.png";
import add from "../assets/Photo/add.png";
import edit from "../assets/Photo/edit.png";
import detele from "../assets/Photo/delete.png";
import { supabase } from "../Supabase/supabase";
import { useQuery } from "@tanstack/react-query";
import useFunctions from "../hooks/useFunctions";
import { useState } from "react";

const fetchTodos = async () => {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
};

const Bookmark = () => {
  const {
    handleDelete,
    handleAddTodo,
    description,
    handleComplete,
    setDescription,
    handleRemoveImportante,
    userId,
  } = useFunctions();

  const [addTask, setAddTask] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState<number | undefined>();
  const [showMenu, setShowMenu] = useState<number | undefined>();
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editDescription, setEditDescription] = useState<string>("");

  const handlShowMenuIcon = (index: number) => {
    setShowMenuIcon(index);
  };

  const handlShowMenu = (index: number) => {
    setShowMenu(index);
    setHiddenMenu(!hiddenMenu);
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const handleEdit = async (id: number) => {
    if (!editDescription.trim()) return;
    const { error } = await supabase
      .from("todos")
      .update({ description: editDescription })
      .eq("id", id);

    if (error) {
      console.error("Error updating todo:", error.message);
    } else {
      setEditTodoId(null); 
      setEditDescription("");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: {error.message}</p>;

  return (
    <main className="w-full flex bg-[#F6F6F7]">
      <div className="w-[20%]">
        <Navbar />
      </div>

      <div className="w-full md: w-[80%] ">
        <Header />
        <div className="mt-4 flex gap-[24px] ">
          <section className="w-full">
            <div className="flex items-center relative max-w-[570px] h-[48px] m-auto pl-[14px] bg-white mb-[2rem]">
              <img
                onClick={() => setAddTask(!addTask)}
                src={add}
                alt="add"
                className="w-[24px] h-[24px] cursor-pointer"
              />
              <input
                type="text"
                placeholder="Add a task"
                className="w-[570px] h-[48px] rounded-[8px] outline-0 pl-[4px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {addTask && (
              <div className="transition-all flex flex-col relative max-w-[570px] m-auto pl-[14px] bg-white mt-[2rem] p-[1rem] mb-[20px]">
                <span>Task</span>
                <textarea
                  className="outline-none pt-[1rem]"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Write a task"
                />
                <div className="flex justify-between">
                  <input className="w-[24px] h-[24px]" type="image" src={dataIMG} />
                  <button type="submit" onClick={handleAddTodo}>
                    Add
                  </button>
                </div>
              </div>
            )}

            {data && data.length > 0 && (
              <div className="w-full flex flex-wrap justify-start gap-[24px]">
                {data
                  .filter((todo) => todo.important)
                  .filter((todo) => todo.user_id == userId)
                  .map((todo, index) => (
                    <div
                      key={todo.id}
                      onMouseOver={() => handlShowMenuIcon(index)}
                      className={`w-[22%] max-w-[38%] min-w-[280px] p-[16px] flex-wrap relative pt-[12px] rounded-xl ${
                        (index + 1) % 3 === 0
                          ? "bg-[#E4F6FC]"
                          : (index + 1) % 4 === 0
                          ? "bg-[#FCE4E4]"
                          : (index + 1) % 2 === 0
                          ? "bg-[#FBF0E4]"
                          : index === 0
                          ? "bg-[#E3EBFC]"
                          : "bg-[#FBF0E4]"
                      } hover:bg-[#E3EBFC]`}
                    >
                      <div className="flex items-center w-[110px] gap-x-[8px] bg-white rounded-[20px] p-[8px] pl-[14px]">
                        <img src={dataIMG} alt="data" className="w-[15px] h-[17px]" />
                        <p className="text-[0.8rem] overflow-hidden text-nowrap">
                          {todo.created_at}
                        </p>
                      </div>
                      {editTodoId === todo.id ? (
                        <textarea
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          placeholder="Edit task description"
                          className="mt-[1rem] w-full"
                        />
                      ) : (
                        <p className="mt-[1rem] text-[14px] overflow-hidden">
                          {todo.description}
                        </p>
                      )}

                      {showMenuIcon === index && (
                        <div
                          onClick={() => handlShowMenu(index)}
                          className="absolute bottom-0 right-0 cursor-pointer"
                        >
                          <img src={menuIcon} alt="menu-icon" />
                        </div>
                      )}

                      {hiddenMenu && showMenu === index && (
                        <div
                          onClick={() => handlShowMenu(index)}
                          className={`absolute max-w-[192px] w-[80%] h-[190px] rounded-[8px] ${
                            innerHeight ? "bottom-[38px]" : "top-[48px]"
                          } ${innerHeight ? "left-[40px]" : "right-[10px]"}`}
                        >
                          <nav className="h-[100%] bg-[#F6F6F7] p-[10px]">
                            <ul className="flex flex-col justify-center gap-y-[14px]">
                              <li
                                onClick={() => handleRemoveImportante(todo.id)}
                                className="flex items-center gap-x-[8px] cursor-pointer"
                              >
                                <img src={bookmarkImg} alt="bookmark" />
                                <span>Unimportance</span>
                              </li>
                              <li
                                onClick={() => handleComplete(todo.id)}
                                className="flex items-center gap-x-[8px] border-b-2 pb-[8px] border-[#E8E9EB] cursor-pointer"
                              >
                                <img src={complete} alt="complete" />
                                <span>Complete</span>
                              </li>
                              <li
                                onClick={() => {
                                  setEditTodoId(todo.id);
                                  setEditDescription(todo.description);
                                }}
                                className="flex items-center gap-x-[8px] border-b-2 pb-[8px] border-[#E8E9EB] cursor-pointer"
                              >
                                <img src={edit} alt="edit" />
                                <span>Edit</span>
                              </li>
                              <li
                                onClick={() => handleDelete(todo.id)}
                                className="flex items-center gap-x-[8px] cursor-pointer"
                              >
                                <img src={detele} alt="delete" />
                                <span>Delete</span>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      )}

                      {editTodoId === todo.id && (
                        <button onClick={() => handleEdit(todo.id)}>
                          Save Changes
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Bookmark;
