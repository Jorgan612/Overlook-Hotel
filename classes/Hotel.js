import dayjs from 'dayjs';

class Hotel {
  constructor(roomsData, bookingsData, customersData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.customer = customersData;
    this.currentCustomerBookings;
    this.totalBookingCost;
    this.availableRooms;
    this.unavailableRooms;
    this.specificBookingDetails;
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

calculateTotalCostOfAllCustomerBookings(customer) {
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
  findRoomBookingDetails(roomNumber) {
    const bookingDetails = this.bookings.find((booking) => {
      return booking.roomNumber === roomNumber;
    })
    this.specificBookingDetails = bookingDetails;
  }
};

export default Hotel;
