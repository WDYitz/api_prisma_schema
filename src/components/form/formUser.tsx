import { Input } from "../input/input"
import { useState } from "react"
import { Toast } from "../toast/toast"
import { useUserActions } from "@/libs/api.actions"
import { useToast } from "@/hooks/useToast"
import { useRouter } from "next/router"
import { RouteButton } from "../routeButton"

export const FormUser = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('');

    const { handleShowToast, toastIsShowing } = useToast()
    const { handlePostUser } = useUserActions('/api/users');
    const { push } = useRouter()

    const emailNotEmpty = email !== '' && email.length > 0;
    const nameNotEmpty = name !== '' && name.length > 0;

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const handleChangeName = (e: any) => {
        setName(e.target.value)
    }

    const handlePostAction = () => {
        if (emailNotEmpty && nameNotEmpty) {
            handlePostUser(name, email)
            handleChangeEmail
            handleChangeName
            handleShowToast();
        }
        push('../');
    }

    return (
        <form
            onSubmit={handlePostAction}
            method="POST"
            className="w-full p-6 flex flex-col justify-center h-full sm:p-8 md:p-16 md:w-[70%] md:mx-[15%] lg:w-[50%] lg:mx-[25%]"
        >
            <RouteButton path_1={"/usuarios"} text={"Voltar"} top={"top-4"} right={"right-[100% - 150px]"} />

            <p className={`${error.length > 0 ? 'bg-red-500 text-white rounded-lg w-full p-2 my-6' : null}`}>
                {error}
            </p>

            <Input placeholder={"Email"} label={"Email"} onChange={handleChangeEmail} value={email} />
            <Input placeholder={"Name"} label={"Name"} onChange={handleChangeName} value={name} />
            <button type="submit" className="w-full rounded-md bg-indigo-500 mt-4 py-2">Submit</button>

            <Toast toastIsShowing={toastIsShowing} message={"Usuario criado com sucesso!"} />

        </form>
    )
}
