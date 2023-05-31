# Convai React App

## Description

Convai is a React app that provides a user-friendly interface for interacting with a chatbot. There are several personality types and conversation styles to choose from. This readme file contains instructions on how to set up and run the app.

## Prerequisites

Before running the Convai React App, make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- nodemon (for running the backend server)

## Installation and Setup

1. Clone the repository to your local machine.

```
git clone <repository_url>
```

2. Navigate to the `convai` folder in the cloned repository.

```
cd convai
```

3. Install the required npm packages for the frontend.

```
npm install
```

4. Install nodemon globally (if not installed).

```
npm install -g nodemon
```

5. Start the React frontend server.

```
npm run start:frontend
```

6. Open another terminal and navigate to the `convai` folder.

```
cd convai
```

7. Start the backend server using nodemon.

```
nodemon server.js
```

## Usage

Once both the frontend and backend servers are running, you can access the Convai app by opening a web browser and entering the following URL:

```
http://localhost:3000
```

The app should load, and you can start interacting with it using the provided user interface.

## Troubleshooting

- If you encounter any issues while running the app, please make sure that you have followed all the installation and setup steps correctly.
- If the frontend server fails to start, ensure that there are no errors in the console output and that all the required dependencies are installed.
- If the backend server fails to start, check if nodemon is installed correctly and that there are no syntax errors or missing files in the server.js file.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This app was developed as part of a challenge.
