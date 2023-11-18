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
    if (email === 'admin@sheikh.com' && password === 'sheikh123@') {
      // Set the role to 1 in local storage
      localStorage.setItem('role', '1');

      // Redirect to the home page
      navigate('/Search');
    } 
    else {
      alert("Wrong Login");
      // Handle other authentication logic here if needed

      // Reset the form after submission
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='bg-dark mt-1'>
    <div className='container'>
      <div className='row'>
      <div className='col-4 '>
      <img src="images/login icon.gif"  className='login_icon'alt="Image"  /><br/>
      </div>
      <div className="col-8">
     
        <div className='login-page icon-user h4'> 
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

      </div>

    </div>
    </div>
    
  );
}

export default Login;
