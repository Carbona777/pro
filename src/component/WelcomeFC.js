import { useState } from "react";

function WelcomeFC(props) {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Welcome, {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <h4>{counter}</h4>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>
        Count+
      </button>
    </>
  );
}

export default WelcomeFC;
