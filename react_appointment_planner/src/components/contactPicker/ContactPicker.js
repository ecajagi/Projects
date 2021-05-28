import React from "react";
//implement ContactPicker as a stateless component that renders a drop-down list of all contact names.
//COntactPicker Requirements: Receive 2 props: Array of contacts AND A callback function to handle when the onChange event is triggered
//Render a select element with the onChange attribute set to the callback passed in via props
//Have a default first option element that indicates no contact is selected

export const ContactPicker = ({name, onChange, contacts}) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} selected="selected">No Contacts Selected</option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
