import React, { Fragment } from "react";
import spinnerImg from "../../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinnerImg}
        alt="....Loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
