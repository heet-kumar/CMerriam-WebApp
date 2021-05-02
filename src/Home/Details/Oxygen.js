import React, {useState,useEffect} from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import db from "../../firebase.js";
import firebase from "firebase";

function Details(props) {

  const [details, setDetails] = useState([]);
  const [city,setcity] =useState ("")
  useEffect(() => {
    setcity(props.city)
    console.log(props.city)
    db.collection("oxygen")
      .orderBy("city", "asc")
      .onSnapshot((snapshot) =>{
        setDetails(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="details">
      <div className="header">
        <p>OXYGEN</p>
      </div>
      <div className="details-body">
        
        {details.length==0?<div className="no-data"><p>!! SORRY NO DETAILS AVAILABLE !!</p></div>:
        details.map((node)=>{
          return(
          <Row
          shop={node.name}
          address={node.address}
          number={node.number}
          resource={node.resource}
          whatsapp={node.whatsapp}
          city={node.city}/>
        )})
        }
      </div>
    </div>
  );
}

export default Details;
