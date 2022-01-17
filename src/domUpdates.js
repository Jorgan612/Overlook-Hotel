const domUpdates = {
  addHidden(elements) {
    elements.forEach((item) => {
      item.classList.add('hidden');
    });
  },
  removeHidden(elements) {
    elements.forEach((item) => {
      item.classList.remove('hidden');
    });
  },
displayTotalAmountSpentOnBookings(bookingAmount) {
  const totalSpentOnBookings = document.querySelector('#customerBookingsHeader');
  totalSpentOnBookings.innerText = `Total Spent:  $${bookingAmount}`;
  },
displayCustomerInformation(bookingInfo) {

  const customerBookingsContainer = document.querySelector('#displayCustomerBookings');
  customerBookingsContainer.innerHTML = "";
  bookingInfo.forEach((booking) => {
    const bookingCard = `
    <article class="user-booking-card" tabindex=0>
      <p class="card-details">Date - ${booking.date}</p>
      <p class="card-details">Room - ${booking.roomNumber}</p>
    </article>
    `;
    customerBookingsContainer.innerHTML += bookingCard;
  });
  },
displayPersonalizedGreeting(customer) {
  const greetingMsg = document.querySelector('#greetingMsg');
  greetingMsg.innerText = `Welcome,  ${customer.firstName} .`
  },
displayAvailableRooms(availableRooms) {
  const availableRoomsDiv = document.querySelector('#availableRoomsDiv');
  availableRoomsDiv.innerHTML = "";
  availableRooms.forEach((room) => {
    const availableRoomCard = `
    <article class="available-room-card">
      <input class="available-room-radio-input" type="radio" id="${room.number}" name="availableRoomRadioButton" value="${room.number}">
      <label class="available-room-radio-input" for="${room.number}">$${room.costPerNight}  ┃  ${room.roomType}  ┃  ${room.numBeds} ${room.bedSize} bed ┃ room ${room.number}</label>
    </article>
    `;
    availableRoomsDiv.innerHTML += availableRoomCard;
  });
  if (availableRooms.length === 0) {
    let noAvailabilityMsg = `<p class="no-availability-msg-p-tag">We apologize for the inconvience but there are no available rooms to book for the selected date and/or room type. Please refine your search and try again.</p>`;
    availableRoomsDiv.innerHTML = noAvailabilityMsg;
    }
  },
removeDisableOnCheckAvailabilityButton() {
    checkAvailibilityButton.classList.remove('disable-button');
  },
// removeDisableOnLoginButton() {
//     loginButton.classList.remove('disable-button');
//   },
// showPostErrorMsg() {
//   const availableRoomsDiv = document.querySelector('#availableRoomsDiv');
//   availableRoomsDiv.innerHTML = "";
//   availableRoomsDiv.innerHTML = "Something went wrong and we were unable to book the room. Please try again.";
//   }
}

export default domUpdates;
