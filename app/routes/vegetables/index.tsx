import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <Link to={`new`}>Create a vegetable to get started</Link>
  </div>
  );
}
