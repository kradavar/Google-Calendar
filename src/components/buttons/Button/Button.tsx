import * as React from "react";
import Loader from "react-loader-spinner";
import * as classNames from "classnames";
import "./Button.css";

export const Button: React.SFC<{
  classes: string;
  value: string;
  onClick: () => void;
  type?: string;
  loading?: boolean;
  disabled?: boolean;
}> = ({
  classes,
  value,
  onClick,
  type = "button",
  loading = false,
  disabled = false
}) =>
  loading ? (
    <div className="loading">
      <Loader type="Oval" height={30} width={30} color="#255831" />
    </div>
  ) : (
    <input
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={classNames(["btn", "bnt-font", classes])}
    />
  );
