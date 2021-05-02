import React, {useState,useEffect} from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import db from "../../firebase.js";
import firebase from "firebase";

function Details() {
  
  const [details, setDetails] = useState([]);

  useEffect(() => {
    db.collection("medicine")
      .orderBy("Name", "asc")
      .onSnapshot((snapshot) =>{
        setDetails(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="details">
      <div className="header">
        <p>MEDICINE</p>
      </div>
      <div className="details-body no-data">
      {details.length==0?<p>!! SORRY NO DETAILS AVAILABLE !!</p>:
        details.map((node)=>{
          return(
          <Row
          shop={node.Name}
          address={node.address}
          number={node.number}/>
        )})
        }
      </div>
    </div>
  );
}

export default Details;
