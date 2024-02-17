(self["webpackChunkStarter"] = self["webpackChunkStarter"] || []).push([["js/app"],{

/***/ "./www/wp-content/themes/nc/src/js/app.js":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _rive_app_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@rive-app/canvas/rive.js");
/* harmony import */ var _rive_app_canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rive_app_canvas__WEBPACK_IMPORTED_MODULE_3__);






gsap__WEBPACK_IMPORTED_MODULE_4__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);
const HTML = document.querySelector("html");
class App {
  constructor() {
    this.lazyload = new (vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default())({
      unobserve_entered: true,
      elements_selector: ".js-lazy",
      threshold: window.innerHeight * 0.8,
      callback_enter: ($el) => {
        if ($el.classList.contains("js-lazy-error-placeholder")) {
          $el.lazyLoadPlaceholder = $el.src;
        } else if ($el.dataset.src == void 0) {
          const figure = $el.closest("figure");
          if (figure)
            figure.classList.add("img-is-loaded");
        }
      },
      callback_loaded: (el) => {
        const figure = el.closest("figure");
        if (figure)
          figure.classList.add("img-is-loaded");
      },
      callback_error: ($el) => {
        if ($el.lazyLoadPlaceholder) {
          $el.src = $el.lazyLoadPlaceholder;
        }
      }
    });
    const toggles = document.querySelectorAll(".toggle-menu");
    if (toggles) {
      toggles.forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          HTML.classList.toggle("open-menu");
        });
      });
    }
    this.favicon();
    this.hoverMarquee();
    this.marquee();
    this.works();
    this.bigwords();
    this.scrolltrigger();
    this.animation();
    this.carousel();
  }
  link() {
    const links = document.querySelectorAll('a:not([href^="#"])');
    const loader = document.querySelector(".loader");
    if (links && loader) {
      links.forEach((link) => {
        if (link.target != "_blank" && !link.href.includes("wp-admin")) {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(loader, {
              scaleY: "1",
              transformOrigin: "bottom center",
              ease: "expo.inOut",
              duration: 1,
              onComplete: () => {
                window.location.href = link.href;
              }
            });
          });
        }
      });
    }
  }
  isLoaded() {
    const loader = document.querySelector(".loader");
    if (loader) {
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(loader, {
        scaleY: "0",
        transformOrigin: "top center",
        ease: "expo.out",
        duration: 1.4,
        onComplete: () => {
        }
      });
      this.link();
      this.inViewport();
    }
  }
  favicon() {
    const favicon_images = [
      `${urlTemplate}/static/img/favicon-1.png`,
      `${urlTemplate}/static/img/favicon-2.png`,
      `${urlTemplate}/static/img/favicon-3.png`,
      `${urlTemplate}/static/img/favicon-4.png`
    ];
    let image_counter = 0;
    setInterval(function() {
      if (document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
      if (document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();
      document.querySelector("head").insertAdjacentHTML("beforeend", `<link rel="icon" href="${favicon_images[image_counter]}" type="image/png">`);
      if (image_counter == favicon_images.length - 1)
        image_counter = 0;
      else
        image_counter++;
    }, 500);
  }
  bigwords() {
    const containers = document.querySelectorAll(".big-words");
    if (containers) {
      containers.forEach((el) => {
        const words = el.querySelectorAll(".word");
        if (words) {
          let maxH = 0;
          const parent = el.closest("section");
          if (!parent.nextElementSibling.classList.contains("section-expertises")) {
            window.addEventListener("resize", () => {
              words.forEach((word) => {
                const style = word.currentStyle || window.getComputedStyle(word);
                const h = word.offsetHeight + Number.parseFloat(style.marginBottom) + Number.parseFloat(style.marginTop);
                if (h > maxH) {
                  maxH = h;
                }
              });
              if (parent.offsetHeight < maxH) {
                gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(parent, {
                  paddingBottom: maxH * 0.95 - parent.offsetHeight
                });
              }
            });
            window.dispatchEvent(new Event("resize"));
          }
        }
      });
    }
  }
  works() {
    const dynamicElts = document.querySelectorAll("[data-height]");
    if (dynamicElts) {
      dynamicElts.forEach((el) => {
        window.addEventListener("resize", () => {
          const target = el.dataset.height && el.dataset.height != "" ? document.querySelector(el.dataset.height) : false;
          if (target) {
            const style = target.currentStyle || window.getComputedStyle(target);
            const targetH = target.offsetHeight + Number.parseFloat(style.marginTop) + Number.parseFloat(style.marginBottom);
            if (window.innerWidth >= 1024) {
              gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
                paddingTop: targetH,
                marginTop: -1 * targetH
              });
            } else {
              gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
                paddingTop: 0,
                marginTop: 0
              });
            }
          }
        });
        window.dispatchEvent(new Event("resize"));
      });
    }
    const elts = document.querySelectorAll(".work-item .img a, .work-item .teaser a");
    elts.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        el.closest(".work-item").classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        el.closest(".work-item").classList.remove("hover");
      });
    });
  }
  hoverMarquee() {
    const containers = document.querySelectorAll("[data-hover-marquee]");
    if (containers) {
      containers.forEach((el) => {
        const target = el.querySelector(el.dataset.hoverMarquee);
        if (target) {
          const dir = 0.8;
          const tl = horizontalLoop(target, {
            repeat: -1,
            speed: dir * 0.5
          });
          gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(tl, { timeScale: 0, overwrite: true });
          let t = 0;
          el.addEventListener("mouseleave", () => {
            gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(tl, { timeScale: 0, overwrite: true });
            t = setTimeout(() => {
              tl.seek(0);
            }, 300);
          });
          el.addEventListener("mouseenter", () => {
            tl.seek(0);
            gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(tl, { timeScale: 1, overwrite: true, delay: 0.1 });
            clearTimeout(t);
          });
        }
      });
    }
    function horizontalLoop(items, config) {
      items = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].utils.toArray(items);
      config = config || {};
      const tl = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      });
      const { length } = items;
      const startX = items[0].offsetLeft;
      const times = [];
      const widths = [];
      const xPercents = [];
      let curIndex = 0;
      const pixelsPerSecond = (config.speed || 1) * 100;
      const snap = config.snap === false ? (v) => v : gsap__WEBPACK_IMPORTED_MODULE_4__["default"].utils.snap(config.snap || 1);
      let totalWidth;
      let curX;
      let distanceToStart;
      let distanceToLoop;
      let item;
      let i;
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(items, {
        xPercent: (i2, el) => {
          const w = widths[i2] = Number.parseFloat(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].getProperty(el, "width", "px"));
          xPercents[i2] = snap(Number.parseFloat(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].getProperty(el, "x", "px")) / w * 100 + gsap__WEBPACK_IMPORTED_MODULE_4__["default"].getProperty(el, "xPercent"));
          return xPercents[i2];
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(items, { x: 0 });
      totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap__WEBPACK_IMPORTED_MODULE_4__["default"].getProperty(items[length - 1], "scaleX") + (Number.parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap__WEBPACK_IMPORTED_MODULE_4__["default"].getProperty(item, "scaleX");
        tl.to(item, {
          xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
          duration: distanceToLoop / pixelsPerSecond
        }, 0).fromTo(item, {
          xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)
        }, {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false
        }, distanceToLoop / pixelsPerSecond).add(`label${i}`, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
        const newIndex = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].utils.wrap(0, length, index);
        let time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap__WEBPACK_IMPORTED_MODULE_4__["default"].utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
  }
  marquee() {
    const marquees = document.querySelectorAll(".marquee .line");
    if (marquees) {
      let wheel = function(e) {
        const deltaY = e.deltaY / 6 < 1 ? 1 : e.deltaY / 6;
        pas = (changeDir && e.deltaY < 0 ? -1 * deltaY : deltaY) * orgin;
        clearTimeout(timer);
        regul();
      }, regul = function() {
        timer = setTimeout(() => {
          const move = pas > 0 ? 1 : -1;
          pas = move * orgin;
        }, 200);
      };
      let pas = 0.4;
      let changeDir = true;
      let timer = 0;
      const orgin = 0.4;
      window.addEventListener("wheel", wheel);
      window.addEventListener("unmount", () => {
        window.removeEventListener("wheel", wheel);
      });
      marquees.forEach((el) => {
        const flkty = new (flickity__WEBPACK_IMPORTED_MODULE_2___default())(el, {
          cellAlign: "left",
          freeScroll: true,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true,
          draggable: false
        });
        flkty.request = 0;
        if (el.dataset.marqueeNochange)
          changeDir = false;
        function launch() {
          el.removeEventListener("inview", launch);
          play();
        }
        function play() {
          flkty.x -= Number.parseFloat(el.dataset.dir) * pas;
          flkty.settle(flkty.x);
          flkty.request = window.requestAnimationFrame(play);
        }
        el.addEventListener("inview", launch);
        el.addEventListener("outview", (e) => {
          window.cancelAnimationFrame(flkty.request);
          el.addEventListener("inview", launch);
        });
        window.addEventListener("unmount", () => {
          flkty.destroy();
          window.cancelAnimationFrame(flkty.request);
          el.removeEventListener("inview", launch);
        });
        if (el.dataset.hoverPause) {
          el.addEventListener("mouseenter", () => {
            window.cancelAnimationFrame(flkty.request);
          });
          el.addEventListener("mouseleave", launch);
        }
      });
    }
  }
  animation() {
    const elts = document.querySelectorAll("[data-animation]");
    if (elts) {
      elts.forEach((el) => {
        const r = new _rive_app_canvas__WEBPACK_IMPORTED_MODULE_3__.Rive({
          src: el.dataset.animation,
          canvas: el,
          autoplay: true,
          onLoad: () => {
            r.play();
            r.resizeDrawingSurfaceToCanvas();
          }
        });
      });
    }
  }
  scrolltrigger() {
    const elts = document.querySelectorAll(".scrolltrigger-rotate, [data-scrolltrigger]");
    if (elts) {
      elts.forEach((el) => {
        if (el.classList.contains("scrolltrigger-rotate")) {
          gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            rotate: "80deg",
            scrollTrigger: {
              trigger: el,
              scrub: 2,
              start: "top bottom",
              end: "bottom top"
            }
          });
        } else {
          try {
            const opts = JSON.parse(el.dataset.scrolltrigger);
            const params = {};
            const scrollTrigger = {
              trigger: opts.trigger ? opts.trigger : el,
              scrub: 0.5,
              start: "clamp(bottom bottom)",
              end: "bottom+=20% top"
            };
            if (opts.transformation == "translateY") {
              if (window.innerWidth >= 1024)
                params.y = opts.value;
              else
                params.x = opts.value;
            } else if (opts.transformation == "opacity") {
              params.autoAlpha = 0;
              scrollTrigger.end = "clamp(bottom+=70% top)";
            }
            const p = { ...params, scrollTrigger };
            gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, p);
            window.dispatchEvent(new Event("scroll"));
          } catch {
          }
        }
      });
    }
  }
  carousel() {
    const carousels = document.querySelectorAll(".carousel");
    if (carousels) {
      carousels.forEach((carousel) => {
        const flkty = new (flickity__WEBPACK_IMPORTED_MODULE_2___default())(carousel, {
          pageDots: false,
          prevNextButtons: false,
          contain: true,
          cellAlign: "left"
        });
        flkty.slider.style.display = "flex";
        flkty.slider.style.flexWrap = "wrap";
        window.addEventListener("resize", () => {
          let max = 0;
          flkty.cells.forEach(function(cell) {
            if (max <= cell.element.offsetHeight)
              max = cell.element.offsetHeight;
          });
          flkty.cells.forEach(function(cell) {
            cell.element.style.height = `${max}px`;
          });
        });
        window.dispatchEvent(new Event("resize"));
      });
    }
  }
  inViewport() {
    in_view__WEBPACK_IMPORTED_MODULE_1___default().offset({
      bottom: window.innerHeight * 0.1
    });
    in_view__WEBPACK_IMPORTED_MODULE_1___default()(".js-reveal:not(.old-content):not(.is-visible").on("enter", function(elt) {
      elt.dispatchEvent(new Event("inview"));
      elt.classList.add("is-visible");
      elt.classList.remove("not-visible");
      const video = elt.querySelector("video");
      if (elt.tagName == "VIDEO" && elt.dataset.autoplay == "true" || video && video.dataset.autoplay == "true") {
        const v = video || elt;
        const playPromise = v.play();
        if (playPromise !== null) {
          playPromise.catch(() => {
            v.play();
          });
        }
      }
    }).on("exit", function(elt) {
      const video = elt.querySelector("video");
      if (elt.tagName == "VIDEO" && elt.dataset.autoplay != "" || video && video.dataset.autoplay != "") {
        const v = video || elt;
        v.pause();
      }
      elt.dispatchEvent(new Event("outview"));
      elt.classList.add("not-visible");
    });
  }
}
let app = false;
window.addEventListener("DOMContentLoaded", () => {
  app = new App();
});
window.addEventListener("load", () => {
  if (app) {
    app.isLoaded();
  }
});


if (true) {module.hot.accept(function(err) {
if (err) {
console.error(err);
}
});
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./node_modules/webpack-hot-middleware/client.js?reload=true"), __webpack_exec__("./www/wp-content/themes/nc/src/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
])
//# sourceMappingURL=app.js.map