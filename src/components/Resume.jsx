// components/Resume.jsx
import React from 'react';

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: 'IT инженер мэргэжлийн бакалавр',
      school: 'Монгол Коосэн Сургууль',
      period: '2021 - 2025',
      description: '4-р курсын оюутан. Гол чиглэл: Вэб хөгжүүлэлт, Мобайл апп хөгжүүлэлт',
      gpa: '2.8'
    },
  ];

  const experience = [
    {
      id: 1,
      position: 'Вэб хөгжүүлэгч',
      company: 'Tech Solutions Монгол',
      period: '2023 - Одоо',
      responsibilities: [
        'Вэбсайт хөгжүүлэлт',
        'REST API хөгжүүлэлт',
        'Базын зохион байгуулалт',
        'Код review хийх'
      ]
    },
    {
      id: 2,
      position: 'Интерн',
      company: 'StartUp Innovation',
      period: '2022 - 2023',
      responsibilities: [
        'Фронтенд хөгжүүлэлт',
        'Тестинг',
        'Документаци бичих'
      ]
    }
  ];

  const certifications = [
    'Google Cloud Certified Associate Cloud Engineer',
    'AWS Certified Solutions Architect - Associate',
    'Microsoft Azure Fundamentals',
    'Scrum Master Certified'
  ];

  return (
    <section id="resume" className="section">
      <div className="resume-container">
        <h2 className="section-title">📄 Миний Резюме</h2>
        
        <div className="resume-content">
          
          {/* Боловсрол */}
          <div className="resume-section">
            <h3 className="resume-section-title">
              <span className="section-icon">🎓</span>
              Боловсрол
            </h3>
            
            <div className="timeline">
              {education.map(edu => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <h5 className="timeline-subtitle">{edu.school}</h5>
                    <p className="timeline-description">{edu.description}</p>
                    <div className="timeline-footer">
                      <span className="gpa-badge">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ажлын туршлага */}
          <div className="resume-section">
            <h3 className="resume-section-title">
              <span className="section-icon">💼</span>
              Ажлын Туршлага
            </h3>
            
            <div className="experience-grid">
              {experience.map(exp => (
                <div key={exp.id} className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h4 className="experience-position">{exp.position}</h4>
                      <h5 className="experience-company">{exp.company}</h5>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="responsibility-item">
                        <span className="bullet">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ур чадвар */}
          <div className="resume-section">
            <h3 className="resume-section-title">
              <span className="section-icon">⚡</span>
              Техникийн Ур чадвар
            </h3>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h4 className="skill-category-title">Frontend</h4>
                <div className="skill-list">
                  <span className="skill-item">React</span>
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">HTML/CSS</span>
                  <span className="skill-item">TypeScript</span>
                  <span className="skill-item">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4 className="skill-category-title">Backend</h4>
                <div className="skill-list">
                  <span className="skill-item">Node.js</span>
                  <span className="skill-item">Express</span>
                  <span className="skill-item">MongoDB</span>
                  <span className="skill-item">MySQL</span>
                  <span className="skill-item">REST API</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4 className="skill-category-title">Бусад</h4>
                <div className="skill-list">
                  <span className="skill-item">Git</span>
                  <span className="skill-item">Docker</span>
                  <span className="skill-item">AWS</span>
                  <span className="skill-item">Agile/Scrum</span>
                  <span className="skill-item">Figma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Гэрчилгээ */}
          <div className="resume-section">
            <h3 className="resume-section-title">
              <span className="section-icon">🏆</span>
              Гэрчилгээ, Шагналууд
            </h3>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">✓</div>
                  <span className="cert-text">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Татах товч */}
          <div className="download-section">
            <button className="download-btn">
              <span className="btn-icon">⬇️</span>
              Резюмегээ татах (PDF)
            </button>
            <p className="download-note">Хамгийн сүүлийн хувилбар: 2024 оны 12 сар</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;