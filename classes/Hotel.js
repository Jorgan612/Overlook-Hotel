class Hotel {
  constructor(roomsData, bookingsData, customersData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.customers = customersData;
    this.currentCustomerBookings;
  }

  getCurrentCustomerBookings(customerInfo) {
    console.log(customerInfo)
    const currentCustomerBookings = customerInfo.bookings.filter((booking) => {
      if (this.customers.id === booking.userID) {
        return booking;
      }
    }).sort((a, b) => {
      if (a.date < b.date) {
        return - 1;
      }
      if (a.date > b.date) {
        return 1;
      }
      else {
        return 0;
      }
    })
      this.currentCustomerBookings = currentCustomerBookings;
      console.log(this.currentCustomerBookings)
      return currentCustomerBookings;
    }



  // getRoomDetails() {
  //   this.roomInfo = this.rooms.find((room) => {
  //     if (room.number === )
  //   })
  //   return this.roomInfo;
  // }
};

export default Hotel;
