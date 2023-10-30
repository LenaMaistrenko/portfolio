import React from 'react';
import css from './Header.module.css';
const Header = () => {
  return (
    <header className={css.header_container}>
      {' '}
      <nav className={css.nav}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>Home</li>
          <li className={css.nav_item}>About</li>
          <li className={css.nav_item}>Projects</li>
          <li className={css.nav_item}>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
