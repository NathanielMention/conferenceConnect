import React from 'react'

function MeetingUserField({
  label,
  isInvalid,
  error,
  options,
  onChange,
  selectedOptions,
  singleSelection = false,
  isClearable,
  placeholder,
}: {
  label: string;
  isInvalid: boolean;
  error: Array<string>;
  options: any;
  onChange: any;
  selectedOptions: any;
  singleSelection?: { asPlainText: boolean } | boolean;
  isClearable: boolean;
  placeholder: string;
}) {
  return (
    <form>
      <input             
              onChange={onChange}
              placeholder={placeholder}         
      />
    </form>
    
  )
}

export default MeetingUserField