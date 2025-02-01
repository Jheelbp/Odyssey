import React, { useState, useEffect, useRef } from "react";
import { MapPin, Star, Clock } from "lucide-react";
import { BookingModal } from "./BookingModal";
import gsap from "gsap";

export function FacilityCard({ facility }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.set(detailsRef.current, { y: "100%" }); // Initially hidden below
  }, []);

  const handleMouseEnter = () => {
    gsap.to(detailsRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(detailsRef.current, { y: "100%", duration: 0.5, ease: "power3.in" });
  };

  return (
    <>
      <div
        className="relative max-w-xs h-[350px] rounded-lg overflow-hidden bg-purple-600 bg-opacity-50 transition-transform duration-500 hover:scale-105"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={facility.imageUrl}
            alt={facility.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Details Section with GSAP Animation */}
        <div
          ref={detailsRef}
          className="absolute bottom-0 left-0 w-full bg-purple-800 bg-opacity-90 p-4 text-white"
        >
          <h3 className="text-lg font-bold uppercase relative w-max">
            {facility.name}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={16} className="text-cyan-300" />
            <span>{facility.address}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star size={16} className="text-cyan-300" />
            <span>{facility.rating} / 5</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock size={16} className="text-cyan-300" />
            <span>${facility.pricePerHour}/hour</span>
          </div>
          <button
            className="mt-2 bg-cyan-400 text-black py-1 px-3 rounded-md transition-all hover:bg-cyan-500"
            onClick={() => setIsModalOpen(true)}
          >
            Book Now
          </button>
        </div>
      </div>

      {isModalOpen && <BookingModal facility={facility} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
