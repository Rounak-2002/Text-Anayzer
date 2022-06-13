import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  };
  const handleclearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success")
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied", "success")
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed", "success")
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "orange" }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Text Area
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "orange"
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleclearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "orange" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!=0}).length} 
          words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text==="Enter Text Here"?"Enter something into above textbox to preview it here":text}</p>
      </div>
    </>
  );
}
