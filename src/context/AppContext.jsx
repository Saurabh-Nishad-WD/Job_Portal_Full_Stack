import { createContext, useState } from "react";

export const Appcontext = createContext()

export const AppContextProvider = (props) => {

    const [searchFilter,setSearchFilter] = useState({
        title:"",
        location:""
    })
    const [searched,setSearched] = useState(false)

    const value = {
        searchFilter,setSearchFilter,
        searched,setSearched,
    }
    return(
        <Appcontext.Provider value={value}>
    {props.children}
        </Appcontext.Provider>
    )
}