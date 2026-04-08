import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage/Home";
import AboutPage from "../Pages/AboutPage/About";
import BlogPage from "../Pages/BlogPage/Blog";
import ContactPage from "../Pages/ContactPage/Contact";
import ServicePage from "../Pages/ServicesPage/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:HomePage
        },
        {
          path:"/services",
          Component:ServicePage
        },
        {
          path:"/about",
          Component:AboutPage
        },{
          path:"/blog",
          Component:BlogPage
        },
        {
          path:"/contact",
          Compoent:ContactPage
        }
    ]
  },
]);