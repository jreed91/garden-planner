import { db } from "~/utils/db.server";

export type { Garden } from "@prisma/client";

export async function getGardens() {
  return db.garden.findMany();
}

export async function getGarden(id: string) {
  return db.garden.findUnique({ where: { id }, include: { vegetables: true } });
}