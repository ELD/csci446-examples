import { useCallback } from "react";
import { useAuth } from "./utils/AuthProvider";
import { useLocation, Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { user, refresh } = useAuth();
  const location = useLocation();

  const refreshSync = useCallback(() => {
    async function refreshSync() {
      return await refresh();
    };
    return refreshSync();
  }, [refresh]);

  const refreshed = refreshSync();

  if (!user || !refreshed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
