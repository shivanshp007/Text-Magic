import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("  "); // // create useState for text

    const handleUpClick = () => {

        let upperText = text.toUpperCase();
        setText(upperText); // after clicking the button text will change...
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleToLower = () => {

        let LowerText = text.toLowerCase();
        setText(LowerText); // after clicking the button text will change...
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleToClear = () => {
        let clear = '';   // Clear the Text Box 
        setText(clear);
        props.showAlert("Cleared All Text", "success");
    }
    const handleToCopy = () => {
        let myBoxText = document.getElementById("myBox");
        myBoxText.select(); // select all text of the the myBox textArea
        navigator.clipboard.writeText(myBoxText.value); // main function to copy your text in your clipboard 
        props.showAlert("Copy to Clipboard", "success");
    }
    const handleToExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Changed");
        setText(event.target.value);        // when i click on button then in textArea have onChange function always run so i need to handle
    }


    // text = "new text";            // wrong way to change the state of (text) we need to use setText function
    // setText("New Text");           // Right way to change the state 

    return (
        <>
            <div className="container my-3" style={{backgroundColor:props.mode ==='dark'? '#042743' : 'white' ,color:props.mode==='dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'? '#042743' : 'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="7"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleToLower}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleToCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleToExtraSpace}>Remove Extra Space</button>
                <button className='btn btn-primary mx-2' onClick={handleToClear}>Reset Text</button>
            </div>
            <div className="container my-3" style={{backgroundColor:props.mode ==='dark'? '#042743' : 'white' ,color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                {/* <p> {text.split(" ").length} Words | {text.length} Characters | {text.split(".").length-1} Sentence </p> */}
                <p>
                    {text.trim().split(/\s+/).length} Words | {text.length} Characters | {(text.match(/\.\s+|\.$/g) || []).length} Sentences
                </p>

                <p>{(0.008 * text.split(" ").length)*60} sec need to read this summary</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter your text in above text box to preview here...'}</p>
            </div>

        </>

    )
}
