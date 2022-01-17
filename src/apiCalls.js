export const fetchRooms = () => {
  return fetch("http://localhost:3001/api/v1/rooms")
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(err => console.log('Oops! Something went wrong!', err))
}

export const fetchBookings = () => {
  return fetch("http://localhost:3001/api/v1/bookings")
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(err => console.log('Oops! Something went wrong!', err))
}

export const fetchCustomers = () => {
  return fetch("http://localhost:3001/api/v1/customers")
    .then(response => response.json())
    .then(data => data.customers)
    .catch(err => console.log('Oops! Something went wrong!', err))
}

export const addNewBooking = (bookingInfo) => {
  console.log('addNewBooking param----', bookingInfo)
  // console.log('userID--', bookingInfo.userID)
  // console.log('date--', bookingInfo.date)
  // console.log('roomNumber--s', bookingInfo.roomNumber)
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify({userID:bookingInfo.userID, date:bookingInfo.date, roomNumber:bookingInfo.roomNumber}),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(err => console.log('UNABLE TO ADD BOOKING AT THIS TIME'));
}
// { userID: parseFloat(`${bookingInfo.userID}`), date: parseFloat(`${bookingInfo.date}`), roomNumber: parseFloat(`${bookingInfo.roomNumber}`)}
