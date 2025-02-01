import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Search } from 'lucide-react';
import { tutorials, categories } from '../data/tutsdata';

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = tutorials.filter((tutorial) => {
    return (
      (selectedCategory === 'All' || tutorial.sport === selectedCategory) &&
      (selectedDifficulty === 'All' || tutorial.difficulty === selectedDifficulty) &&
      (tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.sport.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative mb-12 rounded-xl overflow-hidden">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-zinc-800 to-gray-900 opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
      
      {/* Content container */}
      <div className="relative px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Learn Sports from the Pros
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl">
          Discover tutorials for every skill level.
          </p>
        </div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMiAwYTIgMiAwIDEgMCA0IDBhMiAyIDAgMSAwIC00IDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KPC9zdmc+')] opacity-20" />
    </section>

      
     
      {/* Search Bar */}
      <section className="mb-6 flex gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* Categories Filter */}
      <section id="categories" className="mb-6 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Difficulty Filter */}
      <section className="mb-6">
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </section>

      {/* Tutorials Grid */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">{selectedCategory} Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <Link to={`/video/${tutorial.id}`} key={tutorial.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  {/* Thumbnail */}
                  <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-48 object-cover" />

                  {/* Difficulty Badge */}
                  <div className="absolute top-2 left-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold text-white ${
                        tutorial.difficulty === 'Beginner'
                          ? 'bg-green-500'
                          : tutorial.difficulty === 'Intermediate'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {tutorial.difficulty}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>

                  {/* Overlay Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                {/* Tutorial Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600">{tutorial.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {tutorial.sport}
                    </span>
                    <span>{tutorial.views} views</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
