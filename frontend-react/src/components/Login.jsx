import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); 
  const [error, setError] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear previous errors

    const userData = { username, password };
    console.log('userData ==>', userData);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData);
      console.log('Response: ', response.data);

      // Store tokens in localStorage
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);

      console.log('Login successful');
      setIsLoggedIn(true);
      setSuccess(true);
      navigate('/');
    } catch (error) {
      console.error('Invalid credentials');
      setSuccess(false);
      setError('Invalid credentials');
    } finally {
      setLoading(false); // Stop loading after attempt
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Login to your account</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {success && <div className="alert alert-success">Login Successful!</div>}

              {error && <div className="text-danger">{error}</div>}

              {loading ? (
                <button type="submit" className="btn btn-info w-100" disabled>
                  <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
                </button>
              ) : (
                <button type="submit" className="btn btn-info w-100">
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
