import React from "react";
import { useCount } from "../../context/CountContext";

const Mirror = () => {
  const { count } = useCount();

  return (
    <span>
      <p>Mirror:</p>
      <b> {count}</b>
    </span>
  );
};

export default Mirror;
