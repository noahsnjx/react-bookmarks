import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Details from "./routes/Details";
import BookmarkCreate from "./routes/BookmarkCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookmark/:bookmarkId",
        element: <Details />,
      },
      {
        path: "/bookmark/create",
        element: <BookmarkCreate />,
      },
    ],
  },
]);

export default function Provider() {
  return <RouterProvider router={router} fallbackElement="Chargement" />;
}
