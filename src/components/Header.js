import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt style={{ fontSize: '1.5em', color: '#ffcc00' }} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
