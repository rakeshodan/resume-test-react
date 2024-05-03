import { Navigate, useRoutes } from "react-router-dom";
import { Resume } from "./Pages/Resume";
import NotFound from "./Pages/NotFound";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Resume />,
    },
    {
      path: "/:name",
      element: <Resume />,
    },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" /> },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
};

export default Routes;
