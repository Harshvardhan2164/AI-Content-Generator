# Content.AI

## Table of Contents

  - [About The Project](about-the-project)
  - [Features](features)
  - [Technologies Used](technologies-used)
  - [Getting Started](getting-started)
      - [Prerequisites](prerequisites)
      - [Installation](installation)
      - [Environment Variables](environment-variables)
  - [Usage](usage)
  - [Authentication](authentication)
  - [Database](database)
  - [Contributing](contributing)
  - [License](license)
  - [Contact](contact)
  - [Acknowledgments](acknowledgments)


## About The Project

The AI Content Generator is a modern web application designed to assist users in creating various forms of content using the power of Artificial Intelligence. Built with a robust and scalable stack, this platform provides a seamless experience for generating, editing, and managing textual content. It leverages cutting-edge frontend and backend technologies to deliver a fast, secure, and intuitive user interface.

Whether you're a blogger, marketer, student, or anyone in need of quick content generation, this tool aims to streamline your creative process.


## Features

  - **AI-Powered Content Generation:** Generate diverse content types (e.g., articles, blog posts, social media captions, summaries) based on user prompts.
  - **Rich Text Editing:** Utilize the integrated Toast UI Editor for comprehensive content formatting, including rich text, markdown, and visual editing modes.
  - **Secure User Authentication:** Robust user login and registration powered by Clerk for secure access.
  - **Persistent Data Storage:** Store and retrieve user-generated content securely in a PostgreSQL database.
  - **Responsive Design:** Optimized for various devices, ensuring a consistent user experience on desktops, tablets, and mobile phones.
  - **Type-Safe Development:** Built with TypeScript for enhanced code quality, fewer runtime errors, and improved developer experience.
  - **Modern Web Stack:** Leverages Next.js for server-side rendering (SSR), static site generation (SSG), and API routes, providing optimal performance and SEO benefits.


## Technologies Used

This project is built using the following key technologies and libraries:

  - **Frontend Framework:**
      - [Next.js](https://nextjs.org/) (React Framework)
      - [TypeScript](https://www.typescriptlang.org/)
  - **Authentication:**
      - [Clerk](https://clerk.com/)
  - **Text Editor:**
      - [Toast UI Editor](https://ui.toast.com/tui-editor/)
  - **Database:**
      - [Neon PostgreSQL](https://neon.tech/) (Serverless PostgreSQL)
  - **ORM (Object-Relational Mapper):**
      - [Drizzle ORM](https://orm.drizzle.team/)
  - **Styling (Optional - Add if you use TailwindCSS, Styled Components, etc.):**
      - [Tailwind CSS](https://tailwindcss.com/) (Example - *replace with your actual styling library*)


## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:

  - Node.js (LTS version recommended)
  - npm
  - Git

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Harshvardhan2164/AI-Content-Generator.git
    cd AI-Content-Generator/ai-content-generator/
    ```

2.  **Install dependencies:**

    ```bash
    npm install --force
    ```

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables. Replace the placeholder values with your actual credentials.

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=sk_live_YOUR_CLERK_SECRET_KEY

# Neon PostgreSQL Database
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# AI Service API Key (e.g., OpenAI, Google Gemini, etc.)
# Replace with the actual environment variable name used in your code for the AI API Key
NEXT_PUBLIC_AI_API_KEY=YOUR_AI_SERVICE_API_KEY
```

**How to obtain these keys:**

  - **Clerk:** Sign up at [Clerk.com](https://clerk.com/) to get your publishable and secret keys.
  - **Neon PostgreSQL:** Create an account on [Neon.tech](https://neon.tech/) to provision a serverless PostgreSQL database and obtain your connection string.
  - **AI Service API Key:** Obtain an API key from your chosen AI provider (e.g., OpenAI, Google Gemini, etc.).

## Usage

Once the application is running, you can:

1.  **Register/Log in:** Use the authentication flow powered by Clerk to create an account or sign in.
2.  **Generate Content:** Navigate to the content generation section (e.g., a dashboard or editor page).
3.  **Input Prompts:** Provide clear prompts or instructions to the AI.
4.  **Edit Content:** Utilize the Toast UI Editor to refine and format the generated text.
5.  **Save Content:** Save your creations to the database for future access.
6.  **Manage Content:** View, edit, or delete your saved content from your personal dashboard.

## Authentication

This project uses [Clerk](https://clerk.com/) for a robust and secure authentication system. Clerk provides:

  - Easy-to-integrate authentication flows (sign-up, sign-in, profile management).
  - Support for various authentication methods (email/password, social logins).
  - Secure session management and user data handling.

Ensure your Clerk environment variables are correctly set for authentication to function.

## Database

The application utilizes [Neon PostgreSQL](https://neon.tech/) as its primary data store, offering a serverless, highly scalable, and performant relational database solution.

[Drizzle ORM](https://orm.drizzle.team/) is used to interact with the PostgreSQL database. Drizzle provides:

  - A type-safe and performant way to query and manipulate data.
  - Schema definition directly in TypeScript, simplifying database migrations and management.
  - Excellent support for PostgreSQL-specific features.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also open an issue with the tag "enhancement".

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

  - [Next.js Documentation](https://nextjs.org/docs)
  - [Clerk Documentation](https://clerk.com/docs)
  - [Toast UI Editor Documentation](https://ui.toast.com/tui-editor/)
  - [Neon Tech Documentation](https://neon.tech/docs/)
  - [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
  - [Gemini](https://ai.google.dev/)