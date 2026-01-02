// components/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Eye Detector Project',
      description: 'Roboflow, kaggle, Jupyter Notebook, Google Colab',
      technologies: ['Python', 'Yolo', ],
      category: 'Тэмцээний санаа',
      year: '2023',
      semester: 'Зуны амралт',
      status: 'Дууссан',
      github: 'https://app.roboflow.com/bilguuns/eye-detection-hgpgb/browse?queryText=&pageSize=50&startingIndex=0&browseQuery=true',
      demo: 'https://drive.google.com/drive/folders/10JCLnDFY4-ARk6bB9n8mdlJ60ftk8A_e',
      imageColor: '#667eea'
    },
    {
      id: 2,
      title: 'Face Recognation Project',
      description: 'Гэр бүлийн гишүүдийн царайг ялгаж ангилж таних',
      technologies: ['Roboflow', 'Python ', 'Jupyter Notebook', 'Google Colab'],
      category: 'Бие даасан  төсөл',
      year: '2023',
      semester: '2-р курс',
      status: 'Дууссан',
      github: '#',
      demo: '#',
      imageColor: '#4fd1c5'
    },
    {
      id: 3,
      title: 'Sign Language Projects',
      description: 'Ярианы бэрхшээлтэй хүмүүс дохионы хэл ашигладаг түүнийг энгийн хүн ойлгох',
      technologies: ['Roboflow', 'Python ', 'Jupyter Notebook', 'Google Colab'],
      category: 'Хичээлийн төсөл',
      year: '2023',
      semester: 'Зуны амралт',
      status: 'Дууссан',
      github: 'https://app.roboflow.com/bilguuns/sign-lan-3k9ge/browse?queryText=&pageSize=50&startingIndex=0&browseQuery=true',
      demo: '#',
      imageColor: '#f687b3'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Миний ур чадвар, төслүүдийг харуулдаг портфолио вэбсайт. Минимал дизайн, responsive layout.',
      technologies: ['React', 'CSS', 'JavaScript', 'Tailwind'],
      category: 'Мэргэжлийн хичээл',
      year: '2026',
      semester: '1-р семестер',
      status: 'Дууссан',
      github: '#',
      demo: '#',
      imageColor: '#f6ad55'
    },
    {
      id: 5,
      title: 'Мал Тооллогын Төхөөрөмж',
      description: 'Хонь , ямааг малийн хашаа руу орох үед төхөөрөмжөөр тоолох',
      technologies: ['Roboflow', 'Kaggle', 'Google Colab', 'Yolo', 'OpenCV','RaspberryPi'],
      category: 'Хичээлийн төсөл',
      year: '2023',
      semester: '1-р семестер',
      status: 'Хөгжүүлж байгаа',
      github: '#',
      demo: '#',
      imageColor: '#9f7aea'
    },
    {
      id: 6,
      title: 'Libry',
      description: 'Хуучин номны солилцоо болон худалдааны вэбсайт',
      technologies: ['React','Java-script', 'Chatbot', 'Maps', 'CSS'],
      category: 'Хичээлийн төсөл',
      year: '2024',
      semester: '2-р семестер',
      status: 'Зогссон',
      github: '#',
      demo: '#',
      imageColor: '#68d391'
    },
    {
      id: 7,
      title: 'Khiilen Brand',
      description: 'Хувцасны брэндийн 3D вэбсайт',
      technologies: ['React', 'Node.js', 'MySQL', 'Type-script', 'Blender', 'Photoshop', 'Figma','Github','Chatgpt'],
      category: 'Мэргэжлийн хичээл',
      year: '2024',
      semester: '1-р семестер',
      status: 'Зогссон',
      github: '#',
      demo: '#',
      imageColor: '#4c51bf'
    },
    {
      id: 8,
      title: 'Тоглоом',
      description: 'ХР цуглуулдаг гарын хурд шаардсан тоглоом',
      technologies: ['React','Java-script', 'Deepseek', 'Tailwind', 'CSS'],
      category: 'Өөрөө хийсэн',
      year: '2025',
      semester: '1-р семестер',
      status: 'Дууссан',
      github: 'https://github.com/bilguunbattseren602-sudo/togloom',
      demo: 'https://togloom-six.vercel.app/',
      imageColor: '#ed8936'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  const categories = [
    { id: 'all', label: 'Бүгд', count: projects.length },
    { id: 'Мэргэжлийн хичээл', label: 'Мэргэжлийн хичээл', count: projects.filter(p => p.category === 'Мэргэжлийн хичээл').length },
    { id: 'Хичээлийн төсөл', label: 'Хичээлийн төсөл', count: projects.filter(p => p.category === 'Хичээлийн төсөл').length },
    { id: 'Өөрөө хийсэн', label: 'Өөрөө хийсэн', count: projects.filter(p => p.category === 'Өөрөө хийсэн').length }
  ];

  return (
    <div className="page projects-page">
      <div className="page-header">
        <h1 className="page-title">💼 Миний Төслүүд</h1>
        <p className="page-subtitle">Хичээл болон өөрөө хийсэн бүх төслүүдийн жагсаалт</p>
      </div>

      <div className="page-content">
        
        {/* Stats Summary */}
        <div className="projects-summary">
          <div className="summary-card">
            <div className="summary-icon">📁</div>
            <div>
              <h3>{projects.length}</h3>
              <p>Нийт төсөл</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">✅</div>
            <div>
              <h3>{projects.filter(p => p.status === 'Дууссан').length}</h3>
              <p>Дууссан төсөл</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🏫</div>
            <div>
              <h3>{projects.filter(p => p.category === 'Мэргэжлийн хичээл').length}</h3>
              <p>Мэргэжлийн төсөл</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">💡</div>
            <div>
              <h3>{projects.filter(p => p.category === 'Өөрөө хийсэн').length}</h3>
              <p>Өөрөө хийсэн</p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div 
                  className="project-image" 
                  style={{ backgroundColor: project.imageColor }}
                >
                  <div className="project-initials">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className={`project-status ${project.status === 'Дууссан' ? 'completed' : 'in-progress'}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Семестер:</span>
                    <span className="detail-value">{project.semester}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Төлөв:</span>
                    <span className={`detail-value ${project.status === 'Дууссан' ? 'completed' : 'in-progress'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link github">
                    <span className="link-icon">🐙</span>
                    GitHub
                  </a>
                  <a href={project.demo} className="project-link demo">
                    <span className="link-icon">🚀</span>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;