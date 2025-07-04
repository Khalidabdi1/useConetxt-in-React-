import { places } from "./component/data";
import "./App.css"
import {useState} from "react"
import List from "./component/List";

import { Sanddata } from "./context/sand";
function App() {
  // console.log(places)

  

  let[check,setCheck]=useState(false)
  let sizeImage = check? 100:150
  console.log(sizeImage)
  return (
    <div className="App">
      <div>
       <input type={"checkbox"} onChange={(e)=>{
        setCheck(e.target.checked)
       }}></input>
    <label>
      Use large images 

    </label>

    <hr></hr>
    
    <Sanddata.Provider value={{size:sizeImage}}>
    <List>
      
    </List>

    </Sanddata.Provider>
    </div>
    </div>
  );
}

export default App;
