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
  console.log('availableRooms param in displayAvailableRooms hotel method----', availableRooms)
  const availableRoomsDiv = document.querySelector('#availableRoomsDiv');
  availableRoomsDiv.innerHTML = "";
  availableRooms.forEach((room) => {
    const availableRoomCard = `
    <article class="available-room-card">
      <p>${room.costPerNight}</P>
      <p>${room.roomType}</P>
      <p>${room.numbeds} ${room.bedSize} bed</P>
    </article>
    `
    availableRoomsDiv.innerHTML += availableRoomCard
  })

  //
  // if (availableRooms.length === 0) {
  //   // let noAvailabilityMsg = `We apologise for the inconvience but there are no available rooms to book for the selected date and/or room type. Please refine your search and try again.`
  //   return `We apologise for the inconvience but there are no available rooms to book for the selected date and/or room type. Please refine your search and try again.`
  // }
  }
}

export default domUpdates;
