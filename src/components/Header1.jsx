// components/Header.jsx
import React from 'react';

const Header1 = ({ currentPage, onChangePage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => onChangePage('home')}>
          <div className="logo-icon">💼</div>
          <div className="logo-text">
            <h1>Билгүүн</h1>
            <p className="logo-subtitle">Portfolio систем</p>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <button 
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => onChangePage(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {currentPage === item.id && (
                    <span className="nav-indicator"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Current Page Indicator */}
        <div className="page-indicator">
          <div className="current-page">
            <span className="current-icon">
              {currentPage === 'home' && '🏠'}
              {currentPage === 'projects' && '💻'}
              {currentPage === 'resume' && '📄'}
              {currentPage === 'contact' && '📞'}
            </span>
            <span className="current-label">
              {currentPage === 'home' && 'Нүүр хуудас'}
              {currentPage === 'projects' && 'Төслүүд'}
              {currentPage === 'resume' && 'Миний Резюме'}
              {currentPage === 'contact' && 'Холбоо барих'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;