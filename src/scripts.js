import './css/base.scss';
import domUpdates from './domUpdates.js';

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
    customer = new Customer(data[2][0]);
    hotel = new Hotel(data[0], data[1], data[2][0]);
    getCustomerInformation()
  })
}

const getCustomerInformation = () => {
  hotel.getCurrentCustomerBookings();
  hotel.calculateTotalCostOfAllCustomerBookings();
  customer.getFirstName();
  // console.log(customer.getFirstName())
  domUpdates.displayTotalAmountSpentOnBookings(hotel.totalBookingCost);
  domUpdates.displayCustomerInformation(hotel.currentCustomerBookings);
  domUpdates.displayPersonalizedGreeting(customer.getFirstName(hotel.customer));
}

window.addEventListener('load', fetchAll);
