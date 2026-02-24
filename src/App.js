import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./getUser/User";
import AddUser from "./addUser/AddUser";
import Update from "./updateuser/Update";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />, 
    },
    {
      path: "*",
      element: <h2>Page Not Found</h2>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;



