import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserFromLocalStorage } from './auth/authSlice';
import { useDispatch } from 'react-redux';

function App() {

  const user = useSelector(store => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  

    useEffect(() => {
      const storedUser = window.localStorage.getItem('user');
      if (storedUser) {
        dispatch(setUserFromLocalStorage());
        
      } else {
        // Handle authentication error, navigate to login page, or display an error message
        navigate('/login');
      }
    }, []);
  return (
<div>
  <Navbar/>
   <h1>Welcome to the MED STORE</h1>
   <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
       ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
   </p>
   
   
</div>)
}

export default App;
