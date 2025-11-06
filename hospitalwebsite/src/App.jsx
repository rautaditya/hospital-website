import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    consultant: 'Dr. Swati Kodur Patil',
    selectDate: '',
    selectTiming: '',
    dob: '',
    phone: '',
    email: '',
    age: '',
    service: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment request submitted!');
  };

  const services = [
    {
      title: 'Otology / Neurotology (Ear Services)',
      description: 'Otology/Neurotology specializes in diagnosing and treating ear disorders, hearing loss and balance-related conditions',
      icon: '👂'
    },
    {
      title: 'Rhinology (Nose & Sinus Services)',
      description: 'Rhinology focuses on diagnosing and treating nasal, sinus and skull base disorders for improved breathing.',
      icon: '👃'
    },
    {
      title: 'Laryngology (Throat & Voice Services)',
      description: 'Laryngology treats voice, throat and swallowing disorders to restore speech and improve vocal health.',
      icon: '🗣️'
    }
  ];

  const openingHours = [
    { day: 'Monday', hours: '10:00am - 2:00pm\n6:00pm - 8:30pm' },
    { day: 'Tuesday', hours: '10:00am - 2:00pm\n6:00pm - 8:30pm' },
    { day: 'Wednesday', hours: '10:00am - 2:00pm\n6:00pm - 8:30pm' },
    { day: 'Thursday', hours: '10:00am - 2:00pm\n6:00pm - 8:30pm' },
    { day: 'Friday', hours: '10:00am - 2:00pm\n6:00pm - 8:30pm' },
    { day: 'Saturday', hours: '11:00am - 5:30pm' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const servicesList = [
    'Sleep Medicine',
    'Allergy Diagnosis & Immunotherapy',
    'Vertigo',
    'Audiology & Hearing Services',
    'Pediatric ENT',
    'Head & Neck Surgery',
    'Laryngology (Throat & Voice Services)',
    'Rhinology (Nose & Sinus Services)',
    'Otology / Neurotology (Ear Services)'
  ];

  const hyperlinks = [
    'Home',
    'Appointment',
    'Services',
    'Doctors',
    'Reviews',
    'Home',
    'About'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">ENTCare Clinic</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Doctors', 'Reviews', 'Appointment', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Services', 'Doctors', 'Reviews', 'Appointment', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 via-purple-700 to-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Healing Ears, Noses<br />& Throats with Heart.
              </h1>
              <p className="text-yellow-300 text-xl mb-6">Trusted ENT care for your entire family</p>
              <button className="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Book An Appointment
              </button>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-xl p-4">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop"
                  alt="Doctor consultation"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor & Appointment Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Doctor Profile */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&h=600&fit=crop"
                alt="Dr. Swati Kodur Patil"
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=100&h=100&fit=crop"
                  alt="Ear examination"
                  className="w-24 h-24 rounded-lg border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Consultant</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="consultant"
                  value={formData.consultant}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  readOnly
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Select Date</label>
                    <input
                      type="text"
                      name="selectDate"
                      placeholder="mm/dd/yyyy"
                      value={formData.selectDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Select Timing</label>
                    <input
                      type="text"
                      name="selectTiming"
                      placeholder="Timing"
                      value={formData.selectTiming}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-6">Personal Info</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="dob"
                    placeholder="mm/dd/yyyy"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="service"
                    placeholder="Service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-purple-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-800 transition"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Specialities ENT Care Services
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Our ENT Clinic offers comprehensive evaluation, diagnosis,
          </p>
          <p className="text-center text-gray-600 mb-8">
            and treatment of conditions affecting the ear, nose, throat, head, and neck.
          </p>
          <p className="text-center text-gray-700 mb-12">
            We provide both medical and surgical care using state-of-the-art technology and evidence-based practices.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Location */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-sm mb-2">No.701/702, 7th floor, WESTWOOD ESTATES,</p>
              <p className="text-sm mb-2">next to Parinee Adney, Shivaji Nagar Road,</p>
              <p className="text-sm mb-4">Society, Wakad, Pimpri-Chinchwad, Maharashtra 411-057</p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
                FIND OUR LOCATION
              </button>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                {servicesList.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hyperlinks */}
            <div>
              <h3 className="text-xl font-bold mb-4">Hyperlinks</h3>
              <ul className="space-y-2 text-sm">
                {hyperlinks.map((link, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-3 text-sm">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-semibold">{schedule.day}</span>
                    <span className="text-right whitespace-pre-line">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointment Button */}
          <div className="mt-8 text-center">
            <div className="bg-blue-800 inline-block px-6 py-3 rounded-md">
              <p className="text-sm mb-2">Appointment</p>
              <p className="text-xs">Make your appointment through online now.</p>
              <button className="mt-2 bg-white text-blue-900 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-blue-700 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
              </div>
              <span className="ml-2 text-lg font-bold">ENTCare Clinic</span>
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm hover:bg-purple-700 transition flex items-center mx-auto">
              Read More
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}