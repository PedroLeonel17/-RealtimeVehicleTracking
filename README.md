# RealtimeVehicleTracking - Backend

This repository contains the backend service for the RealtimeVehicleTracking project. It is a Node.js and Express application designed to handle routes, controllers, and database interactions for vehicle data orchestration.

## Project Structure

* `server.js` & `app.js`: Application entry points and configuration.
* `routes/`: Express route definitions (`veiculo.js`, `teste.js`).
* `controllers/`: Business logic and request handling (`controller_veiculos.js`, `controller_teste.js`).
* `Repositories/`: Data access layer and database queries (`testeDBRepo.js`).

## Tech Stack

* Runtime: Node.js
* Framework: Express
* Language: JavaScript

## How to Run

1. Clone the repository.
2. Create a `.env` file based on `.env.example` and fill in your credentials.
3. Install dependencies:
```bash
   npm install