/* eslint-disable import/no-anonymous-default-export */
import prisma from "./prisma";

export default {
  getAllUsers: async (page: number) => {
    // itens per page
    let take = 2;
    // offset of itens
    let skip = 0;
    if (page) {
      skip = (page - 1) * take;
    }

    const users = await prisma.user.findMany({
      skip,
      take,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    return users;
  },
  getUser: async (id: number) => {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  },
  getUserFromEmail: async (email: string) => {
    const user = await prisma.user.findFirst({
      where: {
        email,
        active: true,
      },
    });
    return user;
  },
  addUser: async (name: string, email: string) => {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return user;
  },
  deleteUser: async (id: number) => {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  },
  updateUser: async (
    id: number,
    name?: string,
    email?: string,
    active?: string
  ) => {
    let data: {
      name?: string;
      active?: boolean;
      email?: string;
    } = {};

    if (name) {
      data.name = name;
    }
    if (email) {
      data.name = email;
    }

    if (active) {
      switch (active) {
        case "true":
          data.active = true;
          break;
        case "false":
          data.active = false;
          break;
      }
    }
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return user;
  },
};
