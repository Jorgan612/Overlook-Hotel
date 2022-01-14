class Customer {
  constructor(customersData, bookings) {
    this.id = customersData.id;
    this.name = customersData.name;
    this.bookings = bookings;
    this.currentCustomerBookings;
    this.totalBookingCost;
// bookings currently has ALL of the customers in test datas bookings
  }

getCurrentCustomerBookings(customer) {
  const currentCustomerBookings = this.bookings.filter((booking) => {
    if (this.id === booking.userID) {
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
    return currentCustomerBookings;
  }

calculateTotalCostOfAllCustomerBookings() {
  
}
getFirstName() {
  // do you need to figure out a way to match customer
  // id's to determine correct customer name?
  // customersData in below iterator is undefined.

  // const firstName = customersData.find((customer) => {
  //   if (customer.id === id) {
  //     return customer;
  //   }
  // })
  // return firstName.name.split(' ')[0]
  const firstName = this.name.split(' ');
  return firstName[0];
}

}

export default Customer;
