# Mapty - Workout Tracking Application

## Overview

**Mapty** is a modern workout tracking application that allows users to log and visualize their running and cycling workouts on an interactive map. Built with **JavaScript (ES6+), Leaflet.js, and Local Storage**, Mapty provides an intuitive way to track workout progress and analyze fitness activities.

This project is heavily focused on **Object-Oriented Programming (OOP)** principles in JavaScript, utilizing ES6 **classes, inheritance, and encapsulation** to manage workout data efficiently. The architecture follows a structured approach to handling user interactions and data persistence.

## Features

### 📍 Interactive Map

- Utilizes **Leaflet.js** to display an interactive map where users can log their workouts.
- Users can click on the map to set the workout location.

### 🏃‍♂️ Workout Logging

- Supports **Running** and **Cycling** workout types.
- Users can input workout details such as **distance, duration, cadence, and elevation gain**.
- Automatically calculates **pace (for running)** and **speed (for cycling)**.

### 📊 Workout List & Filtering

- Displays a list of logged workouts with details like **time, location, and statistics**.
- Clicking on a workout in the list **zooms to the corresponding map location**.

### 💾 Data Persistence

- Uses **Local Storage** to save workouts, ensuring data is retained even after refreshing the page.

### 🔄 Sorting & Interactivity

- Users can **sort workouts** based on **distance, duration, or workout type**.
- Clicking on a workout **highlights it on the map** with an animated popup.

## 🛠️ Technologies Used

- **JavaScript (ES6+)**: Object-oriented programming with ES6 classes.
- **Leaflet.js**: Interactive mapping functionality.
- **CSS3**: Modern styling for a sleek user interface.
- **Local Storage**: Persistent data saving.

## 🧑‍💻 OOP & Application Structure

This project is built using **Object-Oriented Programming (OOP)** principles. The main components are:

### 1️⃣ Class Workout (Parent Class)

- Defines the base properties for all workouts.
- Handles shared behavior like generating an ID and setting descriptions.

### 2️⃣ Class Running & Class Cycling (Child Classes)

- Inherit from `Workout` and extend functionality.
- `Running` class calculates **pace**.
- `Cycling` class calculates **speed**.

### 3️⃣ Class App (Main Application Controller)

- Manages the UI and user interactions.
- Handles map clicks, form submissions, and data storage.
- Uses **Local Storage** to persist workouts across sessions.

## 📌 How It Works

1. **Page loads** → Retrieves workouts from **Local Storage**.
2. **User clicks on map** → A form appears to input workout details.
3. **User submits workout** → Workout is saved, displayed in the sidebar, and marked on the map.
4. **User clicks on a workout** → The map zooms into the corresponding location.
5. **Data persists** → Workouts remain saved after reloading the page.
