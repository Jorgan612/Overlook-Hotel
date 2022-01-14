import { expect } from 'chai';
import Hotel from '../classes/Hotel.js';
import Customer from '../classes/Customer.js';
import { customersData, bookingsData, roomsData } from './test-dataSets';

describe('Hotel', function() {

  let customer;
  let hotel;

  beforeEach(() => {
    customer = new Customer(customersData[0], bookingsData, roomsData);
    hotel = new Hotel(customer, bookingsData);
  });

  it('It should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('It should instantiate an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  //
  // it('It should have rooms', function() {
  //   expect(hotel.rooms).to.equal(roomsData);
  // });


});
