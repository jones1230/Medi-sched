# Medi-sched

<p align="center">
  <a href="https://github.com/jones1230/Medi-sched" rel="noopener">
    <img width=200px height=200px src="https://github.com/jones1230/Medi-sched/blob/main/logo.png" alt="Project logo">
  </a>
</p>

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
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Running the Tests](#running-the-tests)
- [Deployment](#deployment)
- [Built Using](#built-using)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 About <a name = "about"></a>

Medi-sched is a full-stack API developed for hospital staff to manage patient registrations, update patient records, schedule appointments, and handle staff authentication. This system allows hospital administrators, doctors, and other staff to maintain a streamlined and secure workflow for outpatient department (OPD) operations.

## ✨ Features <a name = "features"></a>

- Patient registration and data management (CRUD operations)
- Appointment scheduling with doctors
- Staff authentication with JWT and session management
- Admin privileges for authorized staff

## 🏁 Getting Started <a name = "getting-started"></a>

These instructions will help you set up a copy of the project on your local machine for development and testing purposes.

### Prerequisites <a name = "prerequisites"></a>

Make sure you have the following installed:

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation <a name = "installation"></a>

1. Clone the repository:
   ```bash
   git clone https://github.com/jones1230/Medi-sched.git
   cd Medi-sched
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with the following variables:
   ```
   SECRET_KEY=your_secret_key
   REFRESH_KEY=your_refresh_key
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000`.

## 🎈 Usage <a name="usage"></a>

### API Endpoints <a name="api-endpoints"></a>

#### Patients
- `GET /api/patients` - Retrieve all patients
- `GET /api/patients/:id` - Retrieve a patient by ID
- `POST /api/patients` - Create a new patient
- `PUT /api/patients/:id` - Update patient data
- `DELETE /api/patients/:id` - Delete a patient

#### Appointments
- `GET /api/appointments` - Retrieve all appointments
- `GET /api/appointments/:id` - Retrieve an appointment by ID
- `POST /api/appointments` - Create a new appointment
- `DELETE /api/appointments/:id` - Delete an appointment

#### Staff Authentication
- `POST /api/staff/signup` - Sign up new hospital staff
- `POST /api/staff/login` - Log in staff and issue a token
- `POST /api/staff/logout` - Log out staff and blacklist token

#### Refresh Token
- `POST /api/refresh` - Refresh JWT tokens using a refresh token

## 🔧 Running the Tests <a name = "running-the-tests"></a>

To run the automated tests for this system, use the following command:

```bash
npm start
```

## 🚀 Deployment <a name = "deployment"></a>

To deploy Medi-sched on a live system:

1. Ensure you have Node.js and MongoDB configured on your server.
2. Clone the repository and set up environment variables.
3. Install dependencies: `npm install`

## ⛏️ Built Using <a name = "built-using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Node.js](https://nodejs.org/) - Server Environment
- [JWT](https://jwt.io/) - Token-based authentication
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## ✍️ Authors <a name = "authors"></a>

- [@AlexAtivui](https://github.com/AlexAtivui)
- [@jones1230](https://github.com/jones1230)

See also the list of [contributors](https://github.com/jones1230/Medi-sched/contributors) who participated in this project.

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Hat tip to anyone whose code was used
- ALX for inspiration
- Stack Overflow community for invaluable assistance
