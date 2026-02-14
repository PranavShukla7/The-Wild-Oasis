# The Wild Oasis

A comprehensive hotel management application built with React for managing cabin bookings, guest check-ins/check-outs, and hotel operations.

## 📋 Project Overview

The Wild Oasis is a full-featured hotel management system that allows hotel employees to manage cabins, bookings, and guests. The application includes authentication, real-time data management, and a beautiful dark mode interface.

## ✨ Features

- **Dashboard** - Overview of bookings, sales, check-ins, and occupancy rates with interactive charts
- **Cabin Management** - Create, update, delete, and view hotel cabins with images
- **Booking Management** - View, filter, and manage all bookings with detailed information
- **Guest Check-in/Check-out** - Streamlined process for guest arrivals and departures
- **User Authentication** - Secure login/signup with Supabase authentication
- **User Management** - Create new hotel employee accounts
- **Settings** - Configure hotel settings (breakfast price, min/max nights, max guests)
- **Dark Mode** - Toggle between light and dark themes
- **Real-time Updates** - Automatic data synchronization with Supabase
- **Data Filtering & Sorting** - Advanced filtering and sorting capabilities
- **Pagination** - Efficient data loading for large datasets

## 🚀 Technologies Used

### Core
- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **React Router DOM 7.9.6** - Client-side routing
- **Styled Components 6.1.19** - CSS-in-JS styling

### State Management & Data Fetching
- **React Query (TanStack Query) 5.90.10** - Server state management
- **React Query Devtools 5.91.1** - Debugging tools for React Query

### Backend & Database
- **Supabase 2.86.0** - Backend as a Service (Authentication & PostgreSQL database)

### Forms & Validation
- **React Hook Form 7.68.0** - Form state management and validation

### UI & UX
- **React Hot Toast 2.6.0** - Toast notifications
- **React Icons 5.5.0** - Icon library
- **React Error Boundary 6.0.0** - Error handling
- **Recharts 3.5.1** - Data visualization and charts
- **date-fns 4.1.0** - Date utility library

### Development Tools
- **ESLint 9.39.1** - Code linting
- **Vite Plugin ESLint 1.8.1** - ESLint integration with Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd The_Wild_Oasis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Update the Supabase credentials in `src/services/supabase.js` with your project URL and anon key
   - Set up the database schema (tables for cabins, bookings, guests, settings)

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🛠️ Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the production-ready application
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
The_Wild_Oasis/
├── public/              # Static assets
├── src/
│   ├── context/         # React context providers (Dark Mode)
│   ├── data/           # Sample data and uploader components
│   ├── features/       # Feature-based modules
│   │   ├── authentication/  # Login, signup, user management
│   │   ├── bookings/       # Booking management
│   │   ├── cabins/         # Cabin management
│   │   ├── check-in-out/   # Check-in/check-out features
│   │   ├── dashboard/      # Dashboard and statistics
│   │   └── settings/       # Application settings
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── services/       # API services and Supabase client
│   ├── styles/         # Global styles
│   ├── ui/            # Reusable UI components
│   ├── utils/         # Utility functions and constants
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── eslint.config.js   # ESLint configuration
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## 🔐 Authentication

The application uses Supabase Authentication. Users must:
1. Sign up with email and password
2. Confirm their email address
3. Log in to access the application

All routes except login and signup are protected and require authentication.

## 🎨 Dark Mode

The application features a custom dark mode implementation using React Context. Users can toggle between light and dark themes, with the preference saved in local storage.

## 📊 Data Management

- **React Query** handles all server state with automatic caching, background refetching, and optimistic updates
- **Supabase** provides the backend database and real-time capabilities
- Custom hooks encapsulate all data fetching logic for better code organization

## 🏗️ Key Features Implementation

### Compound Components Pattern
Used in components like `Modal`, `Menus`, and `Table` for flexible and reusable UI components.

### Render Props Pattern
Implemented for advanced component composition and logic sharing.

### Custom Hooks
Extensive use of custom hooks for:
- Data fetching (`useBookings`, `useCabins`, `useUser`)
- Mutations (`useCreateCabin`, `useDeleteBooking`)
- UI logic (`useOutsideClick`, `useMoveBack`, `useLocalStorageState`)

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

## 📝 License

This project is part of a professional React course and is for educational purposes.

## 🙏 Acknowledgments

Built as part of a professional React development course to demonstrate modern React patterns and best practices.
