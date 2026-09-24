
  import { createBrowserRouter, RouterProvider } from "react-router-dom";  
  import Wrapper from "./layouts/Wrapper";
  import HomeOne from "./components/homes/home-1";
  import AnimationProvider from "./hooks/AnimationProvider";
  import HomeTwo from "./components/homes/home-2";
  import HomeThree from "./components/homes/home-3";
  import Service from "./components/inner-pages/service";
  import ServiceDetails from "./components/inner-pages/service-details";
  import Team from "./components/inner-pages/team";
  import TeamDetails from "./components/inner-pages/team-details";
  import About from "./components/inner-pages/about";
  import Testimonial from "./components/inner-pages/testimonial";
  import Contact from "./components/inner-pages/contact";
  import NotFound from "./components/error/NotFound";
  import Project from "./components/inner-pages/project";
  import ProjectDetails from "./components/inner-pages/project-details";
  import Blog from "./components/inner-pages/blog";
  import BlogStandard from "./components/inner-pages/blog-standard";
  import BlogDetails from "./components/inner-pages/blog-details";
  import Projects from "./components/projects"
  import { useEffect, useState } from "react";





  const router = createBrowserRouter([
    { path: "/", element: <HomeTwo /> },
    { path: "/projects", element: <Projects /> },
  ]);


  function App() {


    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 7000);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        // <div className="w-screen h-screen overflow-hidden">
        <div className="loader--container">

          <img
            src="assets/img/imgs/loader.gif"
            alt="Loading..."
            // className="w-full h-full object-cover"
            className="loader"
          />
        </div>
      );
    }

    return (
      <Wrapper> 
        <AnimationProvider />
        <RouterProvider router={router} />
      </Wrapper>
    )
  }

  export default App
