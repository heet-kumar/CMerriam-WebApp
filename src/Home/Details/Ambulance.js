import React,{useState,useEffect} from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import db from "../../firebase.js";
import firebase from "firebase";

function Details() {
  
  const [details, setDetails] = useState([]);

  useEffect(() => {
    db.collection("ambulance")
      .orderBy("Name", "asc")
      .onSnapshot((snapshot) =>{
        setDetails(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="details">
      <div className="header">
        <p>AMBULANCE</p>
      </div>
      <div className="details-body no-data">
        {/* <Row
          shop="Rekha Ambulance Service"
          address="C 36, Asha Bari Sarani, Sec, 2C St, Durgapur,"
          number="9333360820"
        />
        <Row
          shop="Durga Ambulance Service"
          address="Sampur, Durgapur"
          number="9232690512"
        />
        <Row
          shop="Medilift Air Ambulance Services In Durgapur"
          address="Mamra, Durgapur"
          number="7367020595"
        />
        <Row
          shop="Air Ambulance"
          address="Maulana Azad Medical College Hospital-Mamra Market Rd, Durgapur"
          number="NA"
        />
        <Row
          shop="ICU Ventilation Ambulance Service"
          address="Near Health World Hospital, Gandhi More, Durgapur,"
          number="NA"
        />
        <Row
          shop="Sumi Ambulance Service"
          address="District Hospital, SB Gorai Rd, Hamid Nagar, Asansol"
          number="7368088573"
        />
        <Row
          shop="Alock Mala Ambulance Service"
          address="District Hospital, Hamid Nagar, Asansol"
          number="6297670089"
        />
        <Row
          shop="Maa Ambey Ambulance"
          address="AS-7/35, Scheme-2, Kalyanpur Housing, Estate, Asansol"
          number="9775555543"
        />
        <Row
          shop="King Air Ambulance Services"
          address="Chelidanga, Asansol"
          number="7091360310"
        />
        <Row
          shop="Bharat Ambulance Service"
          address="Chelidanga Main Rd, Asansol"
          number="9434678387"
        />
        <Row
          shop="Ridhima Ambulance Service"
          address="Rental Housing Estate No 52, Kalyanpur Housing, Asansol"
          number="9002970429"
        />
        <Row
          shop="Ambuzone"
          address="Near Talpukuria, Ashram More, G.T Road, Asansol"
          number="9163553552"
        />
        <Row
          shop="Mukul Biswas Ambulance"
          address="Sail ISP hospital, Burnpur, Asansol"
          number="NA"
        />
        <Row
          shop="Prasanta Ambulance Service"
          address="Unnamed Road, Hamid Nagar, Asansol"
          number="NA"
        />
        <Row
          shop="Ridhima Mother Ambulance"
          address="HLG Hospital Memorial Hospital, Kalyanpur Housing, Asansol"
          number="NA"
        /> */}
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
