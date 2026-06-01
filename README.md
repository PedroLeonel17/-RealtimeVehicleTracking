# RealtimeVehicleTracking

This repository contains a Proof of Concept (PoC) for an event-driven middleware designed to ingest, validate, and orchestrate vehicle data in real-time. 

The architecture simulates a modernization scenario where a legacy system coexists with a new event-sourced database.

## Architecture Overview

Based on the system design, the application acts as a Middleware (Subscriber + Orchestrator) that handles the following workflow:

1. Event Ingestion: A frontend application (Tablet/Panel) publishes a VEICULO/INSERT event containing vehicle details (license plate, chassis, model, etc.) via MQTT Broker.
2. Orchestration & Validation: The middleware receives the event, normalizes the payload, and queries a legacy Oracle database to check if the vehicle already exists.
3. Persistence: 
   * The event is persisted into a PostgreSQL database acting as the new system's Event Store.
   * (Optional) If required for temporary consistency or if the legacy system remains the source of truth, the middleware also syncs the data back to the Oracle registry.
4. Monitoring: A Dashboard reads from the synchronized data to display real-time status, vehicle lists, and integration history.

## Tech Stack

* Broker: MQTT
* Orchestrator/Middleware: C# / .NET
* Databases: PostgreSQL (New Event Store) & Oracle (Legacy Database)
* Data Format: JSON

## Purpose

The goal of this project is to test event-driven architecture patterns, data normalization, legacy system integration, and dual-write/event-sourcing persistence strategies.
