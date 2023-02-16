import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'

function CreateMeeting() {
    useAuth()
    const navigate = useNavigate()
  return (
    <div>
        <Header/>
        <div onClick={() => navigate("/videoconference")}>Create meeting</div>
    </div>
  )
}

export default CreateMeeting