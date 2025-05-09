# 🏠 PG Finder

![PG Finder Banner](https://raw.githubusercontent.com/PranayFadtare/PG_Finder/main/assets/banner.png)

A modern web application to find, list, and manage Paying Guest (PG) accommodations.  
Built with the MERN stack (MongoDB, Express, React, Node.js).

---

## ✨ Features

- 🔍 **Search PGs:** Find PGs by location, price, and amenities.
- 📝 **User Profiles:** Manage your profile and listings.
- 🏠 **List Your PG:** Add and update your own PG listings.
- 💬 **Chat:** Built-in chat for direct communication.
- 💾 **Save Listings:** Bookmark your favorite PGs.
- 🔒 **Authentication:** Secure login and registration.

---

## 🚀 Tech Stack

| Frontend | Backend | Database | Auth | Styling |
|----------|---------|----------|------|---------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat) | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat) | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat) | ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=flat) | ![SCSS](https://img.shields.io/badge/-SCSS-CC6699?logo=sass&logoColor=white&style=flat) |

---

## 📸 Screenshots

> Replace these links with your own screenshots in the `assets/` folder.

| Home Page | Profile Page | Chat |
|-----------|--------------|------|
| ![Home](assets/home.png) | ![Profile](assets/profile.png) | ![Chat](assets/chat.png) |

---

## 🛠️ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/PranayFadtare/PG_Finder.git
cd PG_Finder
```

### 2. Install dependencies

```sh
cd api
npm install
cd ../client
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `api` folder:

```env
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

> **Note:** Never commit your `.env` file.

### 4. Run the app

**Backend:**
```sh
cd api
npm run dev
```

**Frontend:**
```sh
cd client
npm run dev
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

[Pranay Fadtare](https://github.com/PranayFadtare)

---

> _Made with ❤️ for the PG community!_
