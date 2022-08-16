import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }
  const handleOnClick = ()=>{
   // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }
  const handleClearClick = ()=>{
   // console.log("Uppercase was clicked" + text);
    let newText = ' ';
    setText(newText);
    props.showAlert("clear text","success");
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success");
}

// Credits: Coding Wala
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed","success");
}

  const [text, setText] = useState('Enter text here');  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
