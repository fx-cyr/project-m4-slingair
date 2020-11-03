"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  const allFlights = Object.keys(flights)
  res.status(200).json({
    status: 200,
    data: allFlights,
  });
};

const getFlight = (req, res) => {
  const { flightId } = req.params;
  const flightDetails = flights[flightId];
  if (flightDetails) {
    res.status(200).json({
      status: 200,
      data: flightDetails,
    });
    
  } else {
    res.status(404).json({
      status: 404,
      message: `Flight ${flightId} does not exist`
    });
  }
};

const addReservations = (req, res) => {
  const {
    id,
    flight,
    seat,
    givenName,
    surname,
    email
  } = req.body


  if (flight === undefined || seat === undefined || givenName === undefined || surname === undefined || email === undefined) 
  {
    res.status(400).json({
      status: 400,
      data: req.body,
      message: "Missing information - reservation was not processed"
    });
  }
  else {
    let data = req.body
    data.id = uuidv4()
    reservations.push(data)
    res.status(201).json({
      status: 201,
      data: data,
    message: `Success! Reservation number: ${data.id} `
  })
}};

const getReservations = (req, res) => {  
res.status(200).json({
  status: 200,
  data: reservations,
});
};

const getSingleReservation = (req, res) => {
  const isReservation = reservations.filter(reservation => reservation.id.includes(`${req.params.id}`))
      if (isReservation.length > 0) {
        res.status(200).json({
          status: 200,
          message: "Single reservation requested",
          data: isReservation
        }) 
      }
      else {
        res.status(404).json({
          status: 404,
          message: `Reservation ${req.params.id} not found`
        }) 
      }
};

const deleteReservation = (req, res) => {
  const id = req.params.id
  const updatedResArr = reservations.filter((reservation) => {
    return reservation.id !== id
  })
  if(updatedResArr.length < reservations.length) {
    res.status(200).json({
      status: 200,
      message: `Reservation ${id} succesfully deleted.`,
  })
}

else {
  res.status(404).json({
    status: 404,
    message: `Reservation ${req.params.id} not found`
})
}
}

const updateReservation = (req, res) => {
  const id = req.params.id
  let updatedRes = reservations.find((singleRes) => singleRes.id === id);
  if (updatedRes) {
    updatedRes = {...req.body};
    res.status(200).json({
      status: 200,
      message: `Reservation ${id} succesfully updated`,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Reservation not found",
    });
  }
};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
}
