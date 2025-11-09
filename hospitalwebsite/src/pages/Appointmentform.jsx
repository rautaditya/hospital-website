import React, { useState } from "react";
import bgImg from "../../public/company data/ent website/From BG.png"; // your background image

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    consultant: "Dr. Swati Kodur Patil",
    date: "",
    timing: "",
    dob: "",
    phone: "",
    email: "",
    age: "",
    service: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Appointment request submitted successfully!");
  };

  return (
    <section
      className="min-h[80vh] w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-6xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE IMAGE (Doctor photo or screenshot) */}
        <div className="flex justify-center items-center">
          <img
            src="/company data/ent website/webanner banner.png"
            alt="Doctor"
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Consultant
          </h2>

          <input
            type="text"
            name="consultant"
            value={formData.consultant}
            readOnly
            className="w-full mb-6 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100"
          />

          {/* Date + Timing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Select Date</h3>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Select Timing</h3>
              <input
                type="time"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Personal Info
          </h2>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="md:col-span-3 w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              min="1"
              max="120"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Service"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-3 rounded-full shadow-md"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
