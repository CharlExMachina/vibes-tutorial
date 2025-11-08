import { Prisma, PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

const userInput: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@test.com",
  },
];

export async function main() {
  console.log("Seeding database...");

  for (const userData of userInput) {
    const user = await prisma.user.create({
      data: userData,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
