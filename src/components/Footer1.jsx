// components/Footer.jsx
import React from 'react';

const Footer1 = ({ currentPage }) => {
  const getPageTitle = () => {
    switch(currentPage) {
      case 'home': return 'Нүүр хуудас';
      case 'projects': return 'Төслүүд';
      case 'resume': return 'Резюме';
      case 'contact': return 'Холбоо барих';
      default: return 'Портфолио';
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Би</div>
            <div className="footer-brand-info">
              <h3>Билгүүн</h3>
              <p>IT инженер мэргэжлийн 4-р курсын оюутан</p>
              <p>Одоогийн хуудас: <strong>{getPageTitle()}</strong></p>
            </div>
          </div>


          <div className="footer-contact">
            <h4>Холбоо барих</h4>
            <p>📧 bilguunee0419@gmail.com</p>
            <p>📱 8929-0899</p>
            <p>📍 Улаанбаатар, Монгол</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer1;