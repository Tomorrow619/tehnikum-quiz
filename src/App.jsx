import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import Thanks from "../src/pages/Thanks";
import StepThree from ".//pages/StepThree";
import StepFour from ".//pages/StepFour";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "step-one",
    element: <StepOne />,
  },
  {
    path: "step-two",
    element: <StepTwo />,
  },
  {
    path: "step-three",
    element: <StepThree />,
  },
  {
    path: "step-four",
    element: <StepFour />,
  },
  {
    path: "Thanks",
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router}>
        <div className="App" />
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
