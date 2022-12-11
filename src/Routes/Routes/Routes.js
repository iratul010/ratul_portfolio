import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About/About";
import Blogs from "../../Components/Blogs/Blogs";
import ContactMe from "../../Components/Home/ContactMe/ContactMe";
import Home from "../../Components/Home/Home/Home";
import ProjectDetails from "../../Components/Home/Projects/ProjectDetails";
import Projects from "../../Components/Home/Projects/Projects";
import Skills from "../../Components/Home/Skills/Skills";

import Main from "../../Layout/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutMe",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/projectDetails",
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/contactMe",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
]);
