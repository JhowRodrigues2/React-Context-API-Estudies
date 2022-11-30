import React from "react";
import { useCount } from "../../context/CountContext";

const Mirror = () => {
  const { count } = useCount();

  return (
    <div className="Mirror">
      <span>
        <p>Mirror:</p>
        <b> {count}</b>
      </span>
    </div>
  );
};

export default Mirror;
