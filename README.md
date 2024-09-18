<p align="center">
  <a href="" rel="noopener">
    <img width=200px height=200px src="https://github.com/jones1230/Medi-sched/blob/main/logo.png" alt="Project logo">
  </a>
</p>

<h3 align="center">Medi-sched</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/jones1230/Medi-sched.svg)](https://github.com/jones1230/Medi-sched/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/jones1230/Medi-sched.svg)](https://github.com/jones1230/Medi-sched/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
  Medi-sched is an API designed for hospitals to handle patient registrations and appointment scheduling efficiently.
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Medi-sched is a full-stack API developed for hospital staff to manage patient registrations, update patient records, schedule appointments, and handle staff authentication. This system allows hospital administrators, doctors, and other staff to maintain a streamlined and secure workflow for outpatient department (OPD) operations.

Features include:
- Patient registration and data management (CRUD operations)
- Appointment scheduling with doctors
- Staff authentication with JWT and session management
- Admin privileges for authorized staff

## 🏁 Getting Started <a name = "getting_started"></a>

To get a local copy of the project up and running for development and testing purposes, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

Node.js MongoDB npm

bash


### Installing

Clone the repository:

```bash
git clone https://github.com/jones1230/Medi-sched.git
cd Medi-sched
```
Install dependencies:

```bash

npm install
```
Set up your .env file with the following variables:

```bash
SECRET_KEY=your_secret_key
REFRESH_KEY=your_refresh_key
MONGODB_URI=your_mongodb_connection_string
PORT=PORT
```
Start the development server:

```bash

npm start
```
To run the API locally, use http://localhost:3000.
🔧 Running the tests <a name = "tests"></a>

🎈 Usage <a name="usage"></a>
Endpoints
Patients

    GET /api/patients - Retrieve all patients
    GET /api/patients/:id - Retrieve a patient by ID
    POST /api/patients - Create a new patient
    PUT /api/patients/:id - Update patient data
    DELETE /api/patients/:id - Delete a patient

Appointments

    GET /api/appointments - Retrieve all appointments
    GET /api/appointments/:id - Retrieve an appointment by ID
    POST /api/appointments - Create a new appointment
    DELETE /api/appointments/:id - Delete an appointment

Staff Authentication

    POST /api/staff/signup - Sign up new hospital staff
    POST /api/staff/login - Log in staff and issue a token
    POST /api/staff/logout - Log out staff and blacklist token

Refresh Token

    POST /api/refresh - Refresh JWT tokens using a refresh token

🚀 Deployment <a name = "deployment"></a>

To deploy Medi-sched on a live system, ensure you have Node.js and MongoDB configured on your server. Clone the repository, set environment variables, and use a process manager like PM2 to keep the app running.

Example deployment setup:

bash

pm2 start app.js

⛏️ Built Using <a name = "built_using"></a>

    MongoDB - Database
    Express - Server Framework
    Node.js - Server Environment
    JWT - Token-based authentication
    bcrypt - Password hashing

✍️ Authors <a name = "authors"></a>

    @jones1230 - Idea & Initial work

See also the list of contributors who participated in this project.
🎉 Acknowledgements <a name = "acknowledgement"></a>

    Hat tip to anyone whose code was used
    ALX for inspiration
    StackOverflow for bug fixes
