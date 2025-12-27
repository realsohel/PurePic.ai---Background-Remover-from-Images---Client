import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const UserSyncHandler = () => {
    const {isLoaded,isSignedIn,getToken} = useAuth();
    const {user} = useUser();
    const [synced,setSynced]= useState(false);
    const {backendUrl,loadUserCredits}=useAppContext();

    useEffect(()=>{
        const saveUser=async()=>{
            if(!isLoaded || !isSignedIn || synced){
                return;
            }

            try{
                const token = await getToken();
                console.log(user);
                console.log(token);
                
                const userData = {
                    clerkId:user.id,
                    email:user.primaryEmailAddress.emailAddress,
                    username:user.username,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    photoUrl:user.imageUrl
                }

                console.log(userData);

                const response = await axios.post(`${backendUrl}/users/createupdateuser`,userData,
                    {headers:{"Authorization": `Bearer ${token}`}}
                );

                if(response.data.success==true){
                    toast.success(`Welcome ${userData.firstName}`);
                }

                setSynced(true);
                await loadUserCredits();

            }catch(error){
                toast.error("Some error coming. Please again later.")
                console.log("Error coming..")
            }
        }

        saveUser();
    },[isLoaded,isSignedIn,getToken,user,synced]);
    return null;
}

export default UserSyncHandler;
