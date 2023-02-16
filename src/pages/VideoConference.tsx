import { addDoc } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import CreateMeetingButtons from "../components/FormComponents/CreateMeetingButtons";
import MeetingDateField from "../components/FormComponents/MeetingDateField";
import MeetingNameField from "../components/FormComponents/MeetingNameField";
import MeetingUserField from "../components/FormComponents/MeetingUserField";

import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";
import useToast from "../hooks/useToast";
import { meetingsRef } from "../utils/FirebaseConfig";
import { generateMeetingID } from "../utils/generateMeetingId";
import { FieldErrorType, UserType } from "../utils/types";

function VideoConference() {
  useAuth();
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
        <CreateMeetingButtons createMeeting={function (): {} {
            throw new Error("Function not implemented.");
          } }/>
      </form>
    </div>

  </div>
  )
}

export default VideoConference