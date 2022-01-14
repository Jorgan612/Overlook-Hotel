import { expect } from 'chai';
import Hotel from '../classes/Hotel.js';
import Customer from '../classes/Customer.js';
import { customersData, bookingsData, roomsData } from './test-dataSets';

describe('Hotel', function() {

  let customer;
  let hotel;

  beforeEach(() => {
    customer = new Customer(customersData[0]);
    hotel = new Hotel(roomsData, bookingsData, customer);
  });

  it('It should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('It should instantiate an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('It should have rooms', function () {
    expect(hotel.rooms).to.be.an('array');
  });

  it('It should have bookings', function () {
    expect(hotel.bookings).to.be.an('array');
  });

  it('It should have customers', function () {
    expect(hotel.customers).to.deep.equal({ id: 1, name: 'Leatha Ullrich' });
  });

  it('It should have a current customers booking list', function () {
    hotel.getCurrentCustomerBookings(customer);
    expect(hotel.currentCustomerBookings).to.be.an('array');
  });

  // it('It should have bookings organized chronologically', function () {
  //   customer.getCurrentCustomerBookings(customer);
  //   expect(customer.currentCustomerBookings).to.deep.equal([
  //     {id: '5fwrgu4i7k55hl6t7', userID: 1, date: '2022/01/14', roomNumber: 3, roomServiceCharges: []},
  //     {id: '5fwrgu4i7k55h16t6', userID: 1, date: '2022/01/15', roomNumber: 2, roomServiceCharges: []}
  //   ]);
  // });
  //
  // it('It should calculate the total cost of all customer bookings', function () {
  //   customer.getCurrentCustomerBookings(customer);
  //   customer.calculateTotalCostOfAllCustomerBookings(customer);
  //   expect(customer.totalBookingCost).to.equal(968.52)
  // })


});
