import './css/base.scss';
import domUpdates from './domUpdates.js';
import dayjs from 'dayjs';

import { fetchRooms,
  fetchBookings,
  fetchCustomers,
  addNewBooking
} from './apicalls';

import Customer from '../classes/Customer.js';
import Hotel from '../classes/Hotel.js';

// images
import './images/overlook-carpet-top-down.png';

// Query Selectors
const bookAvailableRoomButton = document.querySelector('#bookAvailableRoomButton');
const checkAvailibilityButton = document.querySelector('#checkAvailibilityButton');
const calendarInput = document.querySelector('.calendar-input-js');
const userNameInput = document.querySelector('#user');
const userPasswordInput = document.querySelector('#password');
const loginButton = document.querySelector('#LoginButton');


// Global variables
let customer;
let hotel
checkAvailibilityButton.disabled = true;
loginButton.disabled = true;
// let today = dayjs().format('YYYY-MM-DD');

// functions
const fetchAll = () => {
  Promise.all([fetchRooms(), fetchBookings(), fetchCustomers()])
  .then(data => {
    customer = new Customer(data[2][0]);
    hotel = new Hotel(data[0], data[1], data[2][0]);
    getCustomerInformation()
    // document.getElementById('date').setAttribute('min', today);
    // document.getElementById('date').setAttribute('value', today);
    let selectedCalendarInputDate = dayjs().format('YYYY/MM/DD');
    const allroomTypesRadioButton = document.getElementById('all');
    allroomTypesRadioButton.checked = true;
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

const findAvailableRooms = () => {
  let calendarInputDate = document.getElementById('date');
  let selectedCalendarInputDate = dayjs(calendarInputDate.value).format('YYYY/MM/DD');
  let roomTypeInput = document.querySelector('input[name="roomType"]:checked').value;
  hotel.checkRoomAvailability(selectedCalendarInputDate, roomTypeInput);
  domUpdates.displayAvailableRooms(hotel.availableRooms);

}

const makeNewBooking = () => {
  let calendarInputDate = document.getElementById('date');
  let selectedCalendarInputDate = dayjs(calendarInputDate.value).format('YYYY/MM/DD');
  let selectedRoomToBook = document.querySelector('input[name="availableRoomRadioButton"]:checked').value;
  hotel.collectBookingDetails(customer, selectedCalendarInputDate, selectedRoomToBook)
  addNewBooking(hotel.newBookingDetails);
  console.log('currentCustomerBookings AFTER post', hotel.currentCustomerBookings);
  fetchAll();
  // updateCustomerBookings();

  // getCustomerInformation();
}

const updateCustomerBookings = () => {
  debugger;
fetchCustomers().then(data => {
  hotel = new Hotel(data[0], data[1], data[2][0])
  return hotel.bookings;
})

}

const determineValidCalendarInput = () => {
  if (calendarInput.value) {
    checkAvailibilityButton.disabled = false;
    domUpdates.removeDisableOnCheckAvailabilityButton();
  }
}

const determineValidLoginInput = () => {
  if (userNameInput.value && userPasswordInput.value) {
    loginButton.disabled = false;
    domUpdates.removeDisableOnLoginButton();
  }
}

// const getRequestErrorMsg = () => {
// domUpdates.addHidden([]
// }

// const postRequestErrorMsg = () => {
//   // domUpdates.addHidden([]);
//   // domUpdates.removeHidden([]);
//   domUpdates.showPostErrorMsg();
// }

// Event Listeners
userNameInput.addEventListener('keydown', determineValidLoginInput);
userPasswordInput.addEventListener('keydown', determineValidLoginInput);
calendarInput.addEventListener('input', determineValidCalendarInput);
bookAvailableRoomButton.addEventListener('click', makeNewBooking);
checkAvailibilityButton.addEventListener('click', findAvailableRooms);
window.addEventListener('load', fetchAll);
