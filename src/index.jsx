import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingDarkWebScreen } from "./screens/LandingDarkWebScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LandingDarkWebScreen />);
