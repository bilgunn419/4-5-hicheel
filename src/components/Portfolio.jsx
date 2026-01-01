// components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header1.jsx';
import Footer from './Footer1.jsx';
import Home from './HomePage.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
import './Portfolio.css';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  // Хуудас шилжих анимаци
  const changePage = (pageName) => {
    if (currentPage === pageName) return;
    
    setIsLoading(true);
    
    // Хуудас солих анимаци
    setTimeout(() => {
      setCurrentPage(pageName);
      setIsLoading(false);
      
      // Дээш гүйлгэх
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  // Хуудсыг харуулах
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Alt + Number shortcuts
      if (e.altKey) {
        switch(e.key) {
          case '1':
            changePage('home');
            break;
          case '2':
            changePage('projects');
            break;
          case '3':
            changePage('resume');
            break;
          case '4':
            changePage('contact');
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  return (
    <div className="portfolio-app">
      {/* Loading Animation */}
      {isLoading && (
        <div className="page-transition">
          <div className="loading-spinner"></div>
          <p>Хуудас шилжиж байна...</p>
        </div>
      )}

      {/* Header with Navigation */}
      <div className="portfolio-header-wrapper">
        <Header currentPage={currentPage} onChangePage={changePage} />
      </div>

      {/* Main Content */}
      <main className="portfolio-main">
        <div className={`page-container ${isLoading ? 'fading' : ''}`}>
          {renderPage()}
        </div>
      </main>

      {/* Page Navigation Sidebar */}
      <div className="page-sidebar">
        <div className="sidebar-nav">
          <button 
            className={`sidebar-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => changePage('home')}
            title="Alt + 1"
          >
            <span className="sidebar-icon">🏠</span>
            <span className="sidebar-text">Home</span>
          </button>
          
          <button 
            className={`sidebar-btn ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => changePage('projects')}
            title="Alt + 2"
          >
            <span className="sidebar-icon">💻</span>
            <span className="sidebar-text">Projects</span>
          </button>
          
          <button 
            className={`sidebar-btn ${currentPage === 'resume' ? 'active' : ''}`}
            onClick={() => changePage('resume')}
            title="Alt + 3"
          >
            <span className="sidebar-icon">📄</span>
            <span className="sidebar-text">Resume</span>
          </button>
          
          <button 
            className={`sidebar-btn ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => changePage('contact')}
            title="Alt + 4"
          >
            <span className="sidebar-icon">📞</span>
            <span className="sidebar-text">Contact</span>
          </button>
        </div>

        <div className="page-indicator">
          <div className="indicator-dots">
            <span className={`dot ${currentPage === 'home' ? 'active' : ''}`}></span>
            <span className={`dot ${currentPage === 'projects' ? 'active' : ''}`}></span>
            <span className={`dot ${currentPage === 'resume' ? 'active' : ''}`}></span>
            <span className={`dot ${currentPage === 'contact' ? 'active' : ''}`}></span>
          </div>
          <p className="current-page-label">
            {currentPage === 'home' && 'Нүүр хуудас'}
            {currentPage === 'projects' && 'Төслүүд'}
            {currentPage === 'resume' && 'Резюме'}
            {currentPage === 'contact' && 'Холбоо барих'}
          </p>
        </div>
      </div>

      {/* Page Navigation Bottom Bar (Mobile) */}
      <div className="mobile-navbar">
        <button 
          className={`mobile-nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => changePage('home')}
        >
          <span className="mobile-nav-icon">🏠</span>
          <span className="mobile-nav-label">Home</span>
        </button>
        
        <button 
          className={`mobile-nav-btn ${currentPage === 'projects' ? 'active' : ''}`}
          onClick={() => changePage('projects')}
        >
          <span className="mobile-nav-icon">💻</span>
          <span className="mobile-nav-label">Projects</span>
        </button>
        
        <button 
          className={`mobile-nav-btn ${currentPage === 'resume' ? 'active' : ''}`}
          onClick={() => changePage('resume')}
        >
          <span className="mobile-nav-icon">📄</span>
          <span className="mobile-nav-label">Resume</span>
        </button>
        
        <button 
          className={`mobile-nav-btn ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => changePage('contact')}
        >
          <span className="mobile-nav-icon">📞</span>
          <span className="mobile-nav-label">Contact</span>
        </button>
      </div>

      {/* Footer */}
      <div className="portfolio-footer-wrapper">
        <Footer currentPage={currentPage} />
      </div>

      Quick Navigation Modal
     
    </div>
  );
};

export default Portfolio;