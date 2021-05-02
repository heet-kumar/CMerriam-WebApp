import React , {useState,useEffect} from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import db from "../../firebase.js";
import firebase from "firebase";

function Details() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    db.collection("plasma")
      .orderBy("Name", "asc")
      .onSnapshot((snapshot) =>{
        setDetails(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  
  return (
    <div className="details">
      <div className="header">
        <p>PLASMA</p>
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
          whatsapp={node.whatsapp}/>
        )})
        }
      </div>
    </div>
  );
}

export default Details;
