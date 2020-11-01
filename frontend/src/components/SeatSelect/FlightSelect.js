import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";


const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flights")
      .then((res) => 
       res.json()
      )
      .then((data) => 
       setFlights(data)
      );
  }, []);
  
  const allFlights = flights.data
  return (
    <Wrapper>
    

      <label htmlFor="flight">Flight Number :</label>
      {/* TODO: Create a dropdown from the flight numbers */}
  
      <Dropdown 
      id="dropdown"
      name="dropdown"
      placeholder="Select a flight"
      onClick={handleFlightSelect}
    >
      <option value ="placeholder" selected disabled>Select a flight</option>
      {allFlights && allFlights.map((flight)=> {
        return <option value={`${flight}`}>{flight}</option>
      })}
    </Dropdown>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

const Dropdown = styled.select`
margin-left:15px;
background:lightgrey;
width: 300px;
height:35px;
border-radius:8px;
`

export default FlightSelect;
