import React from 'react';

import Project1 from "./assets/project1.jpg";

const Portfolio = () => {
  const _project = [
    { id: 1, title: 'E-commerce Dashboard', category: 'UI/UX Design', image: Project1 },
    
  ];

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Frontend Development', level: 90 },
    { name: 'Mobile Design', level: 85 },
    { name: 'Brand Identity', level: 80 },
  ];

  const hobbies = [
    { name: 'Photography', icon: '📷' },
    { name: 'Hiking', icon: '🥾' },
    { name: 'Reading', icon: '📚' },
    { name: 'Cooking', icon: '🍳' },
  ];

  const achievements = [
    { title: 'Design Award 2023', description: 'Best UI Design' },
    { title: 'Client Satisfaction', description: '98% Positive Feedback' },
    { title: 'Projects Completed', description: '250+ Successful Projects' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Brooklyn Gilbert</h1>
                <p className="text-gray-600">UI/UX Designer & Developer</p>
              </div>
            </div>
            
            <nav className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6 md:gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 group">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👤</span>
                  <span>About Me</span>
                  <span className="w-0 group-hover:w-4 h-0.5 bg-blue-600 transition-all duration-300"></span>
                </div>
              </a>
              <a href="#hobby" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 group">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎨</span>
                  <span>Hobby</span>
                  <span className="w-0 group-hover:w-4 h-0.5 bg-blue-600 transition-all duration-300"></span>
                </div>
              </a>
              <a href="#achievements" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 group">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏆</span>
                  <span>Achievements</span>
                  <span className="w-0 group-hover:w-4 h-0.5 bg-blue-600 transition-all duration-300"></span>
                </div>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-6 md:p-12 lg:p-16">
        {/* About Me Section */}
        <section id="about" className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-blue-600 text-xl">👤</span>
            </div>
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Background</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Based in London with over 15 years of experience in UI/UX design and development. 
                  I specialize in creating digital experiences that are both beautiful and functional.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey started in graphic design and evolved into frontend development, 
                  giving me a unique perspective on both design and implementation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl text-blue-600 mb-2">📍</div>
                  <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">London, England</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl text-blue-600 mb-2">🎓</div>
                  <h4 className="font-bold text-gray-800 mb-1">Education</h4>
                  <p className="text-gray-600">MSc. Computer Science</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 h-64 rounded-2xl shadow-xl mb-8 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-5xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold mb-2">Design Philosophy</h3>
                  <p className="text-blue-100">"Simplicity is the ultimate sophistication"</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Skills Progress</h4>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobby Section */}
        <section id="hobby" className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-green-600 text-xl">🎨</span>
            </div>
            My Hobbies & Interests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{hobby.name}</h3>
                  <p className="text-gray-600">
                    {hobby.name === 'Photography' && 'Capturing moments and landscapes'}
                    {hobby.name === 'Hiking' && 'Exploring nature and mountains'}
                    {hobby.name === 'Reading' && 'Tech books and design journals'}
                    {hobby.name === 'Cooking' && 'Experimenting with international cuisines'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Weekend Activities</h3>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Photography Walks</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Cooking Workshops</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Design Meetups</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Nature Hikes</span>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
              <span className="text-yellow-600 text-xl">🏆</span>
            </div>
            Achievements & Awards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  <div className="text-yellow-500 text-sm font-medium">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">✅ Google UX Design Professional</li>
                <li className="flex items-center gap-3">✅ Adobe Certified Expert</li>
                <li className="flex items-center gap-3">✅ AWS Certified Developer</li>
                <li className="flex items-center gap-3">✅ Scrum Master Certified</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Recognition</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-2xl">🏅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Featured in Tech Magazine</h4>
                    <p className="text-gray-600 text-sm">2023 Edition - Top 50 Designers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Industry Speaker</h4>
                    <p className="text-gray-600 text-sm">Keynote at Design Conference 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Original Content */}
        <section className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
              FREEBIES
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
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
              
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                Say Hello!
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  15 Y.
                </div>
                <div className="text-gray-700 font-medium">Experience</div>
                <div className="mt-2 text-sm text-gray-500">Years of Excellence</div>
              </div>
              
              <div className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  250+
                </div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
                <div className="mt-2 text-sm text-gray-500">Successful Delivery</div>
              </div>
              
              <div className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  58
                </div>
                <div className="text-gray-700 font-medium">Happy Clients</div>
                <div className="mt-2 text-sm text-gray-500">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">BVVNE</h2>
                  <p className="text-gray-400 text-sm">Design & Development Studio</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Creating beautiful digital experiences with passion and precision.
                Based in London, serving clients worldwide.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Me</a></li>
                <li><a href="#hobby" className="text-gray-400 hover:text-white transition duration-300">My Hobbies</a></li>
                <li><a href="#achievements" className="text-gray-400 hover:text-white transition duration-300">Achievements</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Connect With Me</h3>
              <p className="text-gray-400 mb-6">
                Follow me on social media for updates, inspiration, and more.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                >
                  <span className="text-white font-bold">f</span>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                >
                  <span className="text-white font-bold">IG</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                >
                  <span className="text-white font-bold">in</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                >
                  <span className="text-white font-bold">𝕏</span>
                </a>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-3">Related Links</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Design Blog</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Portfolio Gallery</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Free Resources</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Design Tools</a>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-800 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>© 2024 BVVNE Design Studio. All rights reserved.</p>
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