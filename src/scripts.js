import './css/base.scss';
import domUpdates from './domUpdates.js';
import dayjs from 'dayjs';

import { fetchRooms,
  fetchBookings,
  fetchCustomers,
  addNewBooking,
  fetchSingleCustomers
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
const loginView = document.querySelector('.main-login-section');
const userDashboardView = document.querySelector('.user-dashboard-section');
const userLoginErrorMsg = document.querySelector('.login-error-msg');
const availableRoomsView = document.querySelector('.available-rooms-div')


// Global variables
let customer;
let hotel
checkAvailibilityButton.disabled = true;

// functions
const fetchAll = (id) => {
  Promise.all([fetchRooms(), fetchBookings(), fetchCustomers(), fetchSingleCustomers(id)])
  .then(data => {
    customer = new Customer(data[3]);
    hotel = new Hotel(data[0], data[1], data[3]);
    getCustomerInformation()
    let selectedCalendarInputDate = dayjs().format('YYYY/MM/DD');
    const allroomTypesRadioButton = document.getElementById('all');
    allroomTypesRadioButton.checked = true;
  })
}

const getCustomerInformation = () => {
  hotel.getCurrentCustomerBookings();
  hotel.calculateTotalCostOfAllCustomerBookings();
  domUpdates.displayTotalAmountSpentOnBookings(hotel.totalBookingCost);
  domUpdates.displayCustomerInformation(hotel.currentCustomerBookings);
  domUpdates.displayPersonalizedGreeting(customer);
  domUpdates.addHidden(loginView);
  domUpdates.removeHidden(userDashboardView);
  console.log('customer-----', hotel.currentCustomerBookings)
}

const findAvailableRooms = () => {
  let calendarInputDate = document.getElementById('date');
  let selectedCalendarInputDate = dayjs(calendarInputDate.value).format('YYYY/MM/DD');
  let roomTypeInput = document.querySelector('input[name="roomType"]:checked').value;
  hotel.checkRoomAvailability(selectedCalendarInputDate, roomTypeInput);
  domUpdates.displayAvailableRooms(hotel.availableRooms);
  domUpdates.removeHidden(bookAvailableRoomButton, availableRoomsView);
}

const makeNewBooking = () => {
  let calendarInputDate = document.getElementById('date');
  let selectedCalendarInputDate = dayjs(calendarInputDate.value).format('YYYY/MM/DD');
  let selectedRoomToBook = document.querySelector('input[name="availableRoomRadioButton"]:checked').value;
  hotel.collectBookingDetails(customer.id, selectedCalendarInputDate, selectedRoomToBook)
  addNewBooking(hotel.newBookingDetails);
  console.log('NewBookingDetails ---', hotel.newBookingDetails);
  domUpdates.addHidden(bookAvailableRoomButton, availableRoomsView);
  console.log('calendarInput.value BEFORE reset', calendarInput.value)
  calendarInput.value = '';
  checkAvailibilityButton.disabled = true;
  console.log('calendarInput.value AFTER reset', calendarInput.value)
}

const determineValidCalendarInput = () => {
  if (calendarInput.value) {
    checkAvailibilityButton.disabled = false;
    domUpdates.removeDisableOnCheckAvailabilityButton();
  }
}

const loginUser = (event) => {
  event.preventDefault();
  let userName = userNameInput.value;
  let userPassword = userPasswordInput.value;
  let userNameIndex8 = [userName.charAt(8)];
  let userNameIndex9 = [userName.charAt(9)];
  let userloginID = Number(`${userNameIndex8}${userNameIndex9}`);
  if (userloginID > 0 && userloginID <= 50 && userPassword === 'overlook2021') {
    fetchAll(userloginID);
  } else {
    domUpdates.removeHidden(userLoginErrorMsg)
  }
}

// Event Listeners
loginButton.addEventListener('click', loginUser);
calendarInput.addEventListener('input', determineValidCalendarInput);
bookAvailableRoomButton.addEventListener('click', makeNewBooking);
checkAvailibilityButton.addEventListener('click', findAvailableRooms);

export { hotel, getCustomerInformation, fetchAll }
