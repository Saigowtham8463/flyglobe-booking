// components/AvailableFlights.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const flights = [
  {
    id: 1,
    airline: "IndiGo",
    price: 250,
    departureTime: "09:00 AM",
    arrivalTime: "11:30 AM",
    duration: "2h 30m",
    from: "HYD",
    to: "DEL",
  },
  {
    id: 2,
    airline: "Air India",
    price: 310,
    departureTime: "10:00 AM",
    arrivalTime: "12:45 PM",
    duration: "2h 45m",
    from: "HYD",
    to: "DEL",
  },
  {
    id: 3,
    airline: "SpiceJet",
    price: 275,
    departureTime: "11:15 AM",
    arrivalTime: "01:45 PM",
    duration: "2h 30m",
    from: "HYD",
    to: "DEL",
  },
];

const AvailableFlights = () => {
  const navigate = useNavigate();

  const handleSelect = (flight) => {
    navigate("/booking", { state: { flight } });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Flights</h2>
      <div className="space-y-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            onClick={() => handleSelect(flight)}
            className="border p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{flight.airline}</h3>
              <span className="text-green-600 font-bold">${flight.price}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <div>
                <p>{flight.departureTime}</p>
                <p className="font-medium">{flight.from}</p>
              </div>
              <div className="text-center">
                <p>{flight.duration}</p>
                <p>→</p>
              </div>
              <div>
                <p>{flight.arrivalTime}</p>
                <p className="font-medium">{flight.to}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFlights;
