import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import MissionContext from "./context/MissionContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <One />,
        },
        {
          path: "/two",
          element: <Two />,
        },
        {
          path: "/three",
          element: <Three />,
        },
        {
          path: "/four",
          element: <Four />,
        },
      ],
    },
  ]);
  return (
    <>
      <MissionContext>
        <RouterProvider router={router} />
      </MissionContext>
    </>
  );
};

export default App;
