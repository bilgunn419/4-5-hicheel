// components/Resume.jsx
import React from 'react';

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: 'Бүрэн дунд боловсорлын гэрчилгээ',
      school: 'Монгол Коосэн Сургууль',
      period: '2022 - 2025',
      description: ' Гол чиглэл: Вэб хөгжүүлэлт, 3D, Design, Frontend, Machine learning, Deep learning, Iot',
      gpa: '2.8'
    },
  ];

  const experience = [
    {
      id: 1,
      position: 'Вэб хөгжүүлэгч',
      company: '',
      period: '2026 - Одоо',
      responsibilities: [
        'Вэбсайт хөгжүүлэлт',
        '3D design гаргах ',
        'Front-end',
        'Machine Learning хийх '
      ]
    },
   
  ];

  const certifications = [
    '"ОУЦС" хөл бөмбөгийн АШТ хүрэл медал 2019 он',
    'Alison- Job skills and future continuous tense',
    '"The Academy of English Англи Хэлний Академи" best speaker буюу шилдэг илтгэгч 2021 он',
    '"МК Коллеж" Хиймэл оюун ухааны "Зуны сургалт-2" тэмцээнд амжилттай оролцож тэргүүн байр эзэлсэн 2022 он',
    '"DXCUP Mongolia 2024" тэмцээнд сургуулиа төлөөлөн оролцож 1-р байр эзэлсэн 2023 он',
    'NAPROCK(Procon) олон улсын программчлалын тэмцээний SPECIAL PRIZE шагнал авсан 2023 он',
    '"МК Коллеж" намрын спарткад-ын уртын харайлтын төрөлд 3-р байр эзэлсэн 2024 он',
    '"МК Коллеж" гар бөмбөгийн аврага шалгаруулах тэмцээн 1-р байр эзэлсэн 2024 он ',
    '"DXCUP Mongolia 2024 WINTER" сургуулиа төлөөлөн амжилттай оролцсон ',
    'Монгол Улсад анх удаа зохион байгуулагдсан Хиймэл оюуны улсын анхдугаар олимпиадын 2-р шатанд тэнцсэн 2025 он',
    '"МК Коллеж" сагсан бөмбөгийн аврага шалгаруулах тэмцээн 3-р байр эзэлсэн 2025 он'
  ];

  return (
    <section id="resume" className="section">
      <div className="resume-container">
        <h2 className="section-title">📄 Resume</h2>
        
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
              Ажлын Туршлага:
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
              Техникийн Ур чадвар:
            </h3>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h4 className="skill-category-title">Frontend:</h4>
                <div className="skill-list">
                  <span className="skill-item">React-</span>
                  <span className="skill-item">JavaScript-</span>
                  <span className="skill-item">HTML/CSS-</span>
                  <span className="skill-item">TypeScript-</span>
                  <span className="skill-item">Tailwind CSS-</span>
                  <span className="skill-item">Python</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4 className="skill-category-title">Backend:</h4>
                <div className="skill-list">
                  <span className="skill-item">Node.js-</span>
                  <span className="skill-item">MongoDB-</span>
                  <span className="skill-item">MySQL</span>
                  
                </div>
              </div>
              
              <div className="skill-category">
                <h4 className="skill-category-title">Бусад:</h4>
                <div className="skill-list">
                  <span className="skill-item">Git-</span>
                  <span className="skill-item">Figma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Гэрчилгээ */}
          <div className="resume-section">
            <h2 className="resume-section-title">
              <span className="section-icon">🏆</span>
              Гэрчилгээ, Шагналууд
            </h2>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">✓</div>
                  <span className="cert-text">{cert}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Resume;