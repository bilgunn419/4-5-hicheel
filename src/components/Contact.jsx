// components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Форм илгээх логик
    try {
      // API руу илгээх код
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // 3 секундын дараа статус алга болно
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'И-мэйл',
      value: 'bilguunee0419@gmail.com',
      link: 'bilguunee0419@gmail.com'
    },
    {
      icon: '📱',
      title: 'Утас',
      value: '8929-0899',
      link: 'tel:89290899'
    },
    {
      icon: '📍',
      title: 'Хаяг',
      value: 'Улаанбаатар хот, Баянгол дүүрэг',
      link: null
    },
    {
      icon: '🕒',
      title: 'Ажлын цаг',
      value: 'Даваа - Баасан, 9:00 - 18:00',
      link: null
    }
  ];

  const socialLinks = [
    { platform: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/%D0%B1-%D0%B1%D0%B8%D0%BB%D0%B3%D2%AF%D2%AF%D0%BD-8a11ab292/' },
    { platform: 'GitHub', icon: '🐙', url: 'https://github.com/bilgunn419' },
    { platform: 'Instagram', icon: '📷', url: 'https://www.instagram.com/thebvvne_/' },
    { platform: 'Facebook', icon: '👥', url: 'https://www.facebook.com/battseren.bilguun.5' }
  ];

  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <h2 className="section-title">📞 Холбоо барих</h2>
        
        <div className="contact-content">
          
          {/* Холбоо барих мэдээлэл */}
          <div className="contact-info-section">
            <h3 className="contact-subtitle">Би хэн бэ?</h3>
            <p className="contact-description">
              Би IT инженер мэргэжлийн оюутан бөгөөд шинэ технологи, төсөл, 
              хамтын ажиллагаанд дуртай. Хэрэв танд асуулт, санал болон 
              хамтрах боломж байвал доорх холбоосуудаар холбогдоно уу.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-detail">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Нийгмийн сүлжээ */}
            <div className="social-section">
              <h3 className="social-title">Намайг дагаарай</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-platform">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Мессеж илгээх форм */}
          <div className="contact-form-section">
            <h3 className="form-title">Надад мессеж илгээх</h3>
            
            {submitStatus === 'success' && (
              <div className="alert success">
                ✅ Мессеж амжилттай илгээгдлээ! Би удахгүй хариулах болно.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert error">
                ❌ Алдаа гарлаа. Дахин оролдоно уу.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Нэр *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Нэрээ оруулна уу"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">И-мэйл *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="И-мэйл хаягаа оруулна уу"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Сэдэв</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Мессежийн сэдвийг оруулна уу"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Мессеж *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Мессежээ энд бичнэ үү..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading">⏳</span>
                    Илгээж байна...
                  </>
                ) : (
                  <>
                    <span className="send-icon">✉️</span>
                    Мессеж илгээх
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Газрын зураг (placeholder) */}
        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h4>Улаанбаатар хот</h4>
              <p>Баянгол дүүрэг, 33-р хороо</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;