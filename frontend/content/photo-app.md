# [Photo Upload Directory](https://github.com/devzero-inc/photo-upload-app/)

## Overview
A streamlined platform for easy photo uploads and management, designed for individuals to store, organize, and access their photos in the cloud. With its intuitive interface and reliable performance, your memories are always a few clicks away.

![Alt Text](https://i.imgur.com/fYc1fAd.png)

## Features
- Sophisticated photo management for organized, easily accessible memories.
- Responsive design for use on various devices and screen sizes.


## Technologies   

- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Backend + Frontend:** [Next.js](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)



## High Level Design

![Alt Text](https://i.imgur.com/q60nFCu.jpg)

Leverages Next.js for a unified backend and frontend, using PostgreSQL for image data storage. This setup ensures seamless storage, API interactions, and dynamic UI updates for an efficient and intuitive experience.

## Setup

### Prerequisites
- [Docker - 24.0.7](https://www.docker.com/)
### Installation

. Clone and set up with Docker:
```bash
git clone https://github.com/devzero-inc/photo-upload-app.git
cd photo-upload-app
docker compose up -d
```

2. Access: 
- App will be running on ```PORT:3000``` -> [http://localhost:3000/](http://localhost:3000/)