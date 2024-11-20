import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "../Supabase/supabase";
import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Data } from "../types/types";


  const useFunctions = ()=> {

  const [description, setDescription] = useState("");
  const { userId } = useAuth();

      const queryClient = useQueryClient();

      const handleDelete = async (id: string) => {
        queryClient.setQueryData(['todos'], (prevData: Data[]) => prevData.filter((todo: any) => todo.id !== id));
    
        const { error } = await supabase
          .from('todos')
          .delete()
          .eq('id', id);
    
        if (error) {
          console.error('Error deleting todo:', error);
          queryClient.invalidateQueries(['todos']);
        } else {
          console.log('Todo deleted successfully');
        }

      };

      const handleAddTodo = async () => {
        if (!description) {
          console.error("Description is required!");
          return;
        }
    
        const { data: newTodo, error } = await supabase
          .from('todos')
          .insert([{
            complate: false,
            description,
            created_at: new Date().toISOString(),
            user_id: userId,
            important: false,
          }])
          .select("*");
    
    
        if (error) {
          console.error("Error inserting todo:", error);
        } else {
          console.log("Todo added successfully:", newTodo);
          setDescription("");
          queryClient.setQueryData(['todos'], (prevData: Data[]) => [...prevData, newTodo[0]]);
        }
      };


      const handleAddImportante = async (id: number) => {
        queryClient.setQueryData(['todos'], (prevData: Data[]) => {
          return prevData.map(todo => 
            todo.id === id ? { ...todo, important: !todo.important } : todo
          );
        });
      
        const { error } = await supabase
          .from('todos')
          .update({ important: true })  
          .eq('id', id);
      
        if (error) {
          console.error('Error marking todo as important:', error);
        }
    
      };

      const handleRemoveImportante = async (id: number) => {
        queryClient.setQueryData(['todos'], (prevData: Data[]) => {
          return prevData.map(todo =>
            todo.id === id ? { ...todo, important: !todo.important } : todo
          );
        });
      
        const { error } = await supabase
          .from('todos')
          .update({ important: false }) 
          .eq('id', id);
      
        if (error) {
          console.error('Error updating todo as important:', error.message);
      
          queryClient.setQueryData(['todos'], (prevData: Data[]) => {
            return prevData.map(todo =>
              todo.id === id ? { ...todo, important: !todo.important } : todo
            );
          });
        }
      };

      const handleComplete = async (id: number) => {
        queryClient.setQueryData(['todos'], (prevData: Data[]) => {
          return prevData.map(todo => 
            todo.id === id ? { ...todo, complate: !todo.complate } : todo
          );
        });
      
        const { error } = await supabase
          .from('todos')
          .update({ complate: true})  
          .eq('id', id);
      
        if (error) {
          console.error('Error marking todo as important:', error);
        }
    
      };

      return {handleDelete, handleAddTodo, description, setDescription, handleComplete, handleAddImportante, handleRemoveImportante, userId}
  }

  export default useFunctions;