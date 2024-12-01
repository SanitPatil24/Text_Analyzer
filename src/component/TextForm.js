import React,{useState} from 'react'
export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
 
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleLoClick=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText="";
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    }
            
    const handleRemoveExtraSpace=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleRemoveNewLine=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText=text.split("\n");
        setText(newText.join(" "));
        props.showAlert("New lines removed!", "success");
    }

    const handleCopy=()=>{
        // console.log("Lowercase was clicked" + text);
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied!", "success");
    }


    const[text,setText]=useState("");
    // text = "new text";//wrong way to change the state
    // setText("new text");//correct way to change the state

  return (
    <>
    <div>  
        <h1 className= 'mb-1'>{props.heading}</h1> 
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} id="myBox" rows="10"></textarea>
        </div>
        <button type="button" disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
        <button type="button" disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
        <button type="button" disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear</button>
        <button type="button" disabled={text.length===0} onClick={handleRemoveExtraSpace} className="btn btn-primary mx-1 my-1">Remove Extra Space</button>
        <button type="button" disabled={text.length===0} onClick={handleRemoveNewLine} className="btn btn-primary mx-1 my-1">Remove New Line</button>
        <button type="button" disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>


        
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nonthing to Preview!"}</p>

    </div>
    </>
  )
}
