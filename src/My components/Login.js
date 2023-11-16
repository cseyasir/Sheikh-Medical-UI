import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both email and password are equal to "admin"
    if (email === 'admin@sheikh.com' && password === 'admin') {
      // Set the role to 1 in local storage
      localStorage.setItem('role', '1');

      // Redirect to the home page
      navigate('/Search');
    } else {
      // Handle other authentication logic here if needed

      // Reset the form after submission
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="pt-4">
        <div className='col-8 login-page icon-user'> 
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='text-success'>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='text-success'>Password: </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className=''>Login</button>
          </form>
        </div>
      </div>
    
  );
}

export default Login;
