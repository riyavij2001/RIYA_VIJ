import React from "react";

const Delete = (props) => {
  return (
    <button className=" btn btn-outline-danger" {...props.other}>
      {props.buttonName}
    </button>
  );
};

export default Delete;
