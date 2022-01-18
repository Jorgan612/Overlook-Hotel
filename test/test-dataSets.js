const customersData = [
  {
    "id": 1,
    "name": "Leatha Ullrich"
  },
  {
    "id": 2,
    "name": "Rocio Schuster"
  },
  {
    "id": 3,
    "name": "Kelvin Schiller"
  }
];

const bookingsData = [
  {
    "id": "5fwrgu4i7k55h16t6",
    "userID": 1,
    "date": "2022/01/15",
    "roomNumber": 2,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55h16t8",
    "userID": 2,
    "date": "2022/01/16",
    "roomNumber": 1,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55h16t9",
    "userID": 3,
    "date": "2022/01/18",
    "roomNumber": 2,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t7",
    "userID": 1,
    "date": "2022/01/14",
    "roomNumber": 3,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55h16t2",
    "userID": 2,
    "date": "2022/01/17",
    "roomNumber": 1,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55h16t1",
    "userID": 3,
    "date": "2022/01/19",
    "roomNumber": 3,
    "roomServiceCharges": []
  },
  // {
  //   "id": "5fwrgu4i7k55h16t1",
  //   "userID": 1,
  //   "date": "2022/01/196",
  //   "roomNumber": 4,
  //   "roomServiceCharges": []
  // }
];

const roomsData = [
  {
    "number": 1,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 358.4
  },
  {
    "number": 2,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 477.38
  },
  {
    "number": 3,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 491.14
  },
  {
    "number": 4,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 500.14
  }
];

export { customersData, bookingsData, roomsData };
