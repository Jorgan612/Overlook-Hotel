class Customer {
  constructor(customersData) {
    this.id = customersData.id;
    this.name = customersData.name;
  }

getFirstName() {
  const firstName = this.name.split(' ');
  return firstName[0];
  }
}

export default Customer;
