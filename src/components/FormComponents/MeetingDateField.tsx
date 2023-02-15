import React, {useState} from 'react'
import Moment from 'moment';

function MeetingDateField() {
    const [date, setDate] = useState(Moment().format("MM/DD/YYYY"));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dateValue = e.target.value;
      setDate(dateValue);
    };
  
    return (
      <input
        type="text"
        value={date}
        onChange={(e) => handleChange(e)}
      />
    );
  };

export default MeetingDateField