import {lory} from 'lory.js'

import '../vendor/fontawesome-free-5.0.4/js/fontawesome.js'
import '../vendor/fontawesome-free-5.0.4/js/fa-brands.js'
import '../vendor/fontawesome-free-5.0.4/js/fa-solid.js'

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.js_slider')

  for (let slider of sliders) {
    lory(slider, {
      infinite: 1
    })
  }
})
