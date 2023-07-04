import React from "react";

function AlertComponent(props) {
  return (
    props.alert && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
        >
          {/* <span aria-hidden="true">&times;</span> */}
        </button>
      </div>
    )
  );
}

export default AlertComponent;
