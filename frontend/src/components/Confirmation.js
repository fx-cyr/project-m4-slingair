import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = () => {
  
  return <Wrapper>
    <Reservation>
      <Title>Your flight is confirmed!</Title>
      <ReservationNumber><Bold>Reservation Number: </Bold>{localStorage.getItem("id")}  </ReservationNumber>
      <FlightNumber><Bold>Flight: </Bold>{localStorage.getItem("flightNumber")}</FlightNumber>
      <SeatNumber><Bold>Seat: </Bold>{localStorage.getItem("seat")}</SeatNumber>
      <Name><Bold>Name: </Bold> {localStorage.getItem("givenName")} {localStorage.getItem("surname")}</Name>
      <Email><Bold>Email: </Bold>{localStorage.getItem("email")} </Email>
    </Reservation>
    <ConfirmedImg src={tombstone}/>
  </Wrapper>;

};

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`;

const Reservation = styled.div`
margin:30px;
padding:20px;
border: 3px solid red;
display:block;
`

const Title = styled.h1`
color:red;
padding-bottom:10px;
`

const ReservationNumber = styled.p`
padding:10px 0;
`

const FlightNumber = styled.p`
padding:10px 0;
`

const SeatNumber = styled.p`
padding:10px 0;
`

const Name = styled.p`
padding:10px 0;
`

const Email = styled.p`
padding:10px 0;
`

const ConfirmedImg = styled.img`
margin: 30px;
width:200px;
`

const Bold = styled.span`
font-weight:bolder;
`
export default Confirmation;
