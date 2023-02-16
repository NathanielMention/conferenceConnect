import React, { useState } from 'react'
import Header from '../components/Header';
import { Button } from "@material-ui/core";
import VideoCall from "../VideoCall";
import useAuth from '../hooks/useAuth';

function VideoConference() {
  const [inCall, setInCall] = useState(false);
  useAuth()
  return (
    <>
    <Header/>
    <div className="App" style={{ height: "100%" }}>
    {inCall ? (
      <VideoCall setInCall={setInCall} />
    ) : (
      <Button
      className='join-button'
      variant="contained"
      color="primary"
      onClick={() => setInCall(true)}
    >
        Join Call
      </Button>
    )}
  </div>
  </>
  )
}

export default VideoConference