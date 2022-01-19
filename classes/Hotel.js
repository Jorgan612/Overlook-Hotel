import dayjs from 'dayjs';

class Hotel {
  constructor(roomsData, bookingsData, customer) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    // this.allCustomers = customersData;
    this.customer = customer;
    this.currentCustomerBookings;
    this.totalBookingCost;
    this.availableRooms;
    this.unavailableRooms;
  }

getCurrentCustomerBookings() {
  const currentCustomerBookings = this.bookings.filter((booking) => {
    if (this.customer.id === booking.userID) {
      return booking;
    }
  }).sort((a, b) => {
    if (a.date < b.date) { return -1 }
    if (a.date > b.date) { return 1 }
    else { return 0 };
  })
    this.currentCustomerBookings = currentCustomerBookings;
  }

calculateTotalCostOfAllCustomerBookings() {
  const customerTotalBookingCost = this.currentCustomerBookings.reduce((acc, booking) => {
    this.rooms.forEach((room) => {
      if (room.number === booking.roomNumber) {
        acc += room.costPerNight;
      }
    })
    return acc;
  }, 0);
    this.totalBookingCost = Number(customerTotalBookingCost.toFixed(2));
  }

  checkRoomAvailability(date, roomType) {
    this.availableRooms = [];
    this.unavailableRooms = [];
    const filterAvailableRooms = this.bookings.filter((booking) => {
      if (booking.date === date) {
        this.unavailableRooms.push(booking.roomNumber)
      }
    })
    this.rooms.forEach((room) => {
      if (this.unavailableRooms.includes(room.number)) {
        return;
      } else if (roomType === 'all') {
        this.availableRooms.push(room);
      } else if (roomType === 'residential suite' && room.roomType === 'residential suite') {
        this.availableRooms.push(room);
      } else if (roomType === 'suite' && room.roomType === 'suite') {
        this.availableRooms.push(room);
      } else if (roomType === 'single room' && room.roomType === 'single room') {
        this.availableRooms.push(room);
      } else if (roomType === 'junior suite' && room.roomType === 'junior suite') {
        this.availableRooms.push(room);
      }
    })
  }
};

export default Hotel;
