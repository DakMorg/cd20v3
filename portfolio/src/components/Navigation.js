import React from 'react';

function Navigation(props) {
  const {
    currentTab, handleTabChange,
  } = props;

  return (
    <nav>
 
      <ul className="navBar">
        <li className ="navItem">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className ="navItem">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')}
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className ="navItem">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className ="navItem">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;