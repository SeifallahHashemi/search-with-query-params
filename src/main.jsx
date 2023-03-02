import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const RootLayout = lazy(() => import("./routes/RootLayout"));
const MainNavigation = lazy(() => import("./routes/MainNavigation"));
const SearchParams = lazy(() => import("./routes/SearchParams"));
const Home = lazy(() => import("./routes/Home"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <MainNavigation />,
        children: [{ path: "posts", element: <SearchParams /> },{ path: "/", element: <Home /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
