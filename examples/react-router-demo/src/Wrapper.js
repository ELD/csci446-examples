import { Link, Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <>
      <header>
        <Link to="/products">View all products</Link>
      </header>

      <Outlet />
    </>
  );
}
