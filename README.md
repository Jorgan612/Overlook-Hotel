# Title
Mod2 Overlook Hotel


## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Illustrations](#illustrations)
  - [Install + Setup](#set-up)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Abstract
The Overlook hotel booking app allows you to log in to your profile with a username and password to see your past, current and future bookings as well as make new bookings for available rooms within the hotel.

## Technologies
  - Javascript
  - eslint
  - node
  - Atom
  - WebPack
  - API
  - mocha/chai
  - Sass
  - Dayjs


## Illustrations

At the login screen a user can enter their username and password to log into their profile.
<img width="1440" alt="login-view" src="https://user-images.githubusercontent.com/83175748/149857261-0a0a9c70-b5e3-4ecd-8e4f-c145b7c32b47.png">

The customer's past, present and future bookings are displayed chronologically on the right-hand side of the dashboard. New bookings can be made in the book a room section.
![user-dashboard](https://user-images.githubusercontent.com/83175748/149857299-da97c26f-2940-43b8-a367-1daf9e72b8a4.png)


The calendar dropdown allows for an easy and convenient way to select a date. Additional options below the date field allow a customer to look for the availability of a specific room type.
![calendar-dropdown](https://user-images.githubusercontent.com/83175748/149857330-27284d17-21c6-4dc4-9da3-58a84c57eb04.png)

![date-selection](https://user-images.githubusercontent.com/83175748/149857344-5dcb1342-e8b2-465f-b7fe-9dd7e73acd58.png)

Available rooms will display once the `check availability` button is clicked.
![available-rooms](https://user-images.githubusercontent.com/83175748/149857351-c4876c03-1706-4445-887b-165c6aa9d315.png)

If no rooms are available a message will display notifying the customer to modify their search criteria.
![no-rooms](https://user-images.githubusercontent.com/83175748/149857885-c1154aaf-4d63-4436-8955-ed3ade36e0d5.png)

Once a new room to book has been found, the `Book Room` button can be selected to book the room and add it to the booking details section.
![customer-booking-updated](https://user-images.githubusercontent.com/83175748/149857364-53e0ca58-e0cf-4d63-b2a1-d7880db53183.png)



## Install + Setup
  - clone remote repository to your machine
  - clone local server
  - npm install
  - npm i dayjs
  - run local server in browser for display

## Contributors
  - [Jessica Organ](https://github.com/Jorgan612)

## Wins
  - utilizing helper functions to display information in an orderly fashion


## Challenges + Improvements
  - Getting the APIs to work.
  - Improvements: Build out manager view.


## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/overlook.html)
