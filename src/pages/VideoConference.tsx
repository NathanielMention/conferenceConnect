import React, { useState } from 'react'
import VideoCall from "../VideoCall";

function VideoConference() {
  const [inCall, setInCall] = useState(false);
  return (
    <div style={{ height: "100%" }}>
    {inCall ? (
      <VideoCall setInCall={setInCall} />
    ) : (
      <button
        color="primary"
        onClick={() => setInCall(true)}
      >
        Join Call
      </button>
    )}
  </div>
  )
}

export default VideoConference