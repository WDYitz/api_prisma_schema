import { useState } from "react"

export const useToast = () => {
    const [toastIsShowing, setToastIsShowing] = useState(false) // MAKE THE TOAST VISIBLE 
    const toastTime = 5000; // 5 SECONDS 

    const handleEnableToast = () => setToastIsShowing(true);
    const handleDisableToast = () => setToastIsShowing(false)

    const handleShowToast = () => {
        handleEnableToast()
       setInterval(handleDisableToast, toastTime)
    }

    return { handleShowToast, toastIsShowing }
}