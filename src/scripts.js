import './css/base.scss';
import domUpdates from './domUpdates.js';
import dayjs from 'dayjs';

import { fetchRooms,
  fetchBookings,
  fetchCustomers
} from './apicalls';

import Customer from '../classes/Customer.js';
import Hotel from '../classes/Hotel.js';

// images
import './images/overlook-carpet-top-down.png';



// Query Selectors

const bookAvailableRoomButton = document.querySelector('#bookAvailableRoomButton');



// Global variables

let customer;
let hotel
let today = dayjs().format('YYYY-MM-DD');


const fetchAll = () => {
  Promise.all([fetchRooms(), fetchBookings(), fetchCustomers()])
  .then(data => {
    customer = new Customer(data[2][0]);
    hotel = new Hotel(data[0], data[1], data[2][0]);
    getCustomerInformation()
    document.getElementById('date').setAttribute('min', today);
    document.getElementById('date').setAttribute('value', today);
  })
}

const getCustomerInformation = () => {
  hotel.getCurrentCustomerBookings();
  hotel.calculateTotalCostOfAllCustomerBookings();
  customer.getFirstName();
  domUpdates.displayTotalAmountSpentOnBookings(hotel.totalBookingCost);
  domUpdates.displayCustomerInformation(hotel.currentCustomerBookings);
  domUpdates.displayPersonalizedGreeting(customer);
}

const findAvailableBookings = () => {
  // event.preventDefault();
  let calendarInputDate = document.getElementById('date');
  let selectedCalendarInputDate = dayjs(calendarInputDate.value).format('YYYY/MM/DD');
  // ABOVE VARIABLE PASSED INTO FUNCTION TO CHECK AVAILABILITY?!
  console.log('new Date ------', selectedCalendarInputDate)
}


// Event Listeners

bookAvailableRoomButton.addEventListener('click', findAvailableBookings);
window.addEventListener('load', fetchAll);
