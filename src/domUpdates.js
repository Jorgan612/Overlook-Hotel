const domUpdates = {
displayTotalAmountSpentOnBookings(bookingAmount) {
  const totalSpentOnBookings = document.querySelector('#customerBookingsHeader');
  totalSpentOnBookings.innerText = `Total Spent:  $${bookingAmount}`;
  },
displayCustomerInformation(bookingInfo) {
  const customerBookingsContainer = document.querySelector('#displayCustomerBookings');
  customerBookingsContainer.innerHTML = "";
  bookingInfo.forEach((booking) => {
    const bookingCard = `
    <article class="user-booking-card">
      <p class="card-details">Date - ${booking.date}</p>
      <p class="card-details">Room - ${booking.roomNumber}</p>
    </article>
    `
    customerBookingsContainer.innerHTML += bookingCard;
    })
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
    `
    // firstAvailableRoomRadioButton.checked = true;
    // <article class="available-room-card">
    //   <p>$ ${room.costPerNight}</P>
    //   <p>${room.roomType}</P>
    //   <p>${room.numBeds} ${room.bedSize} bed</P>
    // </article>
    availableRoomsDiv.innerHTML += availableRoomCard
  })
  if (availableRooms.length === 0) {
    let noAvailabilityMsg = `<p class="no-availability-msg-p-tag">We apologize for the inconvience but there are no available rooms to book for the selected date and/or room type. Please refine your search and try again.</p>`
    availableRoomsDiv.innerHTML = noAvailabilityMsg;
  }
  }
}

export default domUpdates;
