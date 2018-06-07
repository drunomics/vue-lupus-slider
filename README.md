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

- `arrows` ( boolen | object )
  Either a boolean for default arrows or an object to configure the swiper navigation.
- `bullets` ( boolean | object )
  Either a boolean for default bullets or an object to configure the swiper pagination.
- `autoplay` ( boolean )
- `navposfirstelement`
  This option makes all navigation and pagination elements get a calculated top position based on the first element in the slide.

## Lazyloading

If a slide contains an element with the class `slider__image` it will be transformed into 
a picture element.

`div data-sources='{{ sources_json }}' data-img='{{ img_json }}' class="slider__image"></div>`

sources_json: An Array of objects e.g. `[{ media: "", srcset:""}]`
img: objects e.g. `{ uri: "", alt: "", title: """}`
