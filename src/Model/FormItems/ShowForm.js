import React from "react";
import ShowInput from "./ShowInput";

const ShowForm = ({ start, end }) => {
  return (
    <form>
      <ShowInput label="Start: " data={start} />
      <ShowInput label="End: " data={end} />
    </form>
  );
};

export default ShowForm;
