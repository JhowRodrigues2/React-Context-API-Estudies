import React from "react";
import { useCount } from "../../context/CountContext";
const Count = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <span>
        <p> Count: </p>
        <b>{count}</b>
      </span>
      <button onClick={() => setCount(count + 1)}> INCREASE </button>
    </div>
  );
};

export default Count;
