import { Outlet } from "react-router-dom";
import './App.css';

// We treat `Layout` as the layout of our application.
// The `<Outlet />` delegates renders to the matching child route, if one exists.
function Layout() {
  return (
    <>
      <header>
        <p>A navbar should be here, but it's not?</p>
      </header>
      <Outlet />
      <footer>
        <p>Some footer here</p>
      </footer>
    </>
  );
}

export default Layout;
