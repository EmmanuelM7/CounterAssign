import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    // Fill in code for increment here
    var countInc = count;
    countInc += 1;
    setCount(countInc);
  }
  function decrement() {
    // Fill in code for decrement here
    var countDec = count;
    countDec -= 1;
    setCount(countDec);

  }
  return (
    <div>
      <h2>Counter Assignment</h2>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
