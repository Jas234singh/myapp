import React ,{useState} from 'react'

export default function Textform(props) {

const handleOnChange  =(event) => {
    setText(event.target.value);
}
const ch  =(onClick) => {
    console.log("uppercase clixked" +text);
let newtext = text.toUpperCase();
setText(newtext);
props.ShowAlert("coverted to uppercase","successfully")
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const locase =() =>{
  let newtextt = text.toLowerCase();
  setText(newtextt);
  props.ShowAlert("coverted to lowercase","successfully")
}
const Clear =() =>{
  let newtexttt = '';
  setText(newtexttt);
}

 const [text,setText] =useState('');
  return (
   
    


   <div className ="container" style ={{ color:props.mode === 'dark'?'white':'black' }}><h1 className='my-2 mx-2'>{props.Hea}</h1>
   <textarea className="form-control" value ={text} onChange ={handleOnChange} style ={{backgroundColor:props.mode === 'dark'?'#6c757d':'white',color:props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="3"></textarea>
   
   <button className ="btn btn-success mx-2 my-2 text-white" onClick ={ch}>Click for uppercase</button>
   <button className ="btn btn-danger mx-2 my-2 text-dark" onClick ={locase}>Click for lowercase</button>
   <button className ="btn btn-primary my-2 mx-2 text-dark" onClick ={Clear}>Click for clear text</button>
   <button onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
   <h1 className ="my-2 ">Text Summary</h1>
   <p>{text.split("  ").length} words and {text.length} characters </p>
   <p>{0.008* text.split(" ").length}words read</p>
   <h1>Preview Text</h1>
   <p>{text.length>0?text:"Enter Something to Preview It "}</p>   </div>
  
 


  
    
  )
}
