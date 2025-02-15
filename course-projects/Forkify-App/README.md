# 🍽️ Forkify - Recipe Application

## Overview

Forkify is a modern recipe application that allows users to search for recipes, add their own custom recipes, and save favorites using bookmarks. Built with **JavaScript (ES6+), Parcel Bundler, and SASS**, Forkify provides a seamless and dynamic experience for food enthusiasts.

This project follows the **Model-View-Controller (MVC) architecture**, ensuring a modular and maintainable structure. It integrates **API fetching, state management, and UI rendering**, making it a great example of modern JavaScript development.


## Features

### Recipe Search & API Integration
- Fetches **over 1,000,000+ recipes** from the Forkify API.
- Allows users to search for recipes by ingredients or dish names.

### Bookmark & Save Recipes
- Users can **bookmark** their favorite recipes.
- Stored in **local storage**, so data is retained even after refreshing.

###  Add Custom Recipes
- Users can add their own recipes with ingredients, cooking time, and servings.
- Custom recipes are stored locally for later use.

### Pagination & Recipe List
- Recipes are displayed **with pagination** for easy browsing.
- Clicking on a recipe displays detailed cooking instructions.

### Interactive UI & Performance
- Built using **Parcel Bundler** for optimized performance.
- Uses **SASS** for responsive and modern styling.


## Technologies Used

- **JavaScript (ES6+)** → Object-Oriented & Modular JS.
- **Parcel Bundler** → Fast development and optimized builds.
- **SASS (SCSS)** → Modern styling for a clean UI.
- **Forkify API (AJAX)** → Fetching external recipes.
- **Local Storage** → Persisting user data.
- **Core-JS & Regenerator Runtime** → Handling async operations.

---

## OOP & Application Structure

Forkify follows an **MVC (Model-View-Controller) architecture**, ensuring modular and scalable development.

### **1. Model (Data Management)**
- **`model.js`** → Handles API requests & state management.
- Fetches recipes from the API and processes data for the UI.

### **2. Views (User Interface)**
Handles all UI rendering and DOM interactions.

- **`recipeView.js`** → Displays selected recipe details.
- **`resultsView.js`** → Manages search results.
- **`bookmarksView.js`** → Handles bookmarked recipes.
- **`paginationView.js`** → Manages pagination UI.
- **`addRecipeView.js`** → Handles form submission for custom recipes.

### 📌 **3. Controller (App Logic)**
- **`controller.js`** → The brain of the application.
- Bridges the **Model** and **View** by handling user interactions.


