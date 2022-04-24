import { Outlet } from "@remix-run/react";

export default function VegetablesRoute() {
    return (
      <div>
        <h1>Garden Planner</h1>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }