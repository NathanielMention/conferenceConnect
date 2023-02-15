import React from 'react'
import { useNavigate } from 'react-router-dom';

function CreateMeetingButtons({
    createMeeting,
    isEdit = false,
    closeFlyout,
  }: {
    createMeeting: () => {};
    isEdit?: boolean;
    closeFlyout?: () => {};
  }) {
    const navigate = useNavigate()
  return (
    <>
    <button onClick={() => (isEdit ? closeFlyout!() : navigate("/"))}>Cancel</button>
    <button type="submit" onClick={createMeeting}>{isEdit ? "Edit Meeting" : "Create Meeting"}</button>
    </>

  )
}

export default CreateMeetingButtons