import './css/base.scss';
import domUpdates from './domUpdates';

import { fetchRooms,
  fetchBookings,
  fetchCustomers
} from './apicalls';

import Customer from '../classes/Customer.js';
import Hotel from '../classes/Hotel.js';

// images
import './images/overlook-carpet-top-down.png';

// Global variables

let customer;
let hotel;


const fetchAll = () => {
  Promise.all([fetchRooms(), fetchBookings(), fetchCustomers()])
  .then(data => {
    customer = new Customer(data[2]);
    hotel = new Hotel(data[0], data[1], data[2][0]);
    // getCustomerInformation()
    console.log('Is it working? -----', hotel)
  })
}

// const getCustomerInformation = () => {
//   domUpdates.displayCustomerInformation();
// }

window.addEventListener('load', fetchAll);
