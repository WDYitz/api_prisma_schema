type ToastType = {
    toastIsShowing: boolean;
    message: string;
}

export const Toast = ({ toastIsShowing, message }: ToastType) => {

    if (toastIsShowing) {
        return (
            <div className="w-[320px] h-14 bg-emerald-400 rounded-lg flex justify-between items-center text-center  fixed right-6 bottom-6 overflow-hidden">
                <p className="w-full">{message}</p>
                <span className="w-full h-2 bg-emerald-700 absolute bottom-0 animate-growToast"></span>
            </div>
        )
    }
}