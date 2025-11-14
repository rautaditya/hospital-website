import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    consultant: 'Dr. Swati Kodur Patil',
    date: '',
    timing: '',
    name: '',
    phone: '',
    email: '',
    age: '',
    service: '',
    description: ''
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Show popup when website opens
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: '#appointment', label: 'Appointment' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    {
      id: 1,
      title: "Otology / Neurotology",
      subtitle: "(Ear Services)",
      description: "Otology/Neurotology specializes in diagnosing and treating ear disorders, hearing loss and balance-related conditions.",
      image: "/public/company data/ent website/Otology.png"
    },
    {
      id: 2,
      title: "Rhinology",
      subtitle: "(Nose & Sinus Services)",
      description: "Rhinology focuses on diagnosing and treating nasal, sinus and skull base disorders for improved breathing.",
      image: "/public/company data/ent website/Rhinology.png"
    },
    {
      id: 3,
      title: "Laryngology",
      subtitle: "(Throat & Voice Services)",
      description: "Laryngology treats voice, throat and swallowing disorders to restore speech and improve vocal health.",
      image: "/public/company data/ent website/Laryngology.png"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment request submitted!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleBookAppointment = () => {
    setShowPopup(false);
    // Smooth scroll to appointment section
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            {/* Popup Content */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Book Your Appointment Today!
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Get expert ENT care from experienced specialists. Schedule your consultation now and take the first step towards better health.
                </p>
              </div>

              {/* Appointment Button */}
              <button
                onClick={handleBookAppointment}
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-3"
              >
                Book Appointment Now
              </button>

              {/* Close Link */}
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="../public/company data/ent website/ent logo.png" 
                alt="ENTCare Clinic" 
                className="h-12" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-lg p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white border-t border-gray-100`}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="w-full h-[90vh] flex items-center justify-center mt-16">
        <img
          src="/public/company data/ent website/webanner banner.png"
          alt="ENT Care Clinic Banner"
          className="w-full h-full object-contain md:object-cover"
        />
      </section>

      {/* Appointment Form Section */}
      <section
        id="appointment"
        className="min-h-screen bg-cover bg-center bg-no-repeat py-12 md:py-16"
        style={{
          backgroundImage: "url('/public/company data/ent website/From BG.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center left'
        }}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
          {/* Mobile & Tablet View - Doctor visible on left side naturally */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center">
            {/* Left Side – Doctor Image area (empty but doctor shows in background) */}
            <div className="hidden lg:block min-h-[500px]"></div>

            {/* Right Side – Appointment Form */}
            <div className="p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-2xl max-w-xl lg:max-w-none mx-auto w-full">
              <div className="space-y-6">
                {/* Form Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Book Your Appointment
                  </h2>
                  <p className="text-gray-600 text-sm">Fill in your details below</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Consultant</label>
                  <input
                    type="text"
                    name="consultant"
                    value={formData.consultant}
                    onChange={handleChange}
                    readOnly
                    className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Select Date</label>
                    <input
                      type="text"
                      name="date"
                      placeholder="mm/dd/yyyy"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Select Timing</label>
                    <input
                      type="text"
                      name="timing"
                      placeholder="Timing"
                      value={formData.timing}
                      onChange={handleChange}
                      className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Personal Info</label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                  />

                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="service"
                    placeholder="Service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                  />

                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-400 bg-transparent rounded px-4 py-2"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-700 to-blue-600 text-white font-semibold hover:shadow-lg transition-shadow"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/public/company data/ent website/Banner 3.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-4">
              Specialities ENT Care Services
            </h2>

            <p className="text-gray-800 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
              Our ENT Clinic offers comprehensive evaluation, diagnosis,
              and treatment of conditions affecting the ear, nose, throat, head, and neck.
              We provide both medical and surgical care using state-of-the-art technology
              and evidence-based practices.
            </p>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <div className="w-40 h-40 md:w-44 md:h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {service.title}
                  <br />
                  {service.subtitle}
                </h3>
                <p className="text-gray-700 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel - Visible only on Mobile */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0 px-4">
                    <div className="text-center">
                      <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {service.title}
                        <br />
                        {service.subtitle}
                      </h3>
                      <p className="text-gray-700 text-base max-w-sm mx-auto leading-relaxed px-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-cyan-500 w-8'
                      : 'bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: "url('/public/company data/ent website/last banner.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Section - Location & Appointment */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 px-6 md:px-12 lg:px-16 pt-10 md:pt-12">
            {/* Location */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Our Location</h3>
              <p className="text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                No 701/702, 7th floor, WESTWOOD ESTATES,<br />
                Kaspate Wasti, Opposite Mont Vert Tropez Road,<br />
                Socety, Wakod, Pimpri-Chinchwad, Maharashtra 411-057
              </p>
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-5 md:px-6 py-2 md:py-2.5 rounded transition-all duration-300 text-xs md:text-sm tracking-wide uppercase">
                FIND OUR LOCATION
              </button>
            </div>

            {/* Appointment */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Appointment</h3>
              <p className="text-sm md:text-base mb-4 md:mb-6">
                Make your appointment through online now.
              </p>
              <button 
                onClick={handleBookAppointment}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-5 md:px-6 py-2 md:py-2.5 rounded transition-all duration-300 text-xs md:text-sm tracking-wide uppercase"
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-12 lg:px-16 py-8 md:py-10">
            {/* Services */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5">Services</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Sleep Medicine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Allergy Diagnosis & Immunotherapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Vertigo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Audiology & Hearing Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Pediatric ENT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Head & Neck Surgery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Laryngology (Throat & Voice Services)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Rhinology (Nose & Sinus Services)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <span>Otology / Neurotology (Ear Services)</span>
                </li>
              </ul>
            </div>

            {/* Hyperlinks */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5">Hyperlinks</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <a href="#contact" className="cursor-pointer hover:underline">Contact</a>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <a href="#appointment" className="cursor-pointer hover:underline">Appointment</a>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <a href="#reviews" className="cursor-pointer hover:underline">Reviews</a>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <a href="#doctors" className="cursor-pointer hover:underline">Doctors</a>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <a href="#home" className="cursor-pointer hover:underline">Home</a>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 mt-0.5">•</span>
                  <a href="#about" className="cursor-pointer hover:underline">About Us</a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5">Opening Hours</h3>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between items-start gap-3">
                  <span className="font-semibold">Monday</span>
                  <span className="text-right">
                    10.00am - 2.00pm<br />
                    6.00pm - 8.30pm
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="font-semibold">Tuesday</span>
                  <span className="text-right">
                    10.00am - 2.00pm<br />
                    6.00pm - 8.30pm
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="font-semibold">Wednesday</span>
                  <span className="text-right">
                    10.00am - 2.00pm<br />
                    6.00pm - 8.30pm
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="font-semibold">Thursday</span>
                  <span className="text-right">
                    10.00am - 2.00pm<br />
                    6.00pm - 8.30pm
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="font-semibold">Friday</span>
                  <span className="text-right">
                    10.00am - 2.00pm<br />
                    6.00pm - 8.30pm
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-right">11.00am - 5.30pm</span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-right">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Section - Bottom Left */}
        
          {/* Bottom Bar with Read More */}
          <div className="">
            <div className="flex justify-end">
              <button className="text-white hover:text-gray-200 flex items-center gap-2 text-sm font-semibold transition-colors">
                Read More <span className="text-lg">»</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}