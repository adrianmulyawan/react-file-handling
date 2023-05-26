import React from 'react';
import NavbarComponent from '../components/navbar.component';

const HomePage = () => {
  document.title = 'Home';

  return (
    <>
      <NavbarComponent />
      <h1 className='text-center'>Home Page</h1>
    </>
  );
}

export default HomePage;
