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
          {props.Name}
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
            Submit
          </button>
        </div>
      </div>
      <div  className="container my-3">
        <h4>{text.split(" ").length} words and {text.length} characters</h4>
      </div>
    </>
  );
}
