import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="contact name"
        />
      </label>
      <br/>
      <label>
        <input
        type="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        //regex phone no. pattern
        pattern="[0][9][1-9][1-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9]"
        placeholder="Contact Phone (09##-###-###)"
        />
      </label>
      <br/>
      <label>
        <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Your email"
        ></>
      </label>
      <br/>
      <input type="submit" value="add contact" />
    </form>
  );
};
