import BrandMaster from "pages/BrandView/BrandMaster/BrandMaster";
import Button from "pages/Button";
import Color from "pages/Color";
import SecondaryColor from "pages/SecondaryColor";
import Spacing from "pages/Spacing";
import Typography from "pages/Typography";
import React from "react";
import { Redirect } from "react-router-dom";
// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
// Profile
import UserProfile from "../pages/Authentication/user-profile";
import ProductMaster from "../pages/ProductView/ProductMaster/ProductMaster";




const userRoutes = [
  { path: "/product", component: ProductMaster },

  { path: "/brand", component: BrandMaster },

  //profile
  { path: "/profile", component: UserProfile },

  //typography
  { path: "/typography", component: Typography },

  //color
  { path: "/color", component: Color },

  //spacing
  { path: "/spacing", component: Spacing },

  //button
  { path: "/button", component: Button },

  // secondary color
  {
    path: "/secondary-color",
    component: SecondaryColor,
  },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
];

export { userRoutes, authRoutes };

