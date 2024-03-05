# Changelog

### Overview
***
The Changelog is a tool designed to track the evolution of software applications from their initial deployment through all subsequent updates, modifications, and feature additions. It's built on the principle that understanding an application's history is crucial for developers, users, and stakeholders. This project supports Markdown, enabling documentation that's both accessible and easy to navigate. It leverages a contemporary stack comprising React, Bun.js, Bao.js, and CockroachDB to deliver a robust platform for tracking the evolution of software projects.

![Screenshot 2024-02-29 160122](https://github.com/devzero-inc/changelog/assets/93814858/1aaa4ef6-7414-4c21-9100-adb40270bdc5)

### Features
***
- **Comprehensive History Tracking:** Every step of the application's journey is logged, including updates, deletions, and modifications, ensuring nothing is lost in the course of development.<br>
- **Markdown Support:** Leveraging Markdown for documentation allows for clear, structured, and visually appealing logs.<br>
- **User-Friendly Interface:** Designed with ease of use in mind, making it simple for developers of all skill levels to maintain a detailed history of their projects.<br>

## Technology Stack

### Database

- **[CockroachDB](https://www.cockroachlabs.com/)**: A cloud-native, distributed SQL database designed for scalability and resilience. CockroachDB ensures strong consistency, distributed transactions, and seamless scaling, making it an ideal choice for our application's data storage and management needs.

### Backend

- **[Bun.js](https://bun.sh/)**: A modern JavaScript runtime like Node.js, designed for speed and efficiency. Bun.js powers our backend, offering fast execution, built-in package management, and comprehensive support for web APIs. It's chosen for its impressive performance metrics and simplicity in handling server-side logic.

### Middleware

- **[Bao.js](https://baojs.org/)**: An efficient middleware framework for Bun.js applications, focusing on simplicity and speed. Bao.js facilitates the smooth integration between our backend and frontend, ensuring secure and rapid data processing and API calls.

### Frontend Framework

- **[React.js](https://react.dev/)**: A declarative, efficient, and flexible JavaScript library for building user interfaces. Our application leverages React.js to create dynamic, interactive web pages that improve the user experience with real-time updates and responsive design.

## Deployment

Our application is containerized using **[Docker](https://www.docker.com/)**. Docker simplifies deployment by packaging the application and its environment into containers. This ensures consistency across different development and production environments, making deployment efficient and scalable. Docker's containerization allows us to easily manage and deploy our application's various components, including the backend, middleware, and database services.

## Additional Information

- **WSL (Windows Subsystem for Linux)**: Given Bun.js's requirement for a Linux environment, Windows users can leverage WSL to run Linux binaries natively on Windows. This setup is crucial for developers working on Windows to ensure compatibility and performance when working with Bun.js and other Linux-dependent technologies.
 
- **Linting with ESLint**: Our project uses ESLint for code linting to maintain code quality and consistency. Since Bun.js does not currently support built-in linting tools or integrate directly with ESLint, we rely on Node.js to run ESLint. This ensures our development practices include comprehensive lint analysis, adhering to our coding standards.


 ### High Level Design
 ---

![HLD Design Diagram for Changelog](https://github.com/devzero-inc/changelog/assets/93814858/fb6bad8b-ca74-4058-a389-943d2d58e56f)

## Working

### User Interaction

1. **Frontend Interaction**: Users interact with the Changelog application through a React-based frontend. This setup enables a responsive and interactive user experience, allowing users to effortlessly view changelogs, and navigate through different project histories.

### System Operations

2. **Backend Communication**: User actions trigger requests to the backend, powered by Bun.js. Bun.js facilitates efficient handling of these requests with its high-performance capabilities.

3. **Middleware Processing**: Bao.js, serving as the middleware, seamlessly connects the frontend to the backend. It processes requests, performs necessary validations or transformations, and routes them to the appropriate services within the backend.

### Data Management and Responses

4. **Database Interactions**: The backend interacts with CockroachDB for all data storage and retrieval operations. Whether it’s managing changelog entries or fetching updates CockroachDB ensures consistent, secure, and scalable data management.

6. **Response Handling**: Once the backend has processed a request and performed the necessary data operations, a response is generated and sent back through the middleware to the frontend. The React application then dynamically updates the user interface to reflect the changes or display the requested data, ensuring a seamless user experience.
   
This workflow depicts our comprehensive, efficient, and user-friendly platform for tracking software project histories through changelogs.

## Installation

### Prerequisites
- Docker

Run locally: 
```bash
git clone https://github.com/devzero-inc/changelog.git
cd changelog
docker compose up
```
App will be running on ```PORT:4173``` -> [http://localhost:4173/](http://localhost:4173/)

Now just go to [http://localhost:4173/](http://localhost:4173/) and explore the application.

