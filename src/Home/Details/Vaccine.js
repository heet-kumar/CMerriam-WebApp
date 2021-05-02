import React ,{useState,useEffect} from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import db from "../../firebase.js";
import firebase from "firebase";

function Details() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    db.collection("vaccine")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) =>{
        setDetails(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="details">
      <div className="header">
        <p>VACCINE CENTERS</p>
        <p>
          Vaccine is just a prevention to prevent the spread of coronavirus. It
          is not a permanent solution.
        </p>
        <p>
          All these details are retrieved from -{" "}
          <a
            href="https://dashboard.cowin.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
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
