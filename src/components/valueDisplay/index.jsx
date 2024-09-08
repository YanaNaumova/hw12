import React from "react";
import { useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const prevValueRef = useRef(value);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <>
      <div>Current Value:{value}</div>
      <div>Previous:{prevValueRef.current}</div>
    </>
  );
}

export default ValueDisplay;
