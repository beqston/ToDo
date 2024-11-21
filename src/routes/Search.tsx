import { useContext } from "react";
import dataIMG from "../assets/Photo/data.png";
import { SearchContextType, SearchTodoContext } from "../context/SearchContext";
import { supabase } from "../Supabase/supabase";
import { useQuery } from "@tanstack/react-query";
import useFunctions from "../hooks/useFunctions";
import { Link } from "react-router-dom";

const Search = ()=> {
    const fetchTodos = async () => {
        const { data, error } = await supabase.from("todos").select("*");
        if (error) throw new Error(error.message);
        console.log(data);
        return data;
      };
      const { isLoading, isError, data, error } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
      });
      
    const {searchTodoText} = useContext(SearchTodoContext) as SearchContextType
    
    const {userId} = useFunctions();

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>An error has occurred: {error.message}</p>;

    return(
        <main className="p-[2rem] ">

            <Link to={"/"}>Go Home Page</Link>
            
            {
               data?.filter((search)=> search.user_id === userId).filter((search)=>search.description.toLowerCase().includes(searchTodoText)).map((search, index)=> {
                    return(
                        <div
                        key={search.id}
                        className={`w-[22%] max-w-[38%] min-w-[280px] p-[16px] mt-[2rem] flex-wrap relative pt-[12px] rounded-xl ${
                          (index + 1) % 3 === 0
                            ? "bg-[#E4F6FC]"
                            : (index + 1) % 4 === 0
                            ? "bg-[#FCE4E4]"
                            : (index + 1) % 2 === 0
                            ? "bg-[#FBF0E4]"
                            : index === 0
                            ? "bg-[#E3EBFC]"
                            : "bg-[#FBF0E4]"
                        } hover:bg-[#E3EBFC]`}>
                        <div className="flex items-center w-[110px] gap-x-[8px] bg-white rounded-[20px] p-[8px] pl-[14px]">
                          <img src={dataIMG} alt="data" className="w-[15px] h-[17px]" />
                          <p className="text-[0.8rem] overflow-hidden text-nowrap">{search.created_at}</p>
                        </div>
                          <p className="mt-[1rem] text-[14px] overflow-hidden">{search.description}</p>

                      </div>
                    )
                })
            } 
  

            {
                data?.filter((search)=> search.user_id === userId).filter((search)=>!search.description.toLowerCase().includes(searchTodoText)).map(()=> {
                    return(
                        <div className="flex justify-center">
                            <p className="m-auto mt-[4rem] text-[2rem] text-[red] ">No Found Result</p>
                        </div>
                    )
                })
            }
            
        </main>
    )
}

export default Search;