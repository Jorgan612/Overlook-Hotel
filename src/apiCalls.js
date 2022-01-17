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
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify({userID:bookingInfo.userID, date:bookingInfo.date, roomNumber:bookingInfo.roomNumber}),
    headers: {
      'Content-type': 'application/json',
    }
  })
  .then(response => response.json())
  .catch(err => console.log('UNABLE TO ADD BOOKING AT THIS TIME'));
}
