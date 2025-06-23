import React from "react";
import AvailableFlights from "../components/AvailableFlights";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-2xl font-bold">
        FlyGlobe
      </header>
      <main className="p-6">
        <AvailableFlights />
      </main>
      <footer className="bg-gray-200 text-center p-4 mt-8">
        © 2025 FlyGlobe. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
