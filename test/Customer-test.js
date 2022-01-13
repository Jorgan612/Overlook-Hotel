import { expect } from 'chai';
import Customer from './classes/Customer.js';
import { customersData, bookingsData, roomsData } from './test-dataSets';

describe('Customer', function() {

  let customer;

  beforeEach(() => {
    customer = new Customer(customersData)
  })

  it('It should be a function', function() {
    expect(Customer).to.be.a('function');
  });
});
