import { useState } from "react";

function Input(props) {
    const [value ,setValue]=useState()
    return (
      <>
        <label>{props.label}</label>
        <span> {value}</span>
        <input
          type={props.type}
          onChange={(event) => {
setValue(event.target.value)          }}
        />
      </>
    );
  }
  
  export default Input;
  