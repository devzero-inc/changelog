# [Roadmap Voting App](https://github.com/devzero-inc/roadmap-voting-app)

## Overview
A platform that democratizes development by allowing users to vote on feature proposals, tracking development progress, and providing a clear view of the project's direction. It's designed to align product development with the community's most valued feedback.

![Alt Text](https://i.imgur.com/mJ9jW9E.png)

## Features
- Secure user authentication for a personalized experience.
- Influence development priorities through a voting system.
- Track feature progress from proposal to completion.
- Overview of upcoming, in-progress, and completed development items.


## Technologies   

- **Database + Auth service:** [Supabase](https://supabase.com/)
- **Backend + Frontend:** [Next.js](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)

## High Level Design

![Alt Text](https://i.imgur.com/MtVWN7J.jpeg)

Utilizes Supabase for authentication and data storage, with Next.js integrating backend and frontend for a unified, real-time user experience. This ensures dynamic updates reflecting community preferences in the product's development.

## Setup

### Prerequisites
- [Docker - 24.0.7](https://www.docker.com/)
### Installation

. Clone and set up with Docker:
```bash
git clone https://github.com/devzero-inc/roadmap-voting-app.git
cd roadmap-voting-app
docker compose up
```

2. Access: 
- App will be running on ```PORT:3000``` -> [http://localhost:3000/](http://localhost:3000/)