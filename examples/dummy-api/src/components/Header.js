import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-8">
      <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-400">
        <div className="flex items-center mr-6 text-white flex-no-shrink">
          <span className="text-xl font-semibold tracking-tight">
            Sample SPA&trade;
          </span>
        </div>
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 mr-4 text-blue-100 lg:inline-block lg:mt-0 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/todos"
              className="block mt-4 mr-4 text-blue-100 lg:inline-block lg:mt-0 hover:text-white"
            >
              Todos
            </Link>
            <Link
              to="/user/1"
              className="block mt-4 mr-4 text-blue-100 lg:inline-block lg:mt-0 hover:text-white"
            >
              First User
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
