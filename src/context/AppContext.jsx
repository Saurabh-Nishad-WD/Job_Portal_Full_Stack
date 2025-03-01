import { createContext } from "react";

export const Appcontext = createContext()

export const AppContextProvider = (props) => {
    const value = {

    }
    return(
        <Appcontext.Provider vlaue={value}>
    {props.children}
        </Appcontext.Provider>
    )
}