import axios from "axios";
import toast from "react-hot-toast";

export const placeOrder = async({planId, getToken, onSuccess,backendUrl})=>{
    console.log("into the place order")
    try{

        const token = await getToken();
        const response = await axios.post(`${backendUrl}/orders/create-order?planId=${planId}`,{},
            {headers:{"Authorization": `Bearer ${token}`}
        });
        console.log(response);
        if(response.status===200){
            initializePayment({order:response.data.data, getToken, onSuccess,backendUrl});
        }
    }catch(error){
        toast.error(error.message);
    }
}

const initializePayment=({order,getToken, onSuccess,backendUrl})=>{
    console.log("Into the initializePayment method")
    if (!window.Razorpay) {
        toast.error("Razorpay SDK not loaded");
        return;
    }

    const options={
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Pure Pic.ai Credit payment",
        description: "Pure Pic.ai Credit payment desc",
        order_id: order.id,
        receipt: order.receipt,
        handler: async(paymentDetails)=>{
            try{
                const token = await getToken();
                const response = await axios.post(
                    `${backendUrl}/orders/verify-order`,
                    paymentDetails,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );
                if(response.status===200){
                    toast.success("Credits added successfully.");
                    onSuccess?.();
                }

            }catch(error){
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
}

