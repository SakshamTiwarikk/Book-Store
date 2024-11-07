import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <Header />
        {/* Button to open the Sign In page in a new tab */}
        <button onClick={() => window.open('/register', '_blank')}>Go to Sign In</button>
        
        {/* Outlet for nested routes */}
        <Outlet />
    </main>
  );
}

export default Home;
