# 🐞 Issue Tracker Application

A dynamic Issue Tracker Web Application built with **Vanilla JavaScript** that allows users to view, filter, search, and inspect issues through an interactive UI.

---

## 🚀 Live Features

* 📡 Fetch issues from remote API
* 📋 Display all issues dynamically
* 🔍 Search issues by title
* 🟢 Filter Open issues
* 🔴 Filter Closed issues
* 🎯 Active button state management
* 🪟 Modal view for issue details
* 📊 Real-time issue count update

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3 (Tailwind / Utility-based styling)**
* **JavaScript (ES6)**
* **Fetch API**
* **DOM Manipulation**

---

## 📁 Project Structure

```
📦 issue-tracker
 ┣ 📂 assets
 ┃ ┣ Open-Status.png
 ┃ ┣ Vector (2).png
 ┃ ┗ Vector (3).png
 ┣ 📜 index.html
 ┣ 📜 script.js
 ┗ 📜 README.md
```

---

## ⚙️ Core Functionalities

### 🔹 Data Fetching

Fetches issues from API and stores them in a global array:

```js
let allIssues = [];
```

```js
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
```

---

### 🔹 Display Issues

* Dynamically creates issue cards
* Updates total issue count
* Uses DOM manipulation

```js
displayAll(posts);
```

---

### 🔹 Filtering System

| Function       | Description            |
| -------------- | ---------------------- |
| `showAll()`    | Displays all issues    |
| `showOpen()`   | Displays open issues   |
| `showClosed()` | Displays closed issues |

---

### 🔹 Search Functionality

* Searches issues based on title
* Case-insensitive matching

```js
issue.title.toLowerCase().includes(searchValue)
```

---

### 🔹 Active Button System

Handles UI state switching between filters:

```js
setActiveButton(activeId);
```

---

### 🔹 Modal System

* Click on any issue card → opens modal
* Displays:

  * Title
  * Author
  * Date
  * Description
  * Assignee
  * Labels
  * Priority

```js
showModal(post);
```

---

## ▶️ Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/issue-tracker.git
```

### 2️⃣ Open Project

```bash
cd issue-tracker
open index.html
```

---

## 📊 UI Highlights

* 🎨 Responsive card layout
* 🔘 Dynamic button styles
* 📦 Clean modal interface
* ⚡ Fast rendering

---

## 🔮 Future Improvements

* 🔐 Authentication system
* 📝 Add/Edit/Delete issues
* 🌐 Backend integration (Node.js + Database)
* 📅 Sort by date & priority
* 📊 Dashboard with analytics

---

## 👨‍💻 Author

**Sabbir Hossain**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
