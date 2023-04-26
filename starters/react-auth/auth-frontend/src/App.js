import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import UnprotectedPage from "./UnprotectedPage";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";
import RequireAuth from "./RequireAuth";
import "./App.css";
import AuthProvider from "./utils/AuthProvider";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <UnprotectedPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/protected",
        element: (
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
