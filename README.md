<p align="center">
  <a href="" rel="noopener">
    <img width=200px height=120px src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJmaXMyMW8wMXA0aTdqejlqNWhjbDlsdHI2NDFjeXVpcnp3Z2ZrNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vybWlRniCXzZC/giphy.gif" alt="Project logo"></a>
</p>

<h3 align="center">Astro Portfolio Template</h3>
<p align="center" style="color: #000000">
  <a href="#">
    <img src="https://img.shields.io/badge/live_website-000?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Website"/>
  </a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/your-username/astro-portfolio-template/pulls)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the repository](#clone-the-repository)
  - [Install dependencies](#install-dependencies)
  - [Set up environment variables](#set-up-environment-variables)
  - [Start the development server](#start-the-development-server)
- [Pages](#pages)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Astro Portfolio Template

### 📖 About

The **Astro Portfolio Template** is a modern and minimalistic portfolio designed for developers, creatives, or anyone looking for a sleek way to showcase their work. It features:

- A **hero section** on the homepage to introduce yourself or your brand.
- A **contact page** with a working form powered by **Nodemailer**.
- An **about page** to display your projects or accomplishments.  
  This template is built with **Astro**, ensuring fast performance and optimized for SEO. It’s highly customizable, with all dynamic data imported from a single `data.ts` file for easy configuration.

---

### ⚡ Features

- **Modern UI**: Minimalist design with smooth **CSS animations**.
- **Three Subpages**:
  - `/` – Hero section with links or calls to action.
  - `/contact` – Contact form and essential information.
  - `/about` – Showcase your projects or experiences.
- **Customizable**: Modify content and styles effortlessly using `data.ts`.
- **Responsive Design**: Optimized for all devices.
- **Nodemailer Integration**: Send emails from the contact form.
- **TypeScript Support**: Ensures better code maintainability.

---

### 🛠️ Tech Stack

- **Astro** – Static site generator for fast builds.
- **Tailwind CSS** – For rapid and efficient styling.
- **shadcn/ui** – Pre-built, reusable UI components.
- **Lucide React** – Icon library for modern designs.
- **TypeScript** – Strongly typed development.
- **CSS Animations** – Smooth transitions and interactions.
- **Nodemailer** – Handles email functionality for the contact form.

---

## 💻 Installation

### ❕ Prerequisites

To run this project locally, ensure you have:

    - Node.js (v16 or later)
    - npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/your-username/astro-portfolio-template.git
cd astro-portfolio-template
```

### 2. Install dependencies

Run the following command to install the necessary packages:

```
npm install
```

or

```
yarn install
```

### 3. Set up environment variables

Create a .env file in the root directory and add the following environment variables for Nodemailer:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
```

### 4. Start the development server

Run the development server with the following command:

```
npm run dev
```

or

```
yarn dev
```

The application will now be accessible at http://localhost:3000.

## 📄 Pages

    1. Home (`/`)

    A sleek hero section with your name, title, and key links. Features an animated background and responsive design.

    2. Contact (`/contact`)

    Includes a form for users to send messages. The form uses Nodemailer to send emails directly to your inbox.

    3. About (`/about`)

    A page to showcase your projects, work history, or anything you want. Each project is styled using cards and can link to external resources like GitHub or live demos.

---

## 🎨 Customization

All the important content (e.g., name, bio, project details) is imported from the data.ts file. To update your portfolio:

    1. Open `src/data/data.ts`.
    2. Edit the fields as needed. Example:

```ts
export const portfolioData = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  about: 'Passionate developer creating scalable and user-friendly web applications.',
  projects: [
    {
      name: 'Project Name',
      description: 'A short description of the project.',
      link: 'https://github.com/your-username/project',
    },
  ],
  contactEmail: 'your-email@example.com',
};
```

    3. Save the file, and your changes will reflect on the site.

## 🚀 Deployment

This template is optimized for deployment on platforms like Vercel, Netlify, or any static hosting service. Here’s how to deploy on Vercel:

    1. Push your code to a GitHub repository.
    2. Go to Vercel, and log in or sign up.
    3. Create a new project and import your GitHub repository.
    4. Set the environment variables (e.g., SMTP_HOST, SMTP_USER) in the Vercel project settings.
    5. Deploy your site with a single click.

## 🛠 Contributing

Feel free to contribute to this project by:

    1. Forking the repository.
    2. Creating a new branch for your feature or fix.
    3. Making your changes and submitting a pull request.

## 🖤 License

This project is licensed under the MIT License. See the LICENSE file for more details.
