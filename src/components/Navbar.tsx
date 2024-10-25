import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-medium text-xl">
          ExpenseTrucker{" "}
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/add" className="text-white hover:text-gray-300">
            Add{" "}
          </Link>
          <Link to="/expenses" className="text-white hover:text-gray-300">
            Expenses
          </Link>
        </div>
      </div>
    </nav>
  );
};
