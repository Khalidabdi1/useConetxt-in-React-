import getImageUrl from "./getImageUrl"

import { useContext } from "react"
import App from "../App.js"
import Place from "./Place.js"

import { Sanddata } from "../context/sand.js"
export default function PlaceImage({place}){

    let context =useContext(Sanddata)
    console.log(context)
    return(
    <img
    src={getImageUrl(place.imageId)}
    style={{width:context.size,height:context.size}}
    />
    )
}