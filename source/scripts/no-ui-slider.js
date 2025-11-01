import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const slider = document.querySelector(".range-slider");

noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});
