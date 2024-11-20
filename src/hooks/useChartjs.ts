import { useQuery } from "@tanstack/react-query";
import { supabase } from "../Supabase/supabase";
import useFunctions from "./useFunctions";

const useChartjs = ()=> {
    const fetchTodos = async () => {
        const { data, error } = await supabase.from("todos").select("*");
        if (error) throw new Error(error.message);
        console.log(data);
        return data;
      };
      const { isLoading, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
      });

      const {userId} = useFunctions()
      
    let alltodoLengtth;
    let inProgress;
    let done;
    let stuck;
      if(data){
        const allTodo = data.filter((todo) => todo.user_id === userId).map((todo)=> todo);
        alltodoLengtth = allTodo.length;

        const inprogressTodo = data.filter((todo) => todo.user_id === userId).filter((todo)=> !todo.complate).map((todo)=> todo);
        inProgress = inprogressTodo.length;

        const doneTodo = data.filter((todo) => todo.user_id === userId).filter((todo)=> todo.complate).map((todo)=> todo);
        done = doneTodo.length

        const stucTodo =data.filter((todo) => !todo.id ).map((todo)=> todo);
        stuck = stucTodo.length
      }

      return {alltodoLengtth, inProgress, done, stuck}
}

export default useChartjs;