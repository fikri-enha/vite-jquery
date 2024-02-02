import "./style.css";
import jqueryLogo from "./jquery.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import $ from "jquery";


$("#app").html(`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${jqueryLogo}" class="logo jquery" alt="jQuery logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      this website build with vite + jQuery
    </p>
  </div>
`);

setupCounter("counter");
