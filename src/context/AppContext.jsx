import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider=(props)=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [credits,setCredits] = useState(false);
    const {getToken} = useAuth();

    const loadUserCredits = async ()=>{
        try{
            const token = await getToken();

            const response = await axios.get(`${backendUrl}/users/credits`,
                {headers:{"Authorization": `Bearer ${token}`}}
            );
            
            if(response.data.success){
                console.log(response);
                setCredits(response.data?.data?.credits);
                toast.success("Credits Loaded successfully");
            }
            else{
                toast.error(response.data?.data || "Something went wrong while getting the credits. Please try again later.");
            }
        }
        catch(error){
            console.log(error);
            toast.error("Something went wrong while getting the credits. Please try again later.")
        }
    }
    const contextValue={
        backendUrl,
        credits,
        setCredits,
        loadUserCredits,
    }

    return(
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);