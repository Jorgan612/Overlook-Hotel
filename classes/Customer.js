class Customer {
  constructor(customersData) {
    this.id = customersData.id;
    this.name = customersData.name;
    this.firstName;
  }

getFirstName() {
  const firstName = this.name.split(' ');
  this.firstName = firstName[0];
  console.log('firstName in getFirstName----', this.firstName)
  console.log(this.firstName)
  }
}

export default Customer;
