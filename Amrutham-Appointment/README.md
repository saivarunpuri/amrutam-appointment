
# 🩺 Amrutam Doctor Consultation App (Frontend)

A responsive doctor consultation web application where users can:
- View doctor profiles
- Explore doctor specializations, concerns, experience, and reviews
- Book appointments via video, in-clinic, or chat
- Login/signup using localStorage
- Navigate easily across mobile and desktop with a responsive UI

---

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── assets/                 # Static data (allDoctors, doctorDetails, etc.)
│   ├── components/             # All reusable React components
│   │   ├── Navbar.jsx
│   │   ├── DoctorProfileCard.jsx
│   │   ├── DoctorAbout.jsx
│   │   ├── DoctorSpecializationsCard.jsx
│   │   ├── DoctorConcernsCard.jsx
│   │   ├── DoctorExperienceCard.jsx
│   │   ├── DoctorReviewsCard.jsx
│   │   ├── AppointmentBooking.jsx
│   │   └── Login.jsx
│   ├── context/
│   │   └── AppContext.jsx      # Context  (user login/signup)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── DoctorDetail.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/amrutam-frontend.git
cd amrutam-frontend
npm install
```

### Running Locally

```bash
npm start
```

The app runs on `http://localhost:3000`

---

## 🧠 Features Breakdown

### ✅ 1. **Doctor Detail Page**

Shows complete doctor information and appointment booking:

- `/doctors/:id`
- Includes:
  - `DoctorProfileCard`
  - `DoctorAbout`
  - `DoctorSpecializationsCard`
  - `DoctorConcernsCard`
  - `DoctorExperienceCard`
  - `DoctorReviewsCard`
  - `AppointmentBooking`

### ✅ 2. **Appointment Booking**

- Select session mode (In-Clinic, Video, Chat)
- Pick a date and time slot (morning/evening)
- Responsive & scrollable
- Confirmation button (dummy flow)

### ✅ 3. **Doctor Reviews Card**

- Lists user reviews with name, image, rating, and comments
- Responsive for mobile
- Uses `react-icons` for star ratings

### ✅ 4. **Responsive Navbar**

- Mobile hamburger menu
- Links: Home, About Us, Find Doctors
- Auth buttons: Login / Sign-up / Logout
- Uses context (`AppContext`) for authentication status

### ✅ 5. **Authentication (via localStorage)**

- Login and Sign-up modals
- Authenticated state stored in `localStorage`
- Controlled by global `AppContext`

---

## 🧩 Components Used

| Component | Purpose |
|----------|---------|
| `Navbar` | Main navigation bar |
| `DoctorProfileCard` | Basic profile info of the doctor |
| `DoctorAbout` | About and languages |
| `DoctorSpecializationsCard` | Specialization list |
| `DoctorConcernsCard` | Concerns the doctor handles |
| `DoctorExperienceCard` | Timeline of experience |
| `DoctorReviewsCard` | Featured reviews |
| `AppointmentBooking` | Session type, date/time slot picker |
| `Login` | Login/Signup Modal |
| `AppContext` | Auth state management |

---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Tailwind CSS
- React Icons
- Local Storage (for auth simulation)

---

## 📱 Responsive Design

- **Mobile Friendly:** All components (Navbar, Booking, Reviews) scale properly.
- **Tailwind CSS** used extensively with:
  - `flex`, `grid`, `space-x/y`, `overflow-x-auto`
  - `responsive breakpoints (sm, md, lg)`

---

## 🔐 Authentication (localStorage)

Simulated using localStorage:
- `Login` sets `user` in context and stores email
- `Logout` clears localStorage
- Auth-aware Navbar (shows email & logout if logged in)

---

## 📸 Sample Data

All mock doctor and review data are imported from `assets/assets.js`. Feel free to extend it or fetch from an API in the future.

---

## ✨ Future Improvements

- Connect to real backend (Express + PostgreSQL)
- Add appointment confirmation screen
- Form validation for login/signup
- Toast notifications for actions
- Dark mode support

---

## 🙌 Contribution

Feel free to fork the repo and submit PRs. This is a beginner-friendly project to explore React and Tailwind!

---

## 📄 License

MIT License
