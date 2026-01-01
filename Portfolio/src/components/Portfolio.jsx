import React from 'react';
import project1 from "../assets/project1.jpg";

  const Portfolio = () => {
  const hobbies = [
    { name: 'Photography', icon: '📷', description: 'Capturing moments and landscapes in nature and urban settings' },
    { name: 'Hiking', icon: '🥾', description: 'Exploring mountains and nature trails on weekends' },
    { name: 'Reading', icon: '📚', description: 'Tech books, design journals, and philosophical literature' },
    { name: 'Cooking', icon: '🍳', description: 'Experimenting with international cuisines and fusion recipes' },
  ];

  const achievements = [
    { title: 'Design Excellence Award 2023', description: 'Best UI Design - International Design Forum', year: '2023' },
    { title: 'Client Satisfaction Award', description: '98% Positive Feedback from 250+ Projects', year: '2022' },
    { title: 'Innovation in Tech Award', description: 'Most Innovative Mobile App Design', year: '2021' },
  ];

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Frontend Development', level: 90 },
    { name: 'Mobile Design', level: 88 },
    { name: 'Brand Identity', level: 85 },
    { name: 'Prototyping', level: 92 },
    { name: 'User Research', level: 87 },
  ];

  const projects = [
    { title: 'E-commerce Platform', category: 'Web Design', description: 'Full redesign for fashion retailer' },
    { title: 'Fitness Mobile App', category: 'Mobile App', description: 'Workout tracking and nutrition planning' },
    { title: 'Corporate Website', category: 'Web Development', description: 'Corporate identity and CMS integration' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com', color: 'bg-blue-600' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com', color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', color: 'bg-blue-500' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: 'bg-sky-500' },
    { name: 'Dribbble', icon: '🏀', url: 'https://dribbble.com', color: 'bg-pink-500' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com', color: 'bg-gray-800' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans">
      
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Brooklyn Gilbert</h1>
                <p className="text-gray-600 text-sm">UI/UX Designer & Developer</p>
              </div>
            </div>
            
          
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a 
                href="#about" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300 rounded-lg hover:bg-blue-50"
              >
                About Me
              </a>
              <a 
                href="#hobby" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300 rounded-lg hover:bg-blue-50"
              >
                Hobby
              </a>
              <a 
                href="#achievements" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300 rounded-lg hover:bg-blue-50"
              >
                Achievements
              </a>
              <a 
              
                href="#contact" 
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

     
      <main className="pt-24">
       
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                  AVAILABLE FOR FREELANCE
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Brooklyn Gilbert
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                I'm a Freelance UI/UX Designer and Developer based in London, England.
                I strive to build immersive and beautiful web applications through 
                carefully crafted code and user-centric design.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                  Say Hello! 👋
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            
            
            <div className="lg:w-1/2">
              <div className="relative">
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
                  <img 
                    src={project1} 
                    alt="Brooklyn Gilbert" 
                    className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold text-blue-600">15+</div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                      250+
                    </div>
                    <div className="text-gray-700 font-medium">Projects</div>
                    <div className="mt-2 text-sm text-gray-500">Completed</div>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                      58
                    </div>
                    <div className="text-gray-700 font-medium">Clients</div>
                    <div className="mt-2 text-sm text-gray-500">Happy</div>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                      99%
                    </div>
                    <div className="text-gray-700 font-medium">Satisfaction</div>
                    <div className="mt-2 text-sm text-gray-500">Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section id="about" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About <span className="text-blue-600">Me</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Passionate designer and developer with over 15 years of experience creating digital experiences
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Based in the heart of London, I've spent the last 15 years honing my craft in UI/UX design and frontend development. 
                  My journey started with graphic design in 2008, and over the years, I've evolved into a full-stack creative who 
                  can take projects from concept to completion.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I believe in creating designs that are not only beautiful but also functional and accessible. 
                  Every pixel, every line of code serves a purpose in creating meaningful user experiences.
                </p>
                
                
                <div className="space-y-6">
                  {skills.slice(0, 4).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-blue-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Location</h4>
                  <p className="text-gray-600">London, England</p>
                  <p className="text-gray-500 text-sm mt-1">Working Worldwide</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Education</h4>
                  <p className="text-gray-600">MSc. Computer Science</p>
                  <p className="text-gray-500 text-sm mt-1">University of London</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Experience</h4>
                  <p className="text-gray-600">15+ Years</p>
                  <p className="text-gray-500 text-sm mt-1">Design & Development</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Languages</h4>
                  <p className="text-gray-600">English, Spanish</p>
                  <p className="text-gray-500 text-sm mt-1">Fluent in both</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section id="hobby" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                My <span className="text-blue-600">Hobbies</span> & Interests
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Beyond design and code, here's what keeps me inspired and balanced
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {hobby.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{hobby.name}</h3>
                    <p className="text-gray-600 mb-4">{hobby.description}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Weekend Activities</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Photography Walks in Nature',
                  'Cooking International Dishes',
                  'Reading Design Books',
                  'Hiking & Outdoor Adventures',
                  'Visiting Art Galleries',
                  'Coffee Tasting Sessions'
                ].map((activity, index) => (
                  <span 
                    key={index}
                    className="bg-white px-5 py-3 rounded-full text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

       
        <section id="achievements" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                My <span className="text-blue-600">Achievements</span> & Awards
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Recognition and awards earned through dedication and excellence in design
              </p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="relative bg-white rounded-2xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    🏆
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{achievement.title}</h3>
                  <p className="text-gray-600 mb-6">{achievement.description}</p>
                  <div className="flex items-center">
                    <div className="text-yellow-500 text-xl">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span>📜</span> Certifications
                </h3>
                <ul className="space-y-4">
                  {[
                    'Google UX Design Professional Certificate',
                    'Adobe Certified Expert (ACE)',
                    'AWS Certified Developer',
                    'Scrum Master Certified (SMC)',
                    'Figma Design System Specialist',
                    'Mobile UI/UX Design Certification'
                  ].map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Recognition</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-2xl">📰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Featured in Tech Magazine</h4>
                      <p className="text-gray-600">2023 Edition - Top 50 UI/UX Designers Worldwide</p>
                      <p className="text-gray-500 text-sm mt-1">Digital Design Journal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-2xl">🎤</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Industry Speaker</h4>
                      <p className="text-gray-600">Keynote Speaker at International Design Conference 2023</p>
                      <p className="text-gray-500 text-sm mt-1">London Design Summit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Featured <span className="text-blue-600">Projects</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A selection of my recent design and development work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">

                    <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-5xl font-bold opacity-30">0{index + 1}</span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <button className="text-blue-600 font-medium hover:text-blue-700 transition duration-300">
                        View Case Study →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Let's <span className="text-blue-600">Work Together</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                Get In Touch 📧
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-10 py-4 rounded-xl transition-all duration-300">
                Download CV 📄
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">B</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">BVVNE</h2>
                  <p className="text-gray-400 text-sm">Design & Development Studio</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Creating beautiful digital experiences with passion and precision. Based in London, 
                serving clients worldwide with innovative design and development solutions.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email me at</p>
                  <p className="font-medium">hello@bvvne.com</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300 hover:pl-2">About Me</a></li>
                <li><a href="#hobby" className="text-gray-400 hover:text-white transition duration-300 hover:pl-2">My Hobbies</a></li>
                <li><a href="#achievements" className="text-gray-400 hover:text-white transition duration-300 hover:pl-2">Achievements</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300 hover:pl-2">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:pl-2">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:pl-2">Blog</a></li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Connect With Me</h3>
              <p className="text-gray-400 mb-6">
                Follow for design inspiration, tips, and updates
              </p>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-white transition duration-300 transform hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
              
              {/* Related Links */}
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-white">Related Links</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Design Blog →</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Portfolio Gallery →</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Free Resources →</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Design Tools →</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <hr className="border-gray-800 my-12" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p>© 2024 BVVNE Design Studio. All rights reserved.</p>
              <p className="text-sm mt-1">Based in London, England 🇬🇧</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;