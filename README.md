# Game Development Company Website

This website was built using the MERN stack (MongoDB, Express, React, Node.js) and hosted on a self-configured home server, ensuring security, stability, and performance for public traffic.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Server Setup](#server-setup)
  - [Running the App Locally](#running-the-app-locally)
  - [Running the App in Production](#running-the-app-in-production)
- [Project Structure](#project-structure)
- [Deployment and Uptime Strategy](#deployment-and-uptime-strategy)
- [License](#license)

## Features

- **Showcasing Projects**: Highlights various game development projects such as "The Backrooms: Unseen Tapes."
- **Blog Integration**: A blog to engage the community, share updates on game development, and promote upcoming releases.
- **Role-playing Web Game**: Interactive web game to drive user engagement.
- **Responsive Design**: Optimized for various devices to ensure a seamless experience for all visitors.

## Technologies

This project was built using the following technologies:

- **MongoDB**: For storing project data and blog posts.
- **Express.js**: Backend framework for handling server-side logic and API routes.
- **React.js**: Frontend framework for building dynamic user interfaces.
- **Node.js**: Server-side JavaScript runtime for handling HTTP requests and serving the React frontend.
- **PM2**: Process manager to ensure high uptime and monitor the Node.js application.
- **Caddy**: Web server and reverse proxy for handling HTTPS and domain management.

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes. For production setup, see the [Running the App in Production](#running-the-app-in-production) section.

### Prerequisites

Make sure you have the following software installed:

- Node.js (v18 LTS recommended)
- npm (Node Package Manager, comes with Node.js)
- MongoDB (Set up locally or using a cloud service like MongoDB Atlas)
- PM2 (For production deployment, instructions below)
- Git (To clone the repository)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/gamedev-company-website.git
    cd gamedev-company-website
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the `backend` directory with the following information:

    ```bash
    MONGO_URI=mongodb://localhost:27017/yourdbname
    PORT=5000
    ```

    Adjust the `MONGO_URI` according to your MongoDB setup.

5. Start the development server:

    - Backend (Express server):

        ```bash
        cd backend
        npm run dev
        ```

    - Frontend (React app):

        ```bash
        cd ../frontend
        npm start
        ```

    The backend will run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## Server Setup

This section explains how to set up and run the website on a home server or a production environment. The production setup uses PM2 and Caddy to ensure constant uptime and HTTPS support.

### Running the App Locally

- Backend: In the `backend` directory, start the Express server:

    ```bash
    npm run dev
    ```

    Make sure MongoDB is running on your local machine or configured to connect to a cloud instance.

- Frontend: In the `frontend` directory, start the React development server:

    ```bash
    npm start
    ```

### Running the App in Production

- **PM2 Process Management**: PM2 ensures that your Node.js application stays online continuously, even in case of crashes or system reboots.

    1. Install PM2 globally:

        ```bash
        npm install pm2 -g
        ```

    2. Start the backend using PM2:

        ```bash
        cd backend
        pm2 start server.js --name "Mayuns-Site" --watch
        ```

    3. Save the process list so it automatically restarts on reboot:

        ```bash
        pm2 save
        ```

    4. Set up PM2 to start on boot:

        On Windows, use the Task Scheduler to run PM2 with the `pm2 resurrect` command at startup (refer to the PM2 startup instructions in the [Deployment and Uptime Strategy](#deployment-and-uptime-strategy) section).

- **Caddy Configuration**: Caddy serves as the reverse proxy and HTTPS handler for this application.

    1. Create a `Caddyfile`:

        ```caddyfile
        yourdomain.com {
            reverse_proxy localhost:5000
        }
        ```

    2. Start Caddy:

        ```bash
        caddy run --config Caddyfile
        ```

- **MongoDB Setup**: Ensure MongoDB is running either locally or in the cloud. You can configure your `.env` file with the correct `MONGO_URI`.

The markdown file you've provided has a few formatting issues that might affect its presentation, especially in terms of proper markdown syntax for heading hierarchy and list indentation. Here are the identified issues and suggestions for correction:

1. **Heading Consistency:**
   - The section "Deployment and Uptime Strategy" appears to be a major section like "Project Structure" but lacks the proper heading format. It should be prefixed with `##` to maintain the hierarchy and visual consistency in the markdown document.

2. **List Indentation:**
   - The points under "Deployment and Uptime Strategy" should be formatted as a bulleted list to improve readability and maintain consistency with other list usages in the document. Each item should begin with a dash (`-`) and proper indentation.

Here’s how you can revise the sections:

```markdown
## Project Structure

Here’s a brief overview of the project structure:

```bash
.
├── backend         # Contains the Express server and API logic
│   ├── models      # Mongoose models for MongoDB collections
│   ├── routes      # API routes (e.g., for projects, blog posts)
│   └── server.js   # Main entry point for the Express app
├── frontend        # React frontend that interacts with the API
│   ├── src         # React components and pages
│   └── public      # Static assets (images, CSS, etc.)
├── Caddyfile       # Caddy reverse proxy configuration file
└── README.md       # Project documentation
```

## Deployment and Uptime Strategy

This project was designed for high uptime and reliability, with a focus on self-hosting. The following strategies were employed:

- **PM2:** Used to manage the backend server process. PM2 ensures that the app stays online by restarting it automatically in case of crashes and managing restarts after system reboots.
    - **Monitoring:** PM2’s built-in monitoring tools (`pm2 monit`) help track CPU, memory usage, and logs.

- **Caddy:** Acts as a reverse proxy to handle public traffic and SSL termination with automatic HTTPS via Let's Encrypt.

- **OS-level scripts:** Additional OS scripts and services (such as Task Scheduler on Windows) ensure that PM2 and the server are restarted upon system boot.
```
