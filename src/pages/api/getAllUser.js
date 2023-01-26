/* eslint-disable import/no-anonymous-default-export */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async (_req, res) => {
  try {
    const result = await prisma.user.findMany();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
