import React from "react";
import NewsHead from "../assets/NewsHeader.png";
import Mbappe from "../assets/Mbappe.png";
import cricket from "../assets/cricket.png";
import basketball from "../assets/basketball.png";

const NewsHeader = () => {
  const headlines = [
    {
      title: "🚀 SpaceX Launches New Mission to Mars",
      description:
        "Elon Musk's SpaceX has successfully launched its latest mission to Mars, carrying advanced research equipment and prototypes for future human habitats.",
      readTime: "6 MIN READ",
    },
    {
      title: "📉 Stock Market Sees Sharp Decline Amid Uncertainty",
      description:
        "Global markets suffered a major setback today as fears of economic slowdown and inflation triggered a wave of sell-offs across major indices.",
      readTime: "5 MIN READ",
    },
    {
      title: "⚽ World Cup 2026 Groups Announced",
      description:
        "FIFA has officially revealed the group-stage matchups for the 2026 World Cup, promising thrilling clashes between soccer's biggest stars and nations.",
      readTime: "7 MIN READ",
    },
    {
      title: "🌍 Climate Summit Brings New Global Agreements",
      description:
        "World leaders convened at the UN Climate Summit to sign a historic agreement aimed at reducing carbon emissions and tackling climate change.",
      readTime: "8 MIN READ",
    },
  ];

  const matchScores = [
    { match: "Barcelona vs Real Madrid", score: "2 - 1", status: "FT" },
    { match: "India vs Australia", score: "250/6 - 245/8", status: "LIVE" },
    { match: "Lakers vs Bulls", score: "98 - 102", status: "Q4" },
  ];

  return (
    <div className="bg-black min-h-screen">
       <section className="relative mb-12 rounded-xl overflow-hidden">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-zinc-800 to-gray-900 opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
      
      {/* Content container */}
      <div className="relative px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Latest News
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl">
          Stay updated with the latest trends.
          </p>
        </div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMiAwYTIgMiAwIDEgMCA0IDBhMiAyIDAgMSAwIC00IDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KPC9zdmc+')] opacity-20" />
    </section>
      <div className="h-auto md:h-20 mx-4 md:mx-8 bg-gray-800 flex flex-wrap justify-center md:justify-around items-center text-white text-xs md:text-sm font-semibold p-2 md:p-0 gap-2 md:gap-0">
        {[
          "Football", "Cricket", "World Cup", "Basketball", "Tennis", "Pickle Ball", "Golf", "News", "Upcoming", "FIFA", "IPL", "Messi", "Badminton", "More",
        ].map((item, index) => (
          <span key={index} className="px-2 md:px-0">{item}</span>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto mt-10 px-4 md:px-0">
        <img src={NewsHead} alt="Football Player" className="w-full h-[300px] md:h-[500px] object-cover rounded-lg" />
        <div className="absolute top-5 left-5 md:top-10 md:left-10 bg-white p-2 md:p-4 shadow-lg max-w-xs md:max-w-sm">
          <h2 className="text-black font-bold text-sm md:text-lg">A Return From Scandal, but With Little Said About the Scandal</h2>
          <p className="text-gray-700 text-xs md:text-sm mt-2">
            When Deshaun Watson's suspension ended, the N.F.L.'s broadcast partners focused mainly on his return, not on his behavior or on the women who accused him.
          </p>
          <button className="mt-2 md:mt-4 text-blue-600 font-semibold">Continue Reading</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 text-white">
        {headlines.map((news, index) => (
          <div key={index} className="p-4 bg-black rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{news.title}</h2>
            <p className="text-sm mt-2 opacity-80">{news.description}</p>
            <span className="text-xs mt-2 block opacity-60">{news.readTime}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#1a001a] text-white">
        <div className="relative col-span-1 bg-black rounded-lg p-6">
          <img src={Mbappe} alt="Kylian Mbappé" className="w-full object-cover rounded-lg" />
          <h2 className="text-lg md:text-xl font-bold">Katar · World Cup · France · 2022</h2>
          <p>Matches: <span className="font-semibold">4</span></p>
          <p>Goals: <span className="font-semibold">5</span></p>
          <p>Assists: <span className="font-semibold">2</span></p>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ title: "Kovacic: Aggression and possession the keys to unlock...", image: cricket },
            { title: "Vinicius Junior: I'll leave stopping Modric to Casemiro", image: basketball },
            { title: "Eight teams, eight reasons to believe", image: NewsHead },
            { title: "Alvarez: Guardiola pointed out that Argentina have a good team", image: NewsHead }].map((article, index) => (
            <div key={index} className="bg-[#2a002a] rounded-lg p-4">
              <img src={article.image} alt={article.title} className="rounded-lg mb-2" />
              <p className="text-sm">{article.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-white text-2xl font-bold mb-4">Live Scores</h2>
        <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-3 text-left text-xs md:text-sm">Match</th>
              <th className="p-3 text-center text-xs md:text-sm">Score</th>
              <th className="p-3 text-right text-xs md:text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {matchScores.map((match, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-3 text-xs md:text-sm">{match.match}</td>
                <td className="p-3 text-center text-xs md:text-sm">{match.score}</td>
                <td className="p-3 text-right text-xs md:text-sm">{match.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsHeader;
