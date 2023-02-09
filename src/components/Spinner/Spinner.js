import React from "react";
import { Bars } from "react-loader-spinner";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner">
      <Bars color="#113f7d" height={50} width={200} className="m-5" />
    </div>
  );
}

export default Spinner;