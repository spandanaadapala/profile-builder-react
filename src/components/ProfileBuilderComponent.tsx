import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";

const ProfileBuilderComponent = () => {
  const router = createBrowserRouter([{ path: "/", element: <SignIn /> }]);
  return <RouterProvider router={router} />;
};

export default ProfileBuilderComponent;
