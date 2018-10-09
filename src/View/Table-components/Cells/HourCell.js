import React, { Component } from "react";

export default function HourCell({ hour }) {
  return <tr key={hour}>{hour}</tr>;
}
