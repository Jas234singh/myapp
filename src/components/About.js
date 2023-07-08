
import React ,{useState} from 'react'


export default function Aboutus() {
  const [mystyle,setStyle] = useState({
    color:'black',
    backgroundColor:'white',
    
    })
    const [btntext,setBtnText] = useState("enable dark mode")
    const toggle = () => {
    if(mystyle.color === 'black') {
      setStyle({
        color: 'white', 
        backgroundColor: 'black'
      })
      setBtnText("enable light color")
    }
    else {
      setStyle({ color: 'black', 
      backgroundColor: 'white' })
      setBtnText("enable dark mode")
    }
  }
  return (
    <>
    <body style ={mystyle}>
    <div className ="container" style ={mystyle}>
        <h1 style ={mystyle}>My name is this</h1>
        <p style ={mystyle}>you are the better person near you</p>
        
<button type ="submit" onClick ={toggle} className ="btn btn-success">{btntext}</button>

    </div>
    </body>
   
    </>
  )
}
