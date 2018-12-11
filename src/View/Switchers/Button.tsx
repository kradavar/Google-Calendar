import * as React from "react";
import Loader from "react-loader-spinner";
import * as classNames from "classnames";
import "../../Styles/Button.css";

export const Button: React.SFC<{
  classes: string;
  value: string;
  onClick: () => void;
  type?: string;
  loading?: boolean;
}> = ({ classes, value, onClick, type = "button", loading = false }) =>
  loading ? (
    <Loader type="Bars" />
  ) : (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={classNames(["btn", "bnt-font", classes])}
    />
  );
