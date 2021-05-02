import React, {useState} from "react";
import "./Menu.css";
import MenuRow from "./MenuRow/MenuRow";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Oxygen from "../Details/Oxygen";
import Ambulance from "../Details/Ambulance";
import Plasma from "../Details/Plasma";
import Medicine from "../Details/Medicine";
import CovidTestCenter from "../Details/CovidTestCenter";
import HomeTreatment from "../Details/HomeTreatment";
import Vaccine from "../Details/Vaccine";
import Resource from "../AddResouce/resources";
import Select from 'react-select';

function Menu() {
  const data = [
    {value: 1,label: "All"},
    {value: 2,label: "Dehli"},
    {value: 3,label: "Mumbai"},
    {value: 4,label: "Chennai"},
    {value: 5,label: "Kolkata"},
    {value: 6,label: "Lucknow"},
    {value: 7,label: "Kanpur"},
    {value: 8,label: "Bhopal"},
    {value: 9,label: "Indore"}
  ];
   
  const [selectedOption, setSelectedOption] = useState("All");
  const [city,setcity] = useState("");

  const handleChange = e => {
    setSelectedOption(e);
    setcity(e.label);
  }

  return (
    <Router>
      <div className="menu">
        <div className="lhs-header">
          <div className="lhs-header-1">
            <div className="para">
              <p>Resources</p>
            </div>
          </div>
          <Select
        placeholder="Select City"
        value={selectedOption}
        options={data}
        onChange={handleChange} 
      />
        </div>
        <div className="lhs-body">
          <Link to="/">
            <MenuRow
              imgsrc={require("./MenuRow/Images/oxygen.jpeg").default}
              title="OXYGEN"
              description="Find Resources that provide  Oxygen"
            />
            <Link to="/ambulance">
              <MenuRow
                imgsrc={require("./MenuRow/Images/ambulance.jpeg").default}
                title="AMBULANCE"
                description="Find Resources that provide Ambulance"
              />
            </Link>
          </Link>
          <Link to="/plasma">
            <MenuRow
              imgsrc={require("./MenuRow/Images/plasma.jpg").default}
              title="PLASMA"
              description="There is insufficient data to recommend either for or against the use of plasma treatment."
            />
          </Link>
          <Link to="/medicine">
            <MenuRow
              imgsrc={require("./MenuRow/Images/medicine.jpeg").default}
              title="MEDICINE"
              description="Drugs aren't permanent solution to COVID-19, it is to be administered by medical professionals."
            />
          </Link>
          <Link to="/covidtestcenter">
            <MenuRow
              imgsrc={require("./MenuRow/Images/covidtestcenter.jpeg").default}
              title="COVID TEST CENTER"
              description="Find Covid Test Center."
            />
          </Link>
          <Link to="/hometreatment">
            <MenuRow
              imgsrc={require("./MenuRow/Images/hometreatment.jpeg").default}
              title="HOME TREATMENT"
              description="Covid 19 Home Treatment Step by Step."
            />
          </Link>
          <Link to="/vaccine">
            <MenuRow
              imgsrc={require("./MenuRow/Images/vaccine.jpeg").default}
              title="VACCINE CENTERS"
              description="Vaccine is a prevention not the cure.."
            />
          </Link>
          <Link to="/addresource">
            <MenuRow
              imgsrc={require("./MenuRow/Images/handshake.png").default}
              title="ADD RESOURCE"
              description="We need every helping hand possible.."
            />
          </Link>
        </div>
        
      </div>
      <Route path="/" exact component={Oxygen} />
      <Route path="/ambulance" exact component={Ambulance} />
      <Route path="/plasma" exact component={Plasma} />
      <Route path="/medicine" exact component={Medicine} />
      <Route path="/covidtestcenter" exact component={CovidTestCenter} />
      <Route path="/hometreatment" exact component={HomeTreatment} />
      <Route path="/vaccine" exact component={Vaccine} />
      <Route path="/addresource" exact component={Resource} />
    </Router>
  );
}

export default Menu;
