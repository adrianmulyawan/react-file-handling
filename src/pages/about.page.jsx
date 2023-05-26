import React from 'react';
import NavbarComponent from '../components/navbar.component';

const AboutPage = () => {
  document.title = "About"

  return (
    <>
      <NavbarComponent />
      <h1 className="text-center">About Page</h1>
    </>
  );
}

export default AboutPage;
