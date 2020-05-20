import { displayCSS } from "./textArea";
import "./textArea";
import "./index.scss";

//getting borders input reference
const border_top_left = document.getElementById("border-top-left");
const border_top_right = document.getElementById("border-top-right");
const border_bottom_left = document.getElementById("border-bottom-left");
const border_bottom_right = document.getElementById("border-bottom-right");

// Eliptical Borders
const border_start_start_radius = document.getElementById(
  "border-start-start-radius"
);
const border_start_end_radius = document.getElementById(
  "border-start-end-radius"
);
const border_end_start_radius = document.getElementById(
  "border-end-start-radius"
);
const border_end_end_radius = document.getElementById("border-end-end-radius");

//the target square
const square = document.querySelector("#square");

border_top_left.onchange = () => {
  square.style.borderTopLeftRadius = `${border_top_left.value}px`;
  displayCSS();
};

border_top_right.onchange = () => {
  square.style.borderTopRightRadius = `${border_top_right.value}px`;
  displayCSS();
};

border_bottom_left.onchange = () => {
  square.style.borderBottomLeftRadius = `${border_bottom_left.value}px`;
  displayCSS();
};

border_bottom_right.onchange = () => {
  square.style.borderBottomRightRadius = `${border_bottom_right.value}px`;
  displayCSS();
};

//Eliptical borders input events
border_start_start_radius.onchange = () => {
  square.style.borderStartStartRadius = `${border_start_start_radius.value}px`;
  displayCSS();
};

border_start_end_radius.onchange = () => {
  square.style.borderStartEndRadius = `${border_start_end_radius.value}px`;
  displayCSS();
};

border_end_start_radius.onchange = () => {
  square.style.borderEndStartRadius = `${border_end_start_radius.value}px`;
  displayCSS();
};

border_end_end_radius.onchange = () => {
  square.style.borderEndEndRadius = `${border_end_end_radius.value}px`;
  displayCSS();
};

// Options

const enableMetrics = document.querySelector("#metricsBut");
const metrics = document.querySelector("#metrics");

enableMetrics.onclick = function () {
  metrics.classList.toggle("enabled");
  enableMetrics.classList.toggle("enabled");
  if (metrics.classList.contains("enabled")) {
    enableMetrics.innerText = "Turn Off";
    metrics.style.border = "3px dashed rgb(160, 193, 206)";
  } else {
    enableMetrics.innerText = "Turn On";
    metrics.style.border = "none";
  }
};

const heightInput = document.querySelector("#height");
const widthtInput = document.querySelector("#width");

heightInput.oninput = function (event) {
  metrics.style.height = `${heightInput.value}px`;
};
widthtInput.oninput = function (event) {
  metrics.style.width = `${widthtInput.value}px`;
};
