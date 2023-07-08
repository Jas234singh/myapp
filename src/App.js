// import logo from './logo.svg';
import './App.css';
 import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react';


function App() {
  const [alert,setAlert] =useState(null)
const ShowAlert = (message,type) =>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout( ()=>{
setAlert(null);
  },3000

  )
}

  const [mode,setMode] = useState('light')
 

  //  setMode('light');
  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="rgb(6 53 94)";
      ShowAlert("Dark mode has been enabled","Success");
      document.title ="Dark mode enabled";
      setInterval(()=>{
document.title ="Use TextUtils Now";
      },2000)
      setInterval(()=>{
        document.title = "TextUtils is Amazing App";
              },1500)

    }else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      ShowAlert("Light mode has been enabled","Success");
      document.title ="Light mode enabled";
    }
   
  }
  return (

 
    <>

   



<Navbar mode ={mode} toggle ={toggle}/>
<Alert alert ={alert}/>
     
      
      {/* <div className="container my-3"> */}
        
        <Textform ShowAlert ={ShowAlert} Hea ="Write text" mode ={mode}/>
     






  </>  
   
  )
}

export default App;
