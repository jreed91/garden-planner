import type { Vegetable } from "@prisma/client";
import { Form, useLoaderData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";

import { db } from "~/utils/db.server";

type LoaderData = { vegetables: Array<Vegetable> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    vegetables: await db.vegetable.findMany(),
  };
  return json(data);
};


export const action: ActionFunction = async ({
  request,
}) => {
  const form = await request.formData();
  const vegetable = form.get("vegetable");
  if (
    typeof vegetable !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }
  const joke = await db.garden.create({ data: {name: "test", vegetables: { connect: {id: vegetable }}} });
  return redirect(`/garden/${joke.id}`);
};

export default function NewVegetable() {
  const data = useLoaderData<LoaderData>();
  
  return (
    <Form method="post">
      <p>
        <label>
          Select Vegetable: <select name="vegetable" id="new">
            {data.vegetables.map((vegetable: Vegetable) => (
              <option key={vegetable.id} value={vegetable.id}>{vegetable.name}</option>
            ))}
          </select>
        </label>
        <div>
          <button type="submit" className="pt-8 text-base font-semibold leading-7">
            Add
          </button>
        </div>
      </p>
    </Form>
  );
}
