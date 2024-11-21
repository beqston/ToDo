import { createContext, ReactNode, useState } from "react";

export type SearchContextType = {
    searchTodoText: string;
    setSearchTodoText: React.Dispatch<React.SetStateAction<string>>;  
}

export const SearchTodoContext = createContext<SearchContextType | null>(null);

const SearchTodoContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchTodoText, setSearchTodoText] = useState<string>("");

    return (
        <SearchTodoContext.Provider value={{ searchTodoText, setSearchTodoText }}>
            {children}
        </SearchTodoContext.Provider>
    );
}

export default SearchTodoContextProvider;
