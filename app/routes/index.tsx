import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="content">
        <h1>Garden Planner</h1>
        <nav>
          <ul>
            <li>
              <Link to="vegetables">Get Started</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
