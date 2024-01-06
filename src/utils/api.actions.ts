import { useToast } from "@/hooks/useToast";
import { User } from "@/types/User";
import { useState } from "react";

export const useUserActions = (URL: string, users?: any) => {
  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState<User[]>(users);

  const { handleShowToast, toastIsShowing } = useToast();

  const handleLoadMoreUsers = async () => {
    if (!loading) {
      setLoading(true);
      const req = await fetch(`/api/users?page=${page + 1}`);
      const json = await req.json();
      if (json.status) {
        if (json.users.length === 0) {
          setShowMore(false);
        }
        setUser([...user, ...json.users]);
      }
      setLoading(false);
      setPage(page + 1);
    }
  };

  const handlePostUser = async (name: string, email: string) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
  };

  const handleDeleteUser = async (id: number) => {
    await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    handleShowToast();
  };

  return { handleLoadMoreUsers, handlePostUser, handleDeleteUser, showMore, loading, user, toastIsShowing };
};
