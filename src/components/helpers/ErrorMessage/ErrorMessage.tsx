import * as React from "react";
import "./ErrorMessage.css";
import { Button } from "../../Button";

export const ErrorMessage = () => (
  <div className="overlay">
    <h3 className="overlay-message">
      Sorry, server error, please, try again later
    </h3>
    <Button loading={true} classes="" onClick={() => {}} value="Loading" />
  </div>
);
