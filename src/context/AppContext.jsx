import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider=(props)=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const contextValue={
        backendUrl,
    }

    return(
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);