import { Inter } from 'next/font/google'
// LIBS
import api from '@/libs/api'
// TYPES
import { User } from '@/types/User'
// COMPONENTS
import { Loading } from '@/components/loading/loading'
import { Users } from '@/components/user/user'
import { ShowMoreButton } from '@/components/showMoreButton/button'
import { Toast } from '@/components/toast/toast'
// HOOKS
import { useUserActions } from '@/libs/api.actions'
import { RouteButton } from '@/components/routeButton'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  users: User[]
}

export default function Home({ users }: Props) {

  const {
    handleLoadMoreUsers,
    handleDeleteUser,
    toastIsShowing,
    showMore,
    loading,
    user } = useUserActions('/api/users', users)


  return (
    <main className={`mt-8 p-6 flex justify-around flex-col min-h-screen items-center overflow-y-auto ${inter.className}`}>
      <Users
        user={user}
        handleDelete={handleDeleteUser}
      />

      <Loading loading={loading} />

      <ShowMoreButton
        showMore={showMore}
        handleLoadMore={handleLoadMoreUsers}
      />

      <RouteButton path_1={'/'} text={'Home'} top={'top-2'} right={'right-[100% - 150px]'} />
      <Toast toastIsShowing={toastIsShowing} message={'Usuario deletado com sucesso!'} />

    </main>
  )
}

export const getServerSideProps = async () => {
  const users = await api.getAllUsers(1);

  return {

    props: {
      users,
      revalidate: 5,
    },
  }
}

