# [Internal Employee Directory](https://github.com/devzero-inc/internal-employee-directory)


## Overview
A modern, full-stack web application for managing employee information. Utilizes MongoDB, Node.js, Express.js, React.js, and Tailwind CSS for a responsive and interactive experience.

![Alt Text](https://i.imgur.com/CIW6oSl.png)

## Features
- Manage, view, and visualize employee records and organizational hierarchy.
- Quick search and filters.
- Responsive and accessible on all devices.
- Secure with role-based access control.


## Technologies

- **Database:** [MongoDB](https://www.mongodb.com/)
- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [Mongoose ODM](https://mongoosejs.com/)
  
- **Frontend:** [React.js](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)



## High Level Design

![Alt Text](https://i.imgur.com/S7Fwpg1.jpeg)

Frontend requests data through backend API endpoints, which interact with the MongoDB database to fetch and return data, ensuring a seamless user experience.

## Setup

### Prerequisites
- [Docker - 24.0.7](https://www.docker.com/)
### Installation

1. Clone and set up with Docker:
```bash
git clone https://github.com/devzero-inc/internal-employee-directory.git
cd internal-employee-directory
docker compose up -d
```

2. Access:

- Backend: [http://localhost:8000/](http://localhost:8000/)
- Frontend: [http://localhost:5173/](http://localhost:5173/)

Explore the application at [http://localhost:5173/](http://localhost:5173/).