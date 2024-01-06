import { NextApiHandler } from "next";
import api from "@/libs/api";

const handlerGet: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = await api.getUser(parseInt(id as string));

  if (user) {
    res.json({ status: true, user });
    return;
  }

  res.json({ error: `couldn't find user` });
};

const handlerPut: NextApiHandler = async (req, res) => {
  const { name, email, active } = req.body;
  const { id } = req.query;

  const updateUser = await api.updateUser(
    parseInt(id as string),
    name,
    email,
    active
  );

  if (updateUser) {
    res.json({ status: true, updateUser });
    return;
  }

  res.json({ error: `couldn't update user` });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;
    case "PUT":
      handlerPut(req, res);
      break;
  }
};

export default handler;
