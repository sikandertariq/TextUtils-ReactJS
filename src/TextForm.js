import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const HandlerofText = () => {
    const CapsText = text.toUpperCase();
    settext(CapsText);
  };

  return (
    <>
      <div className="mb-3">
        <label
          style={{ margin: "25px" }}
          for="exampleFormControlTextarea1"
          className="form-label"
        >
          {/* <h1>{props.Name}</h1> */}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={(e) => settext(e.target.value)}
        ></textarea>

        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={HandlerofText}
          >
            UpperCase
          </button>
        </div>
      </div>
      <div className="container my-3">
        {text.trim().length > 0 ? (
          <h4>
            {text.trim().split(/\s+/).filter(Boolean).length} words and{" "}
            {text.length} characters
          </h4>
        ) : (
          <h4>Please enter some text.</h4>
        )}
      </div>
    </>
  );
}
