import React from "react";
import { Button } from "./Button";
import { connect } from "react-redux";
import { SIGN } from "../../constants/constants";

const SignMenu = ({ handleOpen, isSigned }) => {
  return (
    <React.Fragment>
      <div className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle sign-link"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sign
        </a>
        <div
          className="dropdown-menu drop-width"
          aria-labelledby="navbarDropdownMenuLink"
        >
          {isSigned ? (
            <Button
              value={SIGN.OUT}
              classes="dropdown-item drop-button"
              onClick={handleOpen}
            />
          ) : (
            <React.Fragment>
              <Button
                value={SIGN.IN}
                classes="dropdown-item drop-button"
                onClick={handleOpen}
              />
              <Button
                value={SIGN.UP}
                classes="dropdown-item drop-button"
                onClick={handleOpen}
              />
            </React.Fragment>
          )}
        </div>
      </div>
      {}
    </React.Fragment>
  );
};

const userSelector = state => state.user.isSigned;

const mapStateToProps = state => {
  return { isSigned: userSelector(state) };
};

export default connect(mapStateToProps)(SignMenu);
