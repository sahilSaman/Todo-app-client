import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './TodoApp.css';
function TodoApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome" element={<WelcomeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function LoginComponent() {
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  function handleLogin() {
    if (username === 'admin' && password === 'password') {
      setAuthenticated(true);
      navigate('/welcome');
    }
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
function WelcomeComponent() {
  return <div>Welcome</div>;
}
export default TodoApp;
