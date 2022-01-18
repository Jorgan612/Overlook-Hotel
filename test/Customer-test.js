import { expect } from 'chai';
import Customer from '../classes/Customer.js';
import Hotel from '../classes/Hotel.js';
import { customersData, bookingsData, roomsData } from './test-dataSets';

describe('Customer', function() {

  let customer;
  let customer2;
  let hotel;

  beforeEach(() => {
    customer = new Customer(customersData[0]);
    customer2 = new Customer(customersData[1]);
    hotel = new Hotel(roomsData, bookingsData);

  });

  it('It should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('It should instantiate a new instance of Customer', function() {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('It should have an id', function() {
    expect(customer.id).to.be.an('number');
    expect(customer.id).to.equal(1);
  });

  it('It should have a name', function () {
    expect(customer.name).to.be.a('string');
    expect(customer.name).to.equal('Leatha Ullrich');
  });

  it('It should be able to take in a different name', function () {
    expect(customer2.name).to.equal('Rocio Schuster');
  });
});
