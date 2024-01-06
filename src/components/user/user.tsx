type UserType = {
    user: any;
    handleDelete: (item: number) => void
}

export const Users = ({ user, handleDelete }: UserType) => {
    return (
        <>
            {user.map((item: any, index: number) => (
                <div
                    key={index}
                    onClick={() => handleDelete(item.id)}
                    className="w-[320px] bg-indigo-500 hover:bg-indigo-400 rounded-lg flex flex-col p-2 cursor-pointer my-4"
                >
                    <span>{item.name.toUpperCase()}</span>
                    <span>Email: {item.email}</span>
                    <span>Usuario: {item.role}</span>
                </div>
            ))}
        </>
    )
}