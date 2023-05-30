import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function LoginComponent() {
  const navigate = useNavigate();
  const authContext = useAuth();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  function handleLogin() {
    if (authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
    }
  }
  function logout() {
    authContext.logout();
  }
  return (
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={(event) => setusername(event.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleLogin}>
            Login
          </button>
        </div>
        {authenticated ? (
          <label>Logged in successfully</label>
        ) : (
          <label>Incorrect credentials</label>
        )}
      </div>
    </div>
  );
}
