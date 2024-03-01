# [Todo List App](https://github.com/devzero-inc/roadmap-voting-app)

## Overview
A minimalist task management app focused on essential features: adding, removing, updating, and marking tasks as done. It's designed for simplicity, helping users manage daily chores, work assignments, or personal goals in a clutter-free environment.

![Alt Text](https://i.imgur.com/Vi4JNhm.png)

## Features

- **Add Task:** Simple task addition for tracking new duties or ideas.
- **Remove Task:** Clean and focused list maintenance by removing tasks.
- **Update Task:** Modify task details as priorities or deadlines change.
- **Mark as Done:** Visual progress tracking by marking tasks completed.

## High Level Design
![Alt Text](https://i.imgur.com/YtRFVzB.png)

The Todo-List-Nuxt-App delivers a streamlined task management experience, powered by Nuxt.js for the frontend, and a robust Backend API connected to a MySQL database. Utilizing a clear schema, the app enables users to effortlessly manage their tasks with CRUD operations. Interactions from the frontend trigger API calls, ensuring the UI is consistently synchronized with the backend, thus providing a dynamic and responsive environment for the users to track and update their tasks in real time.

## Technologies   

- **Database:** [MySQL](https://www.mysql.com/)
- **Backend + Frontend:** [Nuxt.js](https://nuxt.com/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)

## Setup

### Prerequisites
- [Docker - 24.0.7](https://www.docker.com/)
### Installation

. Clone and set up with Docker:
```bash
git clone https://github.com/devzero-inc/to-do-list.git
cd to-do-list
docker compose up
```

2. Access: 
- App will be running on ```PORT:3000``` -> [http://localhost:3000/](http://localhost:3000/)