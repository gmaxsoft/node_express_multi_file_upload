# Node.js | Express.js Multi-File Upload Example

This is a sample project demonstrating how to implement multiple file uploads in a Node.js application using Express.js. The project showcases a simple server setup to handle file uploads via a web form or API, utilizing popular middleware such as `multer` for file handling.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Features
- Upload multiple files simultaneously using a web form or API.
- Built with Node.js and Express.js.
- Uses `multer` middleware for handling multipart/form-data.
- Simple and lightweight example for learning purposes.

## Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A web browser or a tool like [Postman](https://www.postman.com/) for testing the API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gmaxsoft/node_express_multi_file_upload.git
   cd node_express_multi_file_upload

Clone the repository:
bashgit clone https://github.com/gmaxsoft/node_express_multi_file_upload.git
cd node_express_multi_file_upload

Install dependencies:
bashnpm install

(Optional) Configure environment variables:

Create a .env file in the project root if needed (e.g., for specifying upload directories or port numbers).
Example .env:
textPORT=3000
UPLOAD_DIR=./uploads


### Usage

Start the server:
bashnpm start
The server will run on http://localhost:3000 (or the port specified in your .env file).
Access the file upload interface:

Open your browser and navigate to http://localhost:3000 to use the web form (if provided in the project).
Alternatively, use an API client like Postman to send a POST request with multipart/form-data to the /upload endpoint.


Upload files:

Select multiple files in the web form and submit.
For API usage, send a POST request with the files field containing your files.


### Example
Using the Web Form

Navigate to http://localhost:3000.
Select multiple files using the file input field.
Click "Upload" to send the files to the server.
The server will save the files to the configured upload directory (e.g., ./uploads).

Using an API Client (e.g., Postman)

Create a POST request to http://localhost:3000/upload.
Set the request type to multipart/form-data.
Add a field named files and select multiple files.
Send the request and check the server response.

### Example Code (Server-Side)
javascriptconst express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
  res.send('Files uploaded successfully!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add new feature").
Push to the branch (git push origin feature-branch).
Create a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
