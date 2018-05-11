# vue-lupus-slider
Vue slider component.



## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-slider.git`


import it:

```
import { LupusSlider, LupusSliderSlide } from 'vue-lupus-slider';

Vue.component('lupus-slider', LupusSlider);
Vue.component('lupus-slider-slide', LupusSliderSlide);
```

## Options
You can pass options via props:

```
<lupus-slider
  arrows="{{ arrows }}"
  bullets="{{ bullets }}"
  autoplay="{{ autoplay }}"
  navposfirstelement="{{ navposfirstelement }}"
  slideindex="{{ slideindex }}"
  style="opacity: 0"
>
```

Options are mostly self-explanatory.

`navposfirstelement` - this option makes all navigation and pagination elements
get a calculated top position based on the first element in the slide.