import { expect } from 'chai';
import Hotel from '../classes/Hotel.js';
import { customersData, bookingsData, roomsData } from './test-dataSets';

describe('Hotel', function() {
  let hotel;
  let customer;

  beforeEach(() => {
    customer = new Customer(customersData[0], bookingsData);
    hotel = new Hotel(customer, bookingsData, roomsData);
  });

  it('It should be a function', function() {
    expect(Hotel).to.be.a('function');
  });



});
