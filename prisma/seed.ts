import type { Vegetable } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
const db = new PrismaClient();



async function seed() {
  await Promise.all(
    getVegetables().map((vegetable: Vegetable) => {
      return db.vegetable.create({ data: vegetable });
    })
  );
}

seed();

function getVegetables(): Vegetable[] {
  return [
    {
      id: v4(),
      name: "Argula",
      createdAt: new Date(),
      updatedAt: new Date(),
      description: "Tiny but mighty!",
      sowing: "Direct seed",
      spacing: "6 inches",
      depth: "4 inches",
      soil: "blah blah",
      maturity_days: 35
    }
  ];
}