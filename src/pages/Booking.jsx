import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { facilities } from '../data/booking';
import { FacilityCard } from '../components/FacilityCard';

function Booking() {
  const [selectedSport, setSelectedSport] = useState('all');

  const sports = ['football', 'cricket', 'basketball', 'tennis'];
  
  const filteredFacilities = selectedSport === 'all' 
    ? facilities 
    : facilities.filter(f => f.sport === selectedSport);

  return (
    <div className="min-h-screen bg-black">
      <header className="bg-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-purple-600">Sports Facility Booking</h1>
        </div>
      </header>

      <main className="bg-black  mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-purple-600" />
            <h2 className="text-xl text-purple-600 font-semibold">Filter by Sport</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedSport('all')}
              className={`px-4 py-2 rounded-full ${
                selectedSport === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-white hover:bg-gray-800 '
              }`}
            >
              All Sports
            </button>
            {sports.map(sport => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-full capitalize font-bold ${
                  selectedSport === sport
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-white hover:bg-gray-800'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map(facility => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Booking;
