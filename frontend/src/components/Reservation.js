import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";

const Reservation = ({userReservation}) => {
console.log(userReservation)
return <Wrapper>
    <Title>Flight reservation</Title>
      <Detail><Bold>Confirmation #: </Bold>{userReservation.id}</Detail>
      <Detail><Bold>Flight: </Bold>{userReservation.flight}</Detail>
      <Detail><Bold>Seat: </Bold>{userReservation.seat}</Detail>
      <Detail><Bold>Name: </Bold>{userReservation.givenName} {userReservation.surname} </Detail>
      <Detail><Bold>Email: </Bold>{userReservation.email}</Detail>
</Wrapper>
}

const Wrapper = styled.div`
border:2px solid red;
padding:20px;
margin:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`;

const Title = styled.h1`
color:red;
padding-bottom:10px;
`

const Detail = styled.p`
padding:10px 0;
`

const Bold = styled.span`
font-weight:bolder;
`

export default Reservation;