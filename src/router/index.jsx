import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
const Home = lazy(() => import("../views/Home"));
const Projects = lazy(() => import("../views/Projects"));
const Skills = lazy(() => import("../views/Skills"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    ),
  },
  {
    path: "/skills",
    element: (
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
    ),
  },
]);
export default router;
