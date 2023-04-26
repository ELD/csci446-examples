import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './utils/AuthProvider';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signin } = useAuth();

  const from = location.state?.from?.pathname;
  const redirect = from ? from : '/';

  if (user) {
    navigate(redirect, { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');

    await signin({ username, password }, () => {
      navigate(redirect, { replace: true });
    });
  };

  return (
    <>
    <h1>Login</h1>
    {from ? <p>You've been redirected from {from}</p>: null}
    <form onSubmit={handleSubmit}>
      <label>Username: <input type="text" name="username" placeholder="Username..." /></label>
      <label>Password: <input type="password" name="password" placeholder="Password..." /></label>
      <button type="submit">Log In</button>
    </form>
    </>
  );
}
