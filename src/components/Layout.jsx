import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <header>
        <button
          className={`menu-btn ${showSidebar ? 'open' : ''}`}
          onClick={toggleSidebar}
        >
          <div className={`menu-icon ${showSidebar ? 'open' : ''}`} />
          <div className={`menu-icon ${showSidebar ? 'open' : ''}`} />
          <div className={`menu-icon ${showSidebar ? 'open' : ''}`} />
        </button>
        <nav className={`sidebar ${showSidebar ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className="text-glow">Home</Link></li>
            <li><Link to="/create-user" className="text-glow">Create User</Link></li>
            <li><Link to="/upload" className="text-glow">Upload</Link></li>
          </ul>
        </nav>

      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
