// pages/Booking.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const flight = state?.flight;

  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { flight, form } });
  };

  if (!flight) return <p className="p-8">No flight selected.</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Booking for {flight.airline}</h2>
      <div className="mb-4 p-4 border rounded">
        <p><strong>From:</strong> {flight.from} — {flight.departureTime}</p>
        <p><strong>To:</strong> {flight.to} — {flight.arrivalTime}</p>
        <p><strong>Duration:</strong> {flight.duration}</p>
        <p><strong>Price:</strong> ${flight.price}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
