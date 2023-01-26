/* eslint-disable import/no-anonymous-default-export */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async (req, res) => {
  const method = req.method;

  try {
    console.log(method);
    const id = req.query;
    if (method == "DELETE") {
      const deleteId = id.id;

      const deletedUser = await prisma.user.delete({
        where: {
          id: Number(deleteId),
        },
      });

      console.log(deleteId);

      res.status(201).json(deletedUser);
    }

    if (method == "PUT") {
      const updateId = id.id;
      const userData = req.body;

      const updatedUser = await prisma.user.update({
        where: {
          id: Number(updateId),
        },

        data: userData,
      });

      console.log(updateId);

      res.status(201).json(updatedUser);
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
