class Hotel {
  constructor(roomsData, bookingsData, customersData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.customers = customersData;
    this.currentCustomerBookings;
    this.totalBookingCost;
  }

getCurrentCustomerBookings(customerInfo) {
  const currentCustomerBookings = customerInfo.bookings.filter((booking) => {
    if (this.customers.id === booking.userID) {
      return booking;
    }
  }).sort((a, b) => {
    if (a.date < b.date) { return - 1 }
    if (a.date > b.date) { return 1 }
    else { return 0 };
  })
    this.currentCustomerBookings = currentCustomerBookings;
  }

calculateTotalCostOfAllCustomerBookings(customer) {
  const customerTotalBookingCost = this.currentCustomerBookings.reduce((acc, booking) => {
    this.rooms.forEach((room) => {
      if (room.number === booking.roomNumber) {
        acc += room.costPerNight;
      }
    })
    return acc;
  }, 0);
this.totalBookingCost = Number(customerTotalBookingCost.toFixed(2));
  }

// getRoomDetails() {
//   this.roomInfo = this.rooms.find((room) => {
//     if (room.number === )
//   })
//   return this.roomInfo;
//   }
};

export default Hotel;