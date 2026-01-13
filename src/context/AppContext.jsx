import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider=(props)=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [credits,setCredits] = useState(false);
    const [image,setImage] = useState(false);
    const [resultImage,setResultImage] = useState(false);
    const {getToken} = useAuth();
    const {isSignedIn} = useUser();
    const {openSignIn} = useClerk();
    const navigate = useNavigate();

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

    const removeBg = async(selectedImage)=>{
        try{
            if(!isSignedIn){
                openSignIn();
                return;
            }

            if (!selectedImage) return;
            
            setImage(selectedImage);
            setResultImage(false);
            navigate("/result");

            const token = await getToken();
            const formData = new FormData();
            selectedImage && formData.append("file",selectedImage);

            const {data:base64Image} = await axios.post(`${backendUrl}/images/remove-background`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            setResultImage(`data:image/png;base64,${base64Image}`);
            setCredits(credits-1);
        }catch(error){
            console.log(error);
            toast.error("Errorr coming generating the image. Please try again with different image.");
            navigate("/");
        }
    }

    const contextValue={
        backendUrl,
        credits,
        setCredits,
        loadUserCredits,
        image,setImage,
        resultImage,setResultImage,
        removeBg
    }

    return(
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);