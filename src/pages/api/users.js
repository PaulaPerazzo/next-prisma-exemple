import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const { name, lastName, phone } = req.body;
  const user = await prisma.user.create({
    data: {
      name: name,
      lastName: lastName,
      phone: phone,
    },
  });
  console.log(user);
  res.status(201).json(user);
}
