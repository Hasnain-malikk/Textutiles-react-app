import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const clickup = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case!","success")
    }
    const clicklow = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case!","success")
    }
    const clearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleonChange = (event) => {
        setText(event.target.value)
        
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Done","success")
      }
    const copyText = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
              .then(() => {
                props.showAlert('Text copied to clipboard!', 'success');
              })
              .catch((err) => {
                console.error('Unable to copy text: ', err);
                props.showAlert('Failed to copy text!', 'error');
              });
            }


    }
   
  return (
    <div>
        <form>
            <div style={{color:props.mode === 'light'?'black':'white' || document.body.style.backgroundColor === 'pink'?'white':'black'}}>
            <div className="conatiner">
           <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" ><h3><strong>Textutile</strong> - Text to speak, Word Counter, Case Conversation</h3></label>
                <textarea className="form-control my-2" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="7" style={{backgroundColor: props.mode === 'light'?'white':'#232222' , color:props.mode === 'light'?'black':'white'  }}></textarea>
                <button disabled={text.length===0}  type="button" className="btn btn-success mx-1 my-1" style={{backgroundColor:'#007a12'}} onClick={speak}>Speak</button>
                <button disabled={text.length===0}  type="button" className="btn btn-primary mx-1 my-1 " style={{backgroundColor:'#233fa3'}} onClick={clickup}>Convert to Upper case</button>
                <button disabled={text.length===0}  type="button" className="btn btn-primary mx-1 my-1" style={{backgroundColor:'#233fa3'}} onClick={clicklow}>Convert to Lower case</button>
                <button disabled={text.length===0}  type="button" className="btn btn-secondary mx-1 my-1" onClick={copyText}>Copy text</button>
                <button disabled={text.length===0}  type="button" className="btn btn-danger mx-1 my-1" style={{backgroundColor:'#b22525'}} onClick={clearText}>Clear text</button>
                
            </div>
             </div>
                <div>
                <h3 className='my-3'>Your text summary</h3>
                <p>{text.split(/\s+/).filter((word) => word !== '').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((word) => word !== '').length} Minutes read time</p>
                <p>No. of sentences = {text.split('.').length - 1}</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview"}</p>
                </div>
                </div>
        </form>

    </div>
  )
}
