import React, { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const nameHandler = (value) => {
    setName(value);
  };

  const passwordHandler = (value) => {
    setPassword(value);
  };

  const genderHandler = (value) => {
    setGender(value);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("form done");
      console.log({
        name,password,gender
      })
    }}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(event) => {
          nameHandler(event.target.value);
        }}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        placeholder="Your password"
        onChange={(event) => {
          passwordHandler(event.target.value);
        }}
      />
      <br />
      <label>Gender</label>
      <select onChange={(event) => {
        genderHandler(event.target.value);
      }}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
