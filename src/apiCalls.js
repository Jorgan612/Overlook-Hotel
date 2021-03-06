import { hotel, getCustomerInformation, fetchAll} from './scripts';
import domUpdates from './domUpdates.js';

export const fetchRooms = () => {
  return fetch("http://localhost:3001/api/v1/rooms")
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(err => domUpdates.showGetErrorMsg())
}

export const fetchBookings = () => {
  return fetch("http://localhost:3001/api/v1/bookings")
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(err => showGetErrorMsg())
}

export const fetchCustomers = () => {
  return fetch("http://localhost:3001/api/v1/customers")
    .then(response => response.json())
    .then(data => data.customers)
    .catch(err => showGetErrorMsg())
}

export const fetchSingleCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => showGetErrorMsg())
}


export const addNewBooking = (customerID, room, date) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify({userID: customerID, date: date, roomNumber: room}),
    headers: {
      'Content-type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(response => hotel.bookings.push(response))
  .then(fetchAll(customerID))
  .catch(err => domUpdates.showPostErrorMsg());
}
