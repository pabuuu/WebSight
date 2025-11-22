import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Settings, Briefcase, GraduationCap, Mail, Github, Linkedin } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              DevSquad
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {['home', 'services', 'team', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-purple-400 transition-colors ${
                      activeSection === section ? 'text-purple-400' : ''
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
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <ul className="px-4 py-4 space-y-4">
              {['home', 'services', 'team', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="capitalize block w-full text-left hover:text-purple-400 transition-colors"
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
              <div className="w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                We Build Digital Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Expert web development team crafting websites and applications for small businesses
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/50"
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:scale-105 transition-transform"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-4xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition-transform"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-6xl">
                  {project.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
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
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="project" className="block text-gray-300 mb-2">Project Type</label>
              <input
                type="text"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="e.g., Static Website, Management System"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center border-t border-white/10">
        <p className="text-gray-400">© 2024 DevSquad. Building the web, one project at a time.</p>
      </footer>
    </div>
  );
}