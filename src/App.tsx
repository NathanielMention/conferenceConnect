import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateMeeting from "./pages/CreateMeeting";
import Dashboard from "./pages/Dashboard";
import JoinMeeting from "./pages/JoinMeeting";
import Login from "./pages/Login";
import Meeting from "./pages/Meeting";
import MyMeetings from "./pages/MyMeetings";
import OneOnOneMeeting from "./pages/OneOnOneMeeting";
import VideoConference from "./pages/VideoConference";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateMeeting />} />
      <Route path="/create1on1" element={<OneOnOneMeeting />} />
      <Route path="/videoconference" element={<VideoConference />} />
      <Route path="/mymeetings" element={<MyMeetings />} />
      <Route path="/join/:id" element={<JoinMeeting />} />
      <Route path="/meetings" element={<Meeting />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
