import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
export const App = () => {
  return (
    <div>
      {' '}
      <Header />;
      <About />
      <Projects />
      <Contacts />
    </div>
  );
};
