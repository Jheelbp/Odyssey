import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Users,
  UserCircle2,
  Edit2,
  Trophy,
  Target,
  Calendar,
  Activity,
  TrendingUp,
  Medal,
  UserPlus,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

gsap.registerPlugin(ScrollTrigger);

const sportsData = [
  { month: "Jan", Tennis: 12, Running: 8, Swimming: 4 },
  { month: "Feb", Tennis: 15, Running: 10, Swimming: 6 },
  { month: "Mar", Tennis: 18, Running: 12, Swimming: 8 },
  { month: "Apr", Tennis: 16, Running: 15, Swimming: 10 },
  { month: "May", Tennis: 20, Running: 18, Swimming: 12 },
  { month: "Jun", Tennis: 22, Running: 20, Swimming: 15 },
];

function Profile() {
  // Create refs for animated elements
  const profileRef = useRef(null);
  const sportsProgressRef = useRef(null);
  const recentActivityRef = useRef(null);
  const achievementsRef = useRef(null);
  const connectRef = useRef(null);
  const bookingsRef = useRef(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Header/Profile Section */}
      <div
        ref={profileRef}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg">
                <Edit2 className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold">Alex Thompson</h1>
                  <p className="text-blue-100 font-medium">@alexthompson</p>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>

              <p className="mb-4 text-lg font-medium">
                🎾 <span className="font-bold">Tennis enthusiast</span> | 🏃‍♂️{" "}
                <span className="font-bold">Marathon runner</span> | 🏊‍♂️{" "}
                <span className="font-bold">Swimming amateur</span>
                <br />
                <span className="italic">
                  "Push your limits, embrace the journey"
                </span>
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-bold">2.5k</span> followers
                </div>
                <div className="flex items-center">
                  <UserCircle2 className="w-5 h-5 mr-2" />
                  <span className="font-bold">1.2k</span> following
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sports Progress & Achievements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Sports */}
            <div
              ref={sportsProgressRef}
              className="bg-gray-900 text-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-blue-600" />
                Sports Progress
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Tennis", "Running", "Swimming"].map((sport, index) => (
                  <div key={sport} className="border rounded-lg p-4">
                    <h3 className="font-bold text-lg">{sport}</h3>
                    <div className="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: ["80%", "65%", "45%"][index] }}
                      ></div>
                    </div>
                    <p className="text-sm font-medium text-gray-600 mt-2">
                      {["Advanced", "Intermediate", "Beginner"][index]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Monthly Progress Graph */}
              <div className="mt-8 h-[400px]">
                <h3 className="text-lg font-bold mb-4">
                  Monthly Training Hours
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={sportsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        padding: "8px",
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "20px" }} />
                    <Line
                      type="monotone"
                      dataKey="Tennis"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="Running"
                      stroke="#7c3aed"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="Swimming"
                      stroke="#60a5fa"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div
              ref={recentActivityRef}
              className="bg-gray-900 text-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-blue-600" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Won Tennis Tournament",
                    date: "2 days ago",
                    type: "achievement",
                  },
                  {
                    title: "Completed 10km Run",
                    date: "4 days ago",
                    type: "workout",
                  },
                  {
                    title: "Joined Swimming Class",
                    date: "1 week ago",
                    type: "event",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 border rounded-lg"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      {activity.type === "achievement" ? (
                        <Trophy className="w-5 h-5 text-blue-600" />
                      ) : activity.type === "workout" ? (
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Calendar className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div
              ref={achievementsRef}
              className="bg-gray-900 text-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Medal className="w-6 h-6 mr-2 text-blue-600" />
                Achievements
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "City Champion 🏆",
                  "Marathon Finisher 🏃‍♂️",
                  "Perfect Attendance ⭐",
                  "Team Captain 👑",
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg p-3 text-center text-sm font-bold"
                  >
                    {achievement}
                  </div>
                ))}
              </div>

              {/* Upcoming Achievements */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">Next Milestones</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "State Championship",
                      progress: 80,
                      requirement: "Win 2 more tournaments",
                    },
                    {
                      title: "Ultra Marathon",
                      progress: 60,
                      requirement: "Complete 30km training",
                    },
                    {
                      title: "Swimming Master",
                      progress: 40,
                      requirement: "Pass advanced test",
                    },
                  ].map((milestone, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold">{milestone.title}</span>
                        <span className="text-sm font-medium text-gray-600">
                          {milestone.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs font-medium text-gray-600 mt-2">
                        {milestone.requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div
              ref={connectRef}
              className="bg-gray-900 text-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <UserPlus className="w-6 h-6 mr-2 text-blue-600" />
                Connect With
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah Wilson",
                    sport: "Tennis Pro",
                    image:
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
                  },
                  {
                    name: "Mike Chen",
                    sport: "Running Coach",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
                  },
                  {
                    name: "Emma Davis",
                    sport: "Swim Instructor",
                    image:
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
                  },
                ].map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-bold">{person.name}</h3>
                        <p className="text-sm font-medium text-gray-600">
                          {person.sport}
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <UserPlus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Past Bookings Section - Full Width */}
        <div ref={bookingsRef} className="mt-8">
          <div className="bg-gray-900 text-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-blue-600" />
              Past Bookings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Tennis Court A",
                  date: "Mar 15, 2024",
                  time: "09:00 - 11:00",
                  status: "Completed",
                },
                {
                  title: "Swimming Pool",
                  date: "Mar 12, 2024",
                  time: "15:00 - 16:00",
                  status: "Completed",
                },
                {
                  title: "Running Track",
                  date: "Mar 10, 2024",
                  time: "07:00 - 08:00",
                  status: "Completed",
                },
                {
                  title: "Tennis Court B",
                  date: "Mar 8, 2024",
                  time: "14:00 - 16:00",
                  status: "Completed",
                },
                {
                  title: "Gym Session",
                  date: "Mar 5, 2024",
                  time: "18:00 - 19:30",
                  status: "Completed",
                },
                {
                  title: "Swimming Pool",
                  date: "Mar 3, 2024",
                  time: "10:00 - 11:00",
                  status: "Completed",
                },
              ].map((booking, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{booking.title}</h3>
                      <p className="text-sm font-medium text-gray-600">
                        {booking.date}
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        {booking.time}
                      </p>
                    </div>
                    <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
