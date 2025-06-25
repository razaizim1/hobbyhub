# 🎯 HobbyHub: A Local Hobby Group Organizer

HobbyHub is a user-friendly web application designed to help people **discover, join, and create local hobby-based groups** — from book clubs and hiking crews to painting circles and beyond. The platform fosters community building through shared interests and provides a space for hobbyists to connect and engage.

## 🚀 Live URL

[Visit the Live Site](https://b11a10-auth.web.app/)

---

## 📌 Project Theme & Purpose

HobbyHub encourages **social engagement through shared passions**. Whether you're looking to join a group of local runners or start a pottery workshop, HobbyHub makes it seamless. This modern React application is designed with user experience, performance, and accessibility in mind.

---

## ✨ Key Features

- 🧭 Explore a wide variety of hobby-based local groups.
- 📄 View detailed information: group description, location, schedule, etc.
- 🔐 Google authentication for secure and easy login.
- 🎯 Join or create your own hobby group.
- 🔄 Password reset functionality for convenience.
- 📱 Fully responsive and mobile-friendly design.
- 🍞 Toast notifications to enhance user experience.
- 🧩 SwiperJS-based featured group carousels.
- 📽️ Lottie animations to enrich visual appeal.
- 💬 Tooltips for helpful hints and descriptions.
- ✅ SweetAlert popups for cleaner confirmations and alerts.

---

## 🛠️ Technologies & Libraries Used

- **React.js** – Modern JavaScript library for dynamic UIs.
- **React Router** – Smooth navigation and protected routes.
- **Tailwind CSS** – Utility-first styling framework.
- **DaisyUI** – Tailwind component library for clean UI.
- **SwiperJS** – Touch slider library for responsive carousels.
- **React Tooltip** – Lightweight tooltips for UI feedback.
- **Lottie React** – Render animated vector illustrations.
- **SweetAlert2** – Stylish popup alerts for confirmation.
- **React Toastify** – Non-intrusive toast notifications.
- **Firebase** – Auth & backend services (Google login, Firestore, etc.).

---

## Setup and Installation

Follow these steps to set up the project locally:

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd b11a11-client-site
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root of the `b11a11-client-site` directory and add your Firebase configuration (if applicable) and any other client-side environment variables.

    ```
    # Example .env content (replace with your actual Firebase config)
    VITE_API_KEY=your_firebase_api_key
    VITE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_PROJECT_ID=your_firebase_project_id
    VITE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VITE_APP_ID=your_firebase_app_id
    ```

## Running the Application

To start the development server:

```bash
npm run dev
```

## 🔐 Environment Variables

To set up the project locally, create a `.env` file in the root directory and include your Firebase config: