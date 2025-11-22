import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Settings, Briefcase, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'team', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Facebook Customer Chat Plugin
  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Load the SDK script
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Static Websites",
      description: "Beautiful, fast-loading websites perfect for portfolios, landing pages, and business showcases."
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Management Systems",
      description: "Custom-built systems to streamline your business operations and boost productivity."
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Small Business Solutions",
      description: "Tailored web applications designed specifically for small business needs and budgets."
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Capstone Projects",
      description: "Academic project development with modern technologies and best practices."
    }
  ];

  const team = [
    {
      name: "Team Member 1",
      role: "Full-Stack Developer",
      description: "Specializes in building scalable web applications and database architecture.",
      avatar: "A"
    },
    {
      name: "Team Member 2",
      role: "Frontend Developer",
      description: "Creates beautiful, responsive user interfaces with modern frameworks.",
      avatar: "B"
    },
    {
      name: "Team Member 3",
      role: "Backend Developer",
      description: "Expert in server-side logic, APIs, and system integration.",
      avatar: "C"
    },
    {
      name: "Team Member 4",
      role: "UI/UX Designer",
      description: "Designs intuitive user experiences and stunning visual interfaces.",
      avatar: "D"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A complete online store solution for a local retail business with inventory management.",
      emoji: "🏪"
    },
    {
      title: "Inventory System",
      description: "Real-time inventory tracking system for a growing manufacturing company.",
      emoji: "📊"
    },
    {
      title: "Restaurant Website",
      description: "Modern, mobile-friendly website with online reservation system for a local restaurant.",
      emoji: "🍽️"
    },
    {
      title: "Portfolio Showcase",
      description: "Elegant portfolio website for a creative professional to display their work.",
      emoji: "🎨"
    },
    {
      title: "Learning Management System",
      description: "Capstone project: comprehensive LMS for educational institutions.",
      emoji: "📚"
    },
    {
      title: "Clinic Booking System",
      description: "Appointment scheduling and patient management system for a medical clinic.",
      emoji: "🏥"
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const projectTypes = [
    "Static Website",
    "Management System",
    "E-Commerce Platform",
    "Mobile App",
    "Custom Web Application",
    "Capstone Project",
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message
    const messageText = `Hi! I'm interested in your services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.project}\n\nMessage:\n${formData.message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(messageText);
    
    // Open Messenger with pre-filled text
    const messengerLink = `https://m.me/61583958157909?text=${encodedMessage}`;
    window.open(messengerLink, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white min-h-screen">
      {/* Facebook Customer Chat Plugin */}
      <div id="fb-root"></div>
      <div 
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="61583958157909"
        theme_color="#06b6d4"
        logged_in_greeting="Hi! How can we help you with your project?"
        logged_out_greeting="Hi! How can we help you with your project?"
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 shadow-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              WebSight
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {['home', 'services', 'team', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-cyan-400 transition-colors ${
                      activeSection === section ? 'text-cyan-400' : ''
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-cyan-500/20">
            <ul className="px-4 py-4 space-y-4">
              {['home', 'services', 'team', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="capitalize block w-full text-left hover:text-cyan-400 transition-colors"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                We Build Digital Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                Expert web development team crafting websites and applications for small businesses
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/30"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:scale-105 transition-transform hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/40"
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-300">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 text-center hover:scale-105 transition-transform hover:border-cyan-500/40"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg shadow-cyan-500/20">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-lg rounded-xl overflow-hidden border border-cyan-500/20 hover:scale-105 transition-transform hover:border-cyan-500/40"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-6xl">
                  {project.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-300">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="project" className="block text-gray-300 mb-2">Project Type</label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              >
                <option value="" disabled>Select a project type</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type} className="bg-slate-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/30"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center border-t border-cyan-500/20">
        <p className="text-gray-500">© 2025 WebSight. Building the web, one project at a time.</p>
      </footer>
    </div>
  );
}