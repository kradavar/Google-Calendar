import React, { Component } from 'react'

export default function PrevNextDate(props) {
  return (
    <div className="prev-next" >
      <input name="prev" type="button" value={"prev"} onClick={props.onClickNavButton} />
      <input name="next" type="button" value={"next"} onClick={props.onClickNavButton} />
    </div>
  );
}
