import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import JoinMeeting from "./pages/JoinMeeting";
import Login from "./pages/Login";
import VideoConference from "./pages/VideoConference";
import CalendarView from "./pages/Calendar";


function App() {
  return (
    
    <Routes>
      {/* <div className="App"><CalendarView/></div> */}
      <Route path="/login" element={<Login />} />
      <Route path="/videoconference" element={<VideoConference />} />
      <Route path="/mymeetings" element={<CalendarView />} />
      <Route path="/join/:id" element={<JoinMeeting />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
      
    </Routes>
    
  );
}

export default App;
