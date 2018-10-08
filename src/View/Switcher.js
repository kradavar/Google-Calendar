import React from "react";

export default function Switcher(props) {

  return (
    <div className="switcher" >
      <input name="day" type="button" value={"day"} onClick={props.onChangeView} />
      <input name="week" type="button" value={"week"} onClick={props.onChangeView} />
      <input name="month" type="button" value={"month"} onClick={props.onChangeView} />
    </div>
  );
}
