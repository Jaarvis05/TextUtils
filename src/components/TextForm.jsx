import React, {useState} from "react";

export default function TextsForm(props) {
  const [text, setText] = useState("Enter Text Here");
  //text = "new text";          //Wrogn way to change the state....
  //setText("New Text");        //Correct way to change the state....
  const handleUppercase = () => {
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Converted To UpperCase","success")
  };

  const handlelowercase = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("Converted To LowerCase","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copy","success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);   /* /[]+/:- sign of multiple space */
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space","success")
  };

  return (
  <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUppercase}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowercase}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
      {/*text.split(" ").length is used for detecting words*/}
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing To Preview.......'}</p>
    </div>
  </>
  );
}
