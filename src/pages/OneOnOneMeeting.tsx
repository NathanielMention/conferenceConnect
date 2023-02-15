import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import CreateMeetingButtons from '../components/FormComponents/CreateMeetingButtons';
import MeetingDateField from '../components/FormComponents/MeetingDateField';
import MeetingNameField from '../components/FormComponents/MeetingNameField';
import MeetingUserField from '../components/FormComponents/MeetingUserField';
import Header from '../components/Header'
import useAuth from '../hooks/useAuth';
import { UserType } from '../utils/types';

function OneOnOneMeeting() {
  useAuth();
  const uid = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.uid);
  const navigate = useNavigate();

  const [meetingName, setMeetingName] = useState("");
  const [selectedUser, setSelectedUser] = useState<Array<UserType>>([]);
  const createMeeting = async () => {
    
  }
  return (
    <div>
      <Header/>
      <div>
        <form>
          <MeetingNameField label={'Meeting Name'} isInvalid={false} error={[]} placeholder={'Meeting Name'} value={''} setMeetingName={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          } }/>
          <MeetingUserField label={'Invite User'} isInvalid={false} error={[]} options={undefined} onChange={undefined} selectedOptions={undefined} isClearable={false} placeholder={'Select a User'}/>
          <MeetingDateField/>
          <button>Create Meeting</button>
        </form>
      </div>

    </div>
  )
}

export default OneOnOneMeeting