import React from "react";

const FlightCard = ({ flight, isSelected, onSelect }) => {
  return (
    <div
      className={`border rounded-2xl p-4 shadow-sm transition hover:shadow-md cursor-pointer ${
        isSelected ? "border-blue-600 bg-blue-50" : "border-gray-200"
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{flight.airline}</h3>
        <span className="text-lg font-bold text-green-600">${flight.price}</span>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
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
      <button
        className="mt-4 w-full py-2 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 transition"
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
};

export default FlightCard;
