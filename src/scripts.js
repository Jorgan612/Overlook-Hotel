import './css/base.scss';
import domUpdates from './domUpdates.js';
import dayjs from 'dayjs';

import { fetchRooms,
  fetchBookings,
  fetchCustomers,
  addNewBooking,
  fetchSingleCustomer,
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
const availableRoomsView = document.querySelector('.available-rooms-div');

// Global variables
let customer;
let hotel
checkAvailibilityButton.disabled = true;

// functions
const fetchAll = (id) => {
  Promise.all([fetchRooms(), fetchBookings(), fetchCustomers(), fetchSingleCustomer(id)])
  .then(data => {
    hotel = new Hotel(data[0], data[1], data[3]);
    getCustomerInformation(id, data[1])
    let selectedCalendarInputDate = dayjs().format('YYYY/MM/DD');
    const allroomTypesRadioButton = document.getElementById('all');
    allroomTypesRadioButton.checked = true;
    domUpdates.addHidden(loginView);
    domUpdates.removeHidden(userDashboardView);
  })
}

const getCustomerInformation = (id) => {
  fetchSingleCustomer(id)
  .then(data => {
    customer = new Customer(data);
    hotel.customer = customer;
    hotel.getCurrentCustomerBookings();
    hotel.calculateTotalCostOfAllCustomerBookings();
    domUpdates.displayTotalAmountSpentOnBookings(hotel.totalBookingCost);
    domUpdates.displayCustomerInformation(hotel.currentCustomerBookings);
    domUpdates.displayPersonalizedGreeting(customer);
  })
}

const findAvailableRooms = () => {
  let calendarInputDate = document.getElementById('date');
  let selectedCalendarInputDate = dayjs(calendarInputDate.value).format('YYYY/MM/DD');
  let roomTypeInput = document.querySelector('input[name="roomType"]:checked').value;
  hotel.checkRoomAvailability(selectedCalendarInputDate, roomTypeInput);
  domUpdates.displayAvailableRooms(hotel.availableRooms);
  domUpdates.removeHidden(bookAvailableRoomButton, availableRoomsView);
}

const makeNewBooking = (event) => {
  event.preventDefault();
  let calendarInputDate = document.getElementById('date');
  let selectedCalendarInputDate = dayjs(calendarInputDate.value).format('YYYY/MM/DD');
  let selectedRoomToBook = Number(document.querySelector('input[name="availableRoomRadioButton"]:checked').value);
  calendarInput.value = '';
  addNewBooking(customer.id, selectedRoomToBook, selectedCalendarInputDate);
  hotel.getCurrentCustomerBookings();
  hotel.calculateTotalCostOfAllCustomerBookings();
  domUpdates.addHidden(bookAvailableRoomButton, availableRoomsView);
  checkAvailibilityButton.disabled = true;
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
  let userNameIndex10 = [userName.charAt(10)];
  let userloginID = Number(`${userNameIndex8}${userNameIndex9}${userNameIndex10}`);
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
