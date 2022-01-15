const domUpdates = {
displayTotalAmountSpentOnBookings(bookingAmount) {
  const totalSpentOnBookings = document.querySelector('#customerBookingsHeader');
  totalSpentOnBookings.innerText = `Customer Books -  Total Spent:$${bookingAmount}`;
},
displayCustomerInformation(bookingInfo) {
  const customerBookingsContainer = document.querySelector('#displayCustomerBookings');
  customerBookingsContainer.innerHTML = "";
  bookingInfo.forEach((booking) => {
    const bookingCard = `
    <article class="user-booking-card">
      <p>Booking Details:</p>
      <p>Date:${booking.date}</p>
      <p>Room:${booking.roomNumber}</p>
    </article>
    `
    customerBookingsContainer.innerHTML += bookingCard;
  })
},
displayPersonalizedGreeting(customer) {
  const greetingMsg = document.querySelector('#greetingMsg');
  greetingMsg.innerText = `Welcome, ${customer}.`
}
}

export default domUpdates;
