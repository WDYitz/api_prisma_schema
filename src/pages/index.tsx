import { RouteButton } from "@/components/routeButton"
import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession()

    return (
        <main className="h-full bg-gradient-to-r from-zinc-700 to-zinc-900 pt-20">
            {!session &&
                <button onClick={() => signIn()} className="w-[150px] py-2 px-4 absolute top-4 left-4 border-2 border-indigo-500 rounded-md">LOGIN</button>
            }

            {session &&
                <>
                    <p className="w-[250px] bg-gradient-to-r from-zinc-400 to-zinc-700 p-2">
                        Olá {session.user?.name}.
                    </p>
                    <p className="w-[250px] bg-gradient-to-r from-zinc-400 to-zinc-700 p-2">
                        Email: {session.user?.email}
                    </p>
                    <button onClick={() => signOut()} className="w-[150px] py-2 px-4 absolute top-4 left-4 border-2 border-indigo-500 rounded-md">Deslogar</button>
                </>
            }

            <RouteButton path_1={"usuarios"} text={"Usuarios"} top={'top-4'} right={'right-4'} />
            <RouteButton path_1={"usuarios"} path_2={'novo'} text={"Criar usuario"} top={"top-4"} right={"right-44"} />
        </main>
    )
}
export default Home;