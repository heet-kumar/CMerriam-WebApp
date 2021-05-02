import React ,{useState,useEffect} from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import db from "../../firebase.js";
import firebase from "firebase";
import Select from 'react-select';


function Details() {

  const [details, setDetails] = useState([]);
  
  const data = [
    {value: 1,label: "All"},
    {value: 2,label: "Dehli"},
    {value: 3,label: "Mumbai"},
    {value: 4,label: "Chennai"},
    {value: 5,label: "Kolkata"},
    {value: 6,label: "Lucknow"},
    {value: 7,label: "Kanpur"},
    {value: 8,label: "Bhopal"},
    {value: 9,label: "Indore"},
    {value: 10,label: "Others"}
  ];
   
  const [selectedOption, setSelectedOption] = useState("All");
  const [city,setcity] = useState("");
  
  const handleChange = e => {
    setSelectedOption(e);
    setcity(e.label);
  }


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
            <>
            {console.log(city)}
              {(city=="All")&& <Row
              shop={node.name}
              address={node.address}
              number={node.number}
              resource={node.resource}
              whatsapp={node.whatsapp}
              city={node.city}/>}

              {(city!="All")&&(city!="")&&(node.city==city)&& <Row
              shop={node.name}
              address={node.address}
              number={node.number}
              resource={node.resource}
              whatsapp={node.whatsapp}
              city={node.city}/>}
            </>
        )})
        }
      </div>
    </div>
  );
}

export default Details;
