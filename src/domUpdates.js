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
}
}

export default domUpdates;
