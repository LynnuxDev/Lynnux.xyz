import React from 'react';

interface navbarProps {
  active: string;
}

const navbar: React.FC<navbarProps> = ({active}) => {
  switch (active) {
    case ("about"): {
      return (
        <nav className="navbar">
          <ul className="navbar-list">
              <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>About</button>
              </li>
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Resume</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Portfolio</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Blog</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Contact</button>
              </li>
          </ul>
        </nav>
      );    
    }
    case ("resume"): {
      return (
        <nav className="navbar">
          <ul className="navbar-list">
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>About</button>
              </li>
              <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>Resume</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Portfolio</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Blog</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Contact</button>
              </li>
          </ul>
        </nav>
      );    
    }
    case ("portfolio"): {
      return (
        <nav className="navbar">
          <ul className="navbar-list">
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>About</button>
              </li>
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Resume</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>Portfolio</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Blog</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Contact</button>
              </li>
          </ul>
        </nav>
      );    
    }
    case ("blog"): {
      return (
        <nav className="navbar">
          <ul className="navbar-list">
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>About</button>
              </li>
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Resume</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Portfolio</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>Blog</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Contact</button>
              </li>
          </ul>
        </nav>
      );    
    }
    case ("contact"): {
      return (
        <nav className="navbar">
          <ul className="navbar-list">
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>About</button>
              </li>
              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Resume</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Portfolio</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Blog</button>
              </li>

              <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>Contact</button>
              </li>
          </ul>
        </nav>
      );    
    }
    default: {
      return (
        <></>
      );    
    }   
  }
};

export default navbar;