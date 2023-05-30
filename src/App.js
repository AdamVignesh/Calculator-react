import logo from './logo.svg';
import './App.css';
import Key from './Components/Key'
import {useState} from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';




function App() {
  
  const [display,setDisplay] = useState("Calculator");
  const [output,setOutput] = useState("Input goes here");
  // const [flag,setFlag] = useState(false);
  let flag = false;

  function calcValue()
  {
    try
    {

      const result = eval(display);
      setOutput(display);
      setDisplay(result);
      console.log(result);
    }
    catch
    {
      alert("Input is invalid");
    }
  }

  function handleClick(value)
  {
    if(value==="AC")
    {
      flag = false;
      setDisplay("Calculator");
      setOutput("Input goes here");

    }
    else if(value=="<-")
    {
      if(!flag && display.length!=1 && display!="Calculator")
      {
        setDisplay( display.substring(0,display.length-1));
      }
      else
      {
        setDisplay("Calculator");
        setOutput("Input goes here");

      }
    }
    else if(value == '=')
    {    
      flag = true;
      calcValue();
    }
    else if(display==="Calculator")
    {
      flag = false;
      setDisplay(value);
      
    }
    else
    {
      flag = false;
      setDisplay(display+value);
    }
  }
  
  return (
    <div className="App">
      <center>

      <div className='calcTop'>
        <h2>{display}</h2>
         <span>{output}</span>
        </div>
          <div className='calcBottom'>

            <div className='Numbers'>
              
            <div className='OneToThree'>
              <Key className="row1" onClick={() => handleClick("1")} txt="1"/>
              <Key className="row1" onClick={() => handleClick("2")} txt="2"/>
              <Key className="row1" onClick={() => handleClick("3")} txt="3"/>
            </div>
        
            <div className='FourToSix'>  
              <Key className="row2" onClick={() => handleClick("4")} txt="4"/>
              <Key className="row2" onClick={() => handleClick("5")} txt="5"/>
              <Key className="row2" onClick={() => handleClick("6")} txt="6"/>
            </div>

            <div className='SevenToNine'>
              <Key className="row3" onClick={() => handleClick("7")} txt="7"/>
              <Key className="row3" onClick={() => handleClick("8")} txt="8"/>
              <Key className="row3" onClick={() => handleClick("9")} txt="9"/>
            </div>
            
            {/* <div className='ZeroDiv'> */}
            <div className='Zero'>
              <Key className="AC" onClick={() => handleClick("AC")} txt="AC"/>
              <Key className="row4" onClick={() => handleClick("0")} txt="0"/>
              <Key className="del" onClick={() => handleClick("<-")} txt="<-"/>
            </div>
            {/* </div> */}
          </div>
          
          {/* <div className='Symbols'> */}
            
            <div className='Symbols'>
              <Key className="col" onClick={() => handleClick("+")} txt="+"/>
              <Key className="col" onClick={() => handleClick("-")} txt="-"/>
              <Key className="col" onClick={() => handleClick("*")} txt="*"/>
              <Key className="col" onClick={() => handleClick("/")} txt="/"/>
              <Key className="equals" onClick={() => handleClick("=")} txt="="/>
            </div>

          </div>
          
          {/* </div> */}
      </center>
    </div>
  );
}

export default App;
