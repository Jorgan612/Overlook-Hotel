import { expect } from 'chai';
import Hotel from '../classes/Hotel.js';
import Customer from '../classes/Customer.js';
import { customersData, bookingsData, roomsData } from './test-dataSets';

describe('Hotel', function() {

  let customer;
  let customer2;
  let hotel;
  let hotel2;

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

  it('It should have a customer', function () {
    expect(hotel.customer).to.deep.equal({ id: 1, name: 'Leatha Ullrich' });
  });

  it('It should have a current customers booking list', function () {
    hotel.getCurrentCustomerBookings(hotel);
    expect(hotel.currentCustomerBookings).to.be.an('array');
  });

  it('It should have bookings organized chronologically', function () {
    hotel.getCurrentCustomerBookings(hotel);
    expect(hotel.currentCustomerBookings).to.deep.equal([
      {id: '5fwrgu4i7k55hl6t7', userID: 1, date: '2022/01/14', roomNumber: 3, roomServiceCharges: []},
      {id: '5fwrgu4i7k55h16t6', userID: 1, date: '2022/01/15', roomNumber: 2, roomServiceCharges: []}
    ]);
  });

  it('It should calculate the total cost of all of a customers bookings', function () {
    hotel.getCurrentCustomerBookings(hotel);
    hotel.calculateTotalCostOfAllCustomerBookings(hotel);
    expect(hotel.totalBookingCost).to.equal(968.52);
  });

  it('It should check room availability', function () {
    hotel.checkRoomAvailability('2022/01/15', 'suite');
    expect(hotel.availableRooms).to.be.an('array');
    expect(hotel.availableRooms.length).to.equal(1);
  })

  it('It should collect booking details', function  () {
    hotel.collectBookingDetails(1, '2022/01/15', '4');
    expect(hotel.newBookingDetails).to.be.an('object');
    expect(hotel.newBookingDetails).to.deep.equal({userID: 1, date: '2022/01/15', roomNumber: 4})
  })

});
