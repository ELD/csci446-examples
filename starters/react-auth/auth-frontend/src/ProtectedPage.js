import { useAuth } from "./utils/AuthProvider";

export default function ProtectedPage() {
  const { user } = useAuth();

  return (
    <main>
      <h1>This requires authentication</h1>
      <p>Welcome, {user?.username}!</p>
    </main>
  );
}
