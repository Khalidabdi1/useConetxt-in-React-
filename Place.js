import PlaceImage from "./PlaceImage"
import List from "./List"
export default function Place({place}){
    return(
    <>
    
    <PlaceImage place={place} ></PlaceImage>
    <p>
        <b>{place.name}</b>
        {" " +place.description}
    </p>
    </>
    )
}