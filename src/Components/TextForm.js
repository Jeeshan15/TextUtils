import React, {useState} from 'react'


function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upperrcase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!", "Success");
    }

    const handleDownClick = () =>{
      // console.log("Lowercase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowerCase!", "Success");
    }

    const handleClearClick = () =>{
      let newText = "";
      setText(newText);
      props.showAlert("Clear all text!", "Success");
    }

    const handleCopyClick = () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy all text!", "Success");
    }

    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Remove extra space!", "Success");
    }

    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text , setText] = useState("");

    // text = "new text"; // Wrong way to chnage the state
    // setText = ("new text")  // Correct way to change the state


  return (
    <>
    <div className= 'container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} placeholder='Enter your text or paste the text.' onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      
      <button className="btn btn-success mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className= 'container my-3' style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text or paste the text."}</p>
    </div>
    </>
  )
}

export default TextForm
