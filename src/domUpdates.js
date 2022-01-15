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
  console.log('availableRooms in displayAvailableRooms ------', availableRooms)
  const availableRoomsDiv = document.querySelector('#availableRoomsDiv');
  availableRoomsDiv.innerHTML = "";
  availableRooms.forEach((room) => {
    //<input type="radio" id="${tag}" name="tag" value="${tag}">
      // <label for="${tag}">${tag}</label>
/// above code might go in place of or combined with below innerHTML
    const availableRoomCard = `
    <article class="available-room-card">
      <p>$ ${room.costPerNight}</P>
      <p>${room.roomType}</P>
      <p>${room.numBeds} ${room.bedSize} bed</P>
    </article>
    `
    availableRoomsDiv.innerHTML += availableRoomCard
  })


  if (availableRooms.length === 0) {
    let noAvailabilityMsg = `<p class="no-availability-msg-p-tag">We apologize for the inconvience but there are no available rooms to book for the selected date and/or room type. Please refine your search and try again.</p>`
    availableRoomsDiv.innerHTML = noAvailabilityMsg;
  }
  }
}

export default domUpdates;
