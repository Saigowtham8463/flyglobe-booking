// pages/Confirmation.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const { flight, form } = state || {};

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
      <p>Thanks, <strong>{form?.name}</strong>! Your flight with <strong>{flight?.airline}</strong> is booked.</p>
      <p className="mt-2">A confirmation email has been sent to <strong>{form?.email}</strong>.</p>
      <div className="mt-4 border rounded p-4 text-left">
        <p><strong>From:</strong> {flight?.from}</p>
        <p><strong>To:</strong> {flight?.to}</p>
        <p><strong>Departure:</strong> {flight?.departureTime}</p>
        <p><strong>Arrival:</strong> {flight?.arrivalTime}</p>
        <p><strong>Price:</strong> ${flight?.price}</p>
      </div>
    </div>
  );
};

export default Confirmation;
