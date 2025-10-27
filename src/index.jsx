import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";

import Header from "./Header";
import Main from "./Main";
import SSS from "./SSS";
import Submit from "./Submit";
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header />
      <Main />
      <SSS />
      <Submit />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
