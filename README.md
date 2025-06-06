# OpenAI Chatbox Web Application

This project is a Proof of Concept (PoC) for building a web application that integrates an OpenAI-powered chatbox with user management services provided by Clerk.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates the integration of OpenAI's language model capabilities into a web application, allowing users to interact with an AI-powered chatbox. The application also incorporates Clerk for user authentication and management, ensuring a secure and personalized user experience.

## Features

- **AI-Powered Chatbox**: Engage in conversations with an AI model powered by OpenAI.
- **User Authentication**: Secure user login and registration using Clerk.
- **User Management**: Manage user profiles and sessions with ease.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hoangvubrvt/gptgenius.git
   cd gptgenius

   ```
2. **Install dependencies****:**

```bash
npm install
```

3. **Set up environment variables**:
   Create a **.env** file in the root directory and add your OpenAI and Clerk API keys:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   PERPLEXITY_API_TOKEN=your_perplexity_api_token
   ```

   Replace **your\_clerk\_publishable\_key**, **your\_clerk\_secret\_key**, and **your\_perplexity\_api\_token** with your actual API keys and tokens.
4. **Run the application**

   ```
   npm start
   ```

## Usage

**Once the application is running, you can access it in your web browser at **http://localhost:3000**. Register or log in using Clerk, and start interacting with the AI chatbox.**

## Technologies Used

**OpenAI**: For AI language model integration.

**Clerk**: For user authentication and management.

**Node.js**: Backend runtime environment.

**React**: Frontend library for building user interfaces.

## Contributing

**Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.**

## License

This project is licensed under the MIT License. See the [LICENSE](MITLicense.txt) file for more details.
