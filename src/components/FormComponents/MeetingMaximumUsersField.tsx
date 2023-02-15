import React from 'react'

function MeetingMaximumUsersField({
    value,
    setSize,
  }: {
    value: number;
    setSize: React.Dispatch<React.SetStateAction<number>>;
  }) {
    return (
      
        <input
          min={1}
          max={50}
          placeholder="Maximum People"
          value={value}
          onChange={(e) => {
            if (!e.target.value.length || parseInt(e.target.value) === 0)
              setSize(1);
            else if (parseInt(e.target.value) > 50) setSize(50);
            else setSize(parseInt(e.target.value));
          }}
        />
      
    );
  }
  
  export default MeetingMaximumUsersField;