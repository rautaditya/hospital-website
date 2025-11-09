import React, { useState } from 'react';
import { Calendar, Clock, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    consultant: 'Dr. Swati Kodur Patil',
    date: '',
    timing: '',
    datePersonal: '',
    phone: '',
    email: '',
    age: '',
    service: '',
    description: ''
  });

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Replace with your logo image */}
              <img src="../public/company data/ent website/ent logo.png" alt="ENTCare Clinic" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-purple-600 font-medium">Doctors</a>
              <a href="#reviews" className="text-gray-700 hover:text-purple-600 font-medium">Reviews</a>
              <a href="#appointment" className="text-gray-700 hover:text-purple-600 font-medium">Appointment</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-800 via-blue-700 to-blue-600 mt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-transparent to-yellow-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white z-10">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Healing Ears, Noses<br />& Throats with Heart.
              </h1>
              <p className="text-xl lg:text-2xl text-yellow-400 mb-8">
                Trusted ENT care for your entire family
              </p>
              <button className="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Book An Appointment
              </button>
            </div>
            
            <div className="relative z-10">
              {/* Replace with your consultation image */}
              <img src="/public/company data/ent website/from bg.png" alt="Doctor Consultation" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-400 to-transparent transform skew-x-12"></div>
      </section>

      {/* Appointment Form Section */}
<section
  id="appointment"
  className="min-h-[90vh] bg-cover bg-center flex items-center"
  style={{
    backgroundImage: "url('/public/company data/ent website/From BG.png')",
  }}
>
  <div className="max-w-7xl w-full mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left Side – Empty */}
      <div></div>

      {/* Right Side – Appointment Form */}
      <div className="p-8 rounded-xl">

        <div className="space-y-6">

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
              name="datePersonal"
              placeholder="Name"
              value={formData.datePersonal}
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
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-700 to-blue-600 text-white font-semibold"
          >
            SUBMIT
          </button>

        </div>
      </div>

    </div>
  </div>
</section>



    <section
  id="services"
  className="py-16 bg-cover bg-center bg-no-repeat"
  style={{
    // Correct path: do NOT include /public
    backgroundImage: "url('/public/company data/ent website/Banner 3.png')",
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-cyan-500 mb-4">
        Specialities ENT Care Services
      </h2>

      <p className="text-gray-800 max-w-4xl mx-auto text-lg leading-relaxed">
        Our ENT Clinic offers comprehensive evaluation, diagnosis,<br />
        and treatment of conditions affecting the ear, nose, throat, head, and neck.<br />
        We provide both medical and surgical care using state-of-the-art technology<br />
        and evidence-based practices.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-12">

      {/* Otology */}
      <div className="text-center">
        <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <img
            src="/public/company data/ent website/Otology.png"
            alt="Otology"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-3">
          Otology / Neurotology<br />(Ear Services)
        </h3>
        <p className="text-gray-700 max-w-xs mx-auto">
          Otology/Neurotology specializes in diagnosing and treating<br />
          ear disorders, hearing loss and balance-related conditions.
        </p>
      </div>

      {/* Rhinology */}
      <div className="text-center">
        <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <img
            src="/public/company data/ent website/Rhinology.png"
            alt="Rhinology"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-3">
          Rhinology (Nose & Sinus Services)
        </h3>
        <p className="text-gray-700 max-w-xs mx-auto">
          Rhinology focuses on diagnosing and treating nasal, sinus and<br />
          skull base disorders for improved breathing.
        </p>
      </div>

      {/* Laryngology */}
      <div className="text-center">
        <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <img
            src="/public/company data/ent website/Laryngology.png"
            alt="Laryngology"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-3">
          Laryngology (Throat & Voice Services)
        </h3>
        <p className="text-gray-700 max-w-xs mx-auto">
          Laryngology treats voice, throat and swallowing disorders<br />
          to restore speech and improve vocal health.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-sm mb-2">
                No 701/702, 7th floor, WESTWOOD ESTATES,<br />
                Kaspatle Wasti, Opposite Mart Yert Tropez Road,<br />
                Socety, Wakod, Pimpri-Chinchwad, Maharashtra 411-057
              </p>
              <a href="#" className="text-yellow-400 font-semibold hover:underline">FIND OUR LOCATION</a>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>• Sleep Medicine</li>
                <li>• Allergy Diagnosis & Immunotherapy</li>
                <li>• Vertigo</li>
                <li>• Audiology & Hearing Services</li>
                <li>• Pediatric ENT</li>
                <li>• Head & Neck Surgery</li>
                <li>• Laryngology (Throat & Voice Services)</li>
                <li>• Rhinology (Nose & Sinus Services)</li>
                <li>• Otology / Neurotology (Ear Services)</li>
              </ul>
            </div>

            {/* Hyperlinks */}
            <div>
              <h3 className="text-xl font-bold mb-4">Hyperlinks</h3>
              <ul className="space-y-2 text-sm">
                <li>• Contact</li>
                <li>• Appointment</li>
                <li>• Reviews</li>
                <li>• Doctors</li>
                <li>• Home</li>
                <li>• About Us</li>
              </ul>
              <div className="mt-6">
                <h4 className="font-bold mb-2">Appointment</h4>
                <p className="text-sm mb-2">Make your appointment through online now.</p>
                <a href="#" className="text-yellow-400 font-semibold hover:underline">BOOK AN APPOINTMENT</a>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>10.00am - 2.00pm<br />6.00pm - 8.30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>10.00am - 2.00pm<br />6.00pm - 8.30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>10.00am - 2.00pm<br />6.00pm - 8.30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>10.00am - 2.00pm<br />6.00pm - 8.30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>10.00am - 2.00pm<br />6.00pm - 8.30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>11.00am - 5.30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-blue-700 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/api/placeholder/120/50" alt="ENTCare Clinic" className="h-12" />
            </div>
            <button className="flex items-center text-sm bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors">
              Read More <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}