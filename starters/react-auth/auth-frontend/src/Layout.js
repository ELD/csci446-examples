import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useAuth } from "./utils/AuthProvider";
import './Layout.css';

export default function Layout() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Unauthenticated Page</Link>
            </li>
            <li>
              <Link to="/protected">Authenticated Page</Link>
            </li>
            {user ? (
              <li>
                <Link onClick={async(e) => await signout(() => navigate("/"))}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Log In</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
