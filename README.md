# Cooking-AI

This is a Next.js web application that generates cooking recipes using a locally running AI model (Ollama). The project uses Shadcn as the UI framework and Tailwind CSS for styling. It is built with TypeScript and containerized using Docker.

> ⚠️ **Warning**: This project is a **Proof of Concept (POC)**.  
> The code is not optimized for production, and not all frontend features are fully implemented on the backend.
> It is also possible to run Ollama with **GPU acceleration** (e.g., NVIDIA RTX cards via Docker), which can greatly improve performance, but setup instructions are **not included here**.


## Features

- **Next.js**: A React framework for building modern web applications.
- **Shadcn**: A UI framework for building responsive and accessible user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: Strongly-typed JavaScript to improve code quality and maintainability.
- **Ollama AI**: Local AI model, used for generating cooking recipes.
- **Docker**: Containerized application for easy setup and deployment.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/x0ze/Cooking-AI.git
    cd Cooking-AI
    ```
2. **Start the containers:**

    Use Docker Compose to start the containers:

    ```bash
    docker-compose up
    ```

    This will create and start two containers:
    - **Next.js Application**: Running on port `3000`.
    - **Ollama AI**: Running internally on port `8080` (no direct access required, the LLM such as `llama3` is pulled automatically at startup).

3. **Access the application:**

    Once the containers are up and running, you can access the web application in your browser at:

    ```plaintext
    http://localhost:3000
    ```
    ![](demo/console.png)

## Usage

- Navigate through the UI to generate recipes.  
  ![](demo/home.gif)
- Interact with the form to input ingredients or other preferences.  
  ![](demo/settings.gif)
- View the generated recipe with instructions (the recipe given in the example was generated with llama3 in 2024).  
  ![](demo/recipe.gif)
