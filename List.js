import { places } from "./data.js"
 
import Place from "./Place.js"


import App from "../App.js"
import { useContext } from "react"

export default function List(){

    let c =useContext(App)
    console.log (c)
    
const listItems =places.map((e)=>(
    <li key={e.id}>
        
        <Place place={e}></Place>
    </li>
))

   return (
   <ul style={{width:"300px",height:"300px"}}>{listItems}</ul>
   )
}