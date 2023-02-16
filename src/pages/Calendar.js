import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import useAuth from '../hooks/useAuth'
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker'
import { firebaseDB } from "../utils/FirebaseConfig.ts";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Header from "../components/Header";
import '../styles/calendar.css'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const event = [
    {
        title: "Big Meeting",
        // allday: false,
        start: new Date(2023, 1, 5, 7, 0, 0),
        end: new Date(2023, 1, 5,  10, 30, 0),
    },
    {
        title: "Vacation",
        start: new Date(2023, 2, 10),
        end: new Date(2023, 2, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 2, 20),
        end: new Date(2023, 2, 23),
    },
];

function CalendarView() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(event);
    const [newTitle, setNewTitle] = useState("");
    const [newStart, setNewStart] = useState("");
    const [newEnd, setNewEnd] = useState("");
    const usersCollectionRef = collection(firebaseDB, "events");

    
    
    const [startTime, setStartTime] = useState('10:00')
    const [endTime, setEndTime] = useState('11:00')

    const handleStartTimeChange = (value) => {
        setStartTime(value)
    }

    const handleEndTimeChange = (value) => {
        setEndTime(value)
    }

    // function handleAddEvent() {
    //     // setNewEvent({...newEvent, title: newTitle})
    //     const createTask = async () => {
    //         await addDoc(usersCollectionRef, { event: newEvent })
    //     };
    //     setAllEvents([...allEvents, newEvent]);
        
        
    // }
    useAuth()
    const createTask = async () => {
        await addDoc(usersCollectionRef, { event: newEvent })
        setAllEvents([...allEvents, newEvent]);
    };
    return (
     <> 
     <Header/>
        <div className="CalendarView">
            
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} 
                    value={newEvent.title} 
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
                    // onChange={(e) => setNewTitle(e.target.value )} 
                />

                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} 
                    selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} 
                />
                <DatePicker placeholderText="End Date" style={{ marginRight: "10px" }} 
                    selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                
                <p>Start Time</p>
                <TimePicker placeholderText = "Start Time" value={startTime} onChange={handleStartTimeChange} />
                <p>End Time</p>
                <TimePicker value={endTime} onChange={handleEndTimeChange} />
                <button style={{ marginTop: "10px" }} onClick={ createTask}>
                    Add Event
                </button>
            </div>
            <Calendar 
                localizer={localizer} 
                events={allEvents} 
                startAccessor="start" 
                endAccessor="end" 
                style={{ height: 500, margin: "50px" }} 
            />
        </div>
        </>  
    );
}

export default CalendarView;