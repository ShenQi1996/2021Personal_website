import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sam_navbar">
      <div className="sam_navbar-links">
        <div className="sam_navbar-links_logo">
          <h2>SamQi</h2>
        </div>
        <div className="sam_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#sam">Who is Sam?</a></p>
          <p><a href="#Experiences">Experiences</a></p>
          <p><a href="#Skills">Skills</a></p>
          <p><a href="#Projects">Projects</a></p>
        </div>
      </div>
      <div className="sam_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="sam_navbar-menu_container scale-up-center">
          <div className="sam_navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#sam">Who is Sam?</a></p>
            <p><a href="#Experiences">Experiences</a></p>
            <p><a href="#Skills">Skills</a></p>
            <p><a href="#Projects">Projects</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;