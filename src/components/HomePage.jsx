// components/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="page home-page">
      <div className="page-header">
        <h1 className="page-title">👋 Сайн байна уу?</h1>
        <p className="page-subtitle"> Би 4-р курсын компьютерийн ухааны тэнхимийн оюутан</p>
      </div>

      <div className="page-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="profile-card">
            <div className="profile-avatar">Би</div>
            <div className="profile-info">
              <h2>Билгүүн</h2>
              <p className="profile-bio">
                Монгол Коосэн технологийн коллежийн IT инженер мэргэжлээр суралцаж буй 4-р курсын оюутан.
                Технологи, програмчлал, шинэ зүйл сурахдаа дуртай.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Курс</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Төсөл</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Тэмцээн</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">80%</div>
            <div className="stat-label">Дуусгасан</div>
          </div>
        </div>

        {/* Hobbies Section */}
        <section className="hobbies-section">
          <h3>🎮 Миний хобби</h3>
          <div className="hobbies-list">
            <div className="hobby-card">
              <span className="hobby-icon">🏐</span>
              <h4>Волейбол</h4>
              <p>Багийн спорт, 2-3 удаа/улиралдаа тоглодог</p>
            </div>
            <div className="hobby-card">
              <span className="hobby-icon">🎱</span>
              <h4>Биллиард</h4>
              <p>Стратеги тоглоом, төвлөрөл шаарддаг</p>
            </div>
            <div className="hobby-card">
              <span className="hobby-icon">🎯</span>
              <h4>Valorant</h4>
              <p>Тактик шуудан, Silver rank</p>
            </div>
          </div>
        </section>

        {/* Navigation Guide */}
        <div className="navigation-guide">
          <h3>🔍 Portfolio үзэх</h3>
          <div className="guide-cards">
            <div className="guide-card">
              <h4>💼 Projects</h4>
              <p>Миний хийсэн төслүүдийг үзэх</p>
              <a href="https://togloom-six.vercel.app/" className="guide-link">Үзэх →</a>
            </div>
            <div className="guide-card">
              <h4>📄 Resume</h4>
              <p>Миний боловсрол, туршлагыг үзэх</p>
              <a href="https://drive.google.com/file/d/1E-H3vRdl0LDtPjbI3QHXfRm1NNjhReSO/view" className="guide-link">Үзэх →</a>
            </div>
            <div className="guide-card">
              <h4>📞 Contact</h4>
              <p>Надтай холбогдох</p>
              <a href="u" className="guide-link">Үзэх →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;