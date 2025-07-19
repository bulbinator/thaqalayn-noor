import { useState } from "react";

function Chain({ chain }) {
  return (
    <>
      {chain.map((item, index) => (
        <span key={index}>{item.title + " "}</span>
      ))}
    </>
  );
}

export default Chain;
