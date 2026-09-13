# Dev Stack

Dev Stack is a developer-focused web application for exploring different technologies and building a personal technology stack.Users can browse available technologies and add the ones they want to their own stack.They can also remove individual technologies or clear the entire stack.The app provides toast notifications and a loading skeleton for a better user experience.It has a clean and modern interface built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- Explore different technologies
- Add technologies to your personal stack
- Prevent duplicate technologies
- Remove individual technologies
- Remove all technologies
- Toast notifications for user actions
- Loading skeleton while data is loading
- Responsive and clean UI

## 🛠️ Built With

- React.js
- TypeScript
- Tailwind CSS
- React Toastify
- Vite

**🌐 Live Link:** [Live-Link](https://dev-stack-deventest.netlify.app/)

**💻 GitHub Repo:** [Github-Repo](https://github.com/tonmoyislam-deventest/dev-stack)

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript to create the UI.

### 2. What is the difference between props and state?

Props are used to pass data from a parent to a child, while state stores data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

useState stores and updates changing data, and it is used to manage the selected technology stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs a function after rendering, and when its dependencies change, the function runs again, so it is useful for fetching data dynamically based on changing states or conditions.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item and update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering shows different UI based on a condition, such as showing the empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props, and a child can communicate with the parent by calling a function passed through props.