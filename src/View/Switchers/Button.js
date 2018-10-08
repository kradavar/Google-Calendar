import React from "react";

export default function Button({ value, onClick }) {
  return <input name={value} type="button" value={value} onClick={onClick} />;
}
