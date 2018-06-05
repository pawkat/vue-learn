import {TimelineMax} from 'gsap'
export default {
    transition: {
      css: false,
      name: 'animation',
      mode: 'out-in',
      enter: function (el, done) {
        let tl = new TimelineMax({onComplete:done});
        tl
          .from(el, 1, {x:'100%'})
      },
      leave: function (el, done) {
        let tl = new TimelineMax({onComplete:done});
        tl
          .to(el, 1, {x:'100%'})
      },
    },
};
