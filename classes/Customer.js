class Customer {
  constructor(customersData, bookings) {
    this.id = customersData.id;
    this.name = customersData.name;
    this.bookings = bookings;
// bookings currently has ALL of the customers in test datas bookings
  }
getFirstName() {
  // do you need to figure out a way to match customer
  // id's to determine correct customer name?
  // customersData on line 13 is undefined.

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
