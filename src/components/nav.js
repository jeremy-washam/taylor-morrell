import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <div className="navLeft">
        <img className="bar" src="https://i.ibb.co/ZNfHHsY/whitebar.png" alt="" />
        <p className="resume"><a href="https://drive.google.com/file/d/1byMjUdtHcblCwnOz5VILJGoBEqOzzbkO/view" target="_blank" rel="noreferrer">RESUME</a></p>
        <p className="slash"> / </p>
        <NavLink className="navLink" to="/climbing">
          <p className="climbing">CLIMBING</p>
        </NavLink>
      </div>
      <div className="navCenter">
        <NavLink className="navLink" exact to="/">
          <img src="https://i.ibb.co/d2WcdWs/logo.png" alt="" />
          <p>TAYLOR MORRELL</p>
        </NavLink>
      </div>
      <div className="navRight">
        <NavLink className="navLink" to="/adventure">
          <p>RESPONSIBLE ADVENTURE</p>
        </NavLink>
        <img className="bar" src="https://i.ibb.co/ZNfHHsY/whitebar.png" alt="" />
      </div>
    </nav>
  );
};

export default Nav;
