import React from "react";
import "./DetailRow.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
function Row(props) {
  return (
    <div className="detailRow">
      <VerifiedUserIcon fontSize="small" id="verify"/>
      <h3>{props.shop}</h3>
      <p id="address">{props.address}</p>
      <p id="number">Contact No. - {props.number}</p>
    </div>
  );
}

export default Row;
