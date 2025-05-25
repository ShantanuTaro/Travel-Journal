# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

# 🌍 Travel Journal — What I Learned

This project is part of **Section 2: Data-Driven React** from my React learning journey. I built a simple but dynamic **Travel Journal** that displays cards for different travel destinations — each one powered by reusable components and real data.

---

## ✨ What I Learned

### 🔁 Reusable Components  
I created a single `Card` component that could be reused to render each travel destination. This helped me understand how breaking a UI into small, modular pieces makes code easier to manage and scale.

### 📦 Props  
I learned how to pass data from parent to child components using props. This was key in making each `Card` dynamic based on the information provided — like image, title, dates, and description.

### 🧠 Evaluating JavaScript in JSX  
I practiced writing JavaScript expressions inside JSX — for example, inserting variables and mapping over an array to generate multiple components. It showed me how JSX isn’t just HTML-in-JS — it’s a powerful tool for dynamic rendering.

### 🖼️ Handling Static Assets  
I explored how to use image links and render them dynamically inside components. I also understood how external links (like Google Maps) can be integrated into the UI using anchor tags with proper props.

### 📊 Mapping Data to Components  
This was one of the most exciting parts! I created a separate data file (`data.js`) with an array of travel destinations. Then, I used `.map()` to turn each object into a `Card` component — making the UI fully data-driven.

---

## 🔧 Technologies Used

- React
- JavaScript (ES6+)
- JSX
- CSS for styling

---


