import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";

import Header from "./Header";
import Main from "./Main";
import SSS from "./SSS";
import Submit from "./Submit";

function App() {
  return (
    <>
      <Header />
      <Main />
      <SSS />
      <Submit />

      <footer>
        <div id="footer-items">
          <p>© 2025 Tüm hakları saklıdır.</p>
          <img src="./img/logo.png" alt="" />
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
