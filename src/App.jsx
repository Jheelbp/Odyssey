import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Tutorials from "./components/Tutorials";
import VideoPlayer from "./components/VideoPlayer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Store from "./pages/Store";
import { ThemeProvider } from "./Context/ThemeContext";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile"
import Messages from "./pages/Messages"

function App() {
  return (
    <>
      <ThemeProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/store" element={<Store />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/Book" element={<Booking />} /> 
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
