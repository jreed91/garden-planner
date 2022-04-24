import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <Link to={`new`}>Create a garden to get started</Link>
  </div>
  );
}
