import React from 'react';
import { ShoppingCart, MapPin, Newspaper, BookOpen } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <ShoppingCart className="text-blue-600 w-12 h-12" />, 
            title: "Sports Accessories", 
            description: "Shop premium quality sports gear and accessories from top brands. Find everything you need - from footballs and cricket bats to training equipment and sportswear, all in one place with guaranteed authenticity."
        },
        {
            icon: <MapPin className="text-blue-600 w-12 h-12" />, 
            title: "Turf Booking", 
            description: "Book your perfect playing field instantly! Our hassle-free booking system lets you reserve high-quality turfs for football, cricket, and other sports. Choose from multiple locations and time slots that suit your schedule."
        },
        {
            icon: <Newspaper className="text-blue-600 w-12 h-12" />, 
            title: "Sports Updates", 
            description: "Stay ahead with real-time sports news and updates. Get comprehensive coverage of local and international sports events, transfer news, match analysis, and exclusive behind-the-scenes content from your favorite sports."
        },
        {
            icon: <BookOpen className="text-blue-600 w-12 h-12" />, 
            title: "Sports Tutorials", 
            description: "Master your game with expert-led tutorials and training tips. Access comprehensive guides for various sports, technique improvements, fitness routines, and professional advice to enhance your athletic performance."
        }
    ];

    return (
        <div className='bg-black'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 text-white bg-black">
            {features.map((feature, index) => (
                <div key={index} className="p-8 bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                    {feature.icon}
                    <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-base opacity-90 leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
        <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sports Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            A BIG OFFER FOR THIS SUMMER
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Terms and conditions applied
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-black text-white p-8">
            <div className="md:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Gym workout" 
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
            <div className="md:w-1/2 md:pl-10 text-center md:text-left">
                <h2 className="text-blue-600 text-4xl font-bold mb-4">LEARN MORE ABOUT US</h2>
                <p className="text-gray-300 mb-6">
                At SportsPro, we are passionate about bringing the world of sports closer to you. Whether you're an aspiring athlete, a weekend warrior, or a die-hard sports fan, we provide everything you need to stay ahead in the game.

From the latest sports news and expert analysis to high-quality gear and training tutorials, our platform is built for those who live and breathe sports. We also offer seamless turf booking so you can play anytime, anywhere.

Join us in celebrating the spirit of sports and take your game to the next level!
                </p>
            </div>
        </div>
        </div>
    );
}

export default Features;
