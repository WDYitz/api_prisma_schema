import { Input } from "../input/input"
import { useState } from "react"
import { Toast } from "../toast/toast"
import { useUserActions } from "@/utils/api.actions"
import { useToast } from "@/hooks/useToast"

export const FormUser = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('');

    const { handleShowToast, toastIsShowing  } = useToast()
    const { handlePostUser} = useUserActions('/api/users');

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
            handleShowToast();
            return;
        }
        handleChangeEmail
        handleChangeName
    }

    return (
        <form onSubmit={handlePostAction} method="POST">
            <p>{error}</p>
            <Input placeholder={"Email"} label={"Email"} onChange={handleChangeEmail} value={email} />
            <Input placeholder={"Name"} label={"Name"} onChange={handleChangeName} value={name} />
            <button type="submit" className="w-full rounded-md bg-indigo-500 mt-4 py-2">Create user</button>
            <Toast toastIsShowing={toastIsShowing} message={"Usuario criado com sucesso!"} />
        </form>
    )
}
