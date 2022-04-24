import type { Vegetable } from "@prisma/client";
import type { LoaderFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getGarden } from "~/models/garden";



export const loader: LoaderFunction = async ({params}) => {
  invariant(params.gardenId, `Id is required`);

  const garden = await getGarden(params.gardenId);
  invariant(garden, `Garden not found`);

  return json({ garden });
};


export default function GardenDetailsRoute() {
  const { garden } = useLoaderData();
  return (
    <div>
      {garden.name}
      <ul>
        {garden.vegetables.map((vegetable: Vegetable) => (
          <li key={vegetable.id}>{vegetable.name}</li>
        ))}
      </ul>
    </div>
  );
}
