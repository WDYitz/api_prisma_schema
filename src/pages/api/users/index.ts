import { NextApiHandler } from "next";
import api from "@/libs/api";

const getUsers: NextApiHandler = async (req, res) => {
  const { page } = req.query;
  const users = await api.getAllUsers(parseInt(page as string));

  if (users) {
    res.status(200).json({
      status: true,
      users,
    });
    return;
  }

  res.json({ error: "couldnt find any users" });
};

const postUser: NextApiHandler = async (req, res) => {
  const { name, email } = req.body;
  const newUser = api.addUser(name, email).catch(() => {
    res.json({ error: "user already exist!" });
  });

  if (newUser) {
    res.status(201).json({ user: newUser, status: "user created!" });
  }
};

const deleteUser: NextApiHandler = async (req, res) => {
  const { id } = req.body;
  const deleteUser = api.deleteUser(parseInt(id as string)).catch(() => {
    res.json({ error: "User not found!" });
  });

  if (deleteUser) {
    res.json({ status: `user ${deleteUser} was Deleted` });
  }
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;
  }
};

export default handler;
