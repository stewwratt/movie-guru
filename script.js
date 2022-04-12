import * as views from "/views.js";
import * as utils from "/utils.js";
import { Router } from "/router.js";

const router = new Router(views.viewError);

router.get("/", () => {
  console.log("routing to home");
});

router.get("/pick-for-me", () => {
  console.log("routing to pick for me");
});

router.get("/about", () => {
  console.log("routing to about");
});
const redraw = () => {
  router.route();
};

window.onload = () => {
  redraw();
};
