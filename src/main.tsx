import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./components/Auth";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./layout/Root";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<UserProfile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
