import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-red-600 text-center py-6">Hello World</div>,
  },
]);