(function ($) {
  "use strict";

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // =======Sticky-header========>>>>>
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $(".sticky-navbar").removeClass("sticky");
      $(".back-to-top").hide();
    } else {
      $(".sticky-navbar").addClass("sticky");
      $(".back-to-top").show();
    }
  });
  // =======Sticky-header========>>>>>

  $(window).on("load", function () {
    $(".preloader").delay(600).fadeOut("slow");
  });

  // =======CounterUp JS-Odometer========>>>>>
  if ($(".odometer").length > 0) {
    $(window).on("scroll", function () {
      let preloaderTimeout = 2500;
      function winScrollPosition() {
        var scrollPos = $(window).scrollTop(),
          winHeight = $(window).height();
        var scrollPosition = Math.round(scrollPos + winHeight / 0.07);
        return scrollPosition;
      }
      var elemOffset = $(".odometer").offset().top;
      if (elemOffset < winScrollPosition()) {
        setTimeout(function () {
          $(".odometer").each(function () {
            $(this).html($(this).data("count-to"));
          });
        }, preloaderTimeout + 200);
      }
    });
  }
  // =======CounterUp JS-Odometer========>>>>>

  // =======Swiper .service-swiper========>>>>>
  if ($(".service-swiper").length > 0) {
    new Swiper(".service-swiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        460: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1320: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".service-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .service-swiper========>>>>>

  // =======Swiper .inner-service-swiper========>>>>>
  if ($(".inner-service-swiper").length > 0) {
    new Swiper(".inner-service-swiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        460: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1320: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".inner-service-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .service-swiper========>>>>>

  // =======Swiper .shop-2-swiper========>>>>>
  if ($(".weight-management-swiper").length > 0) {
    new Swiper(".weight-management-swiper", {
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".weight-management-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }

  if ($(".shop-swiper").length > 0) {
    new Swiper(".shop-swiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1365: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

      pagination: {
        el: ".shop-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .shop-swiper========>>>>>

  if ($(".organization-swiper").length > 0) {
    new Swiper(".organization-swiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1365: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

      pagination: {
        el: ".organization-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .shop-swiper========>>>>>

  // =======Swiper .blog-swiper========>>>>>
  if ($(".blog-swiper").length > 0) {
    new Swiper(".blog-swiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: ".blog-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .blog-swiper========>>>>>

  // =======Swiper .client-slider========>>>>>
  if ($(".client-slider").length > 0) {
    new Swiper(".client-slider", {
      loop: true,
      spaceBetween: 20,
      slidesPerGroup: 2,
      breakpoints: {
        380: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".client-slider-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .client-slider========>>>>>

  // =======Swiper .testimonial-swiper========>>>>>
  if ($(".testimonial-swiper").length > 0) {
    new Swiper(".testimonial-swiper", {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },

      pagination: {
        el: ".testimonial-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .testimonial-swiper========>>>>>

  // =======Swiper .project-swiper========>>>>>
  if ($(".project-gallery-swiper").length > 0) {
    new Swiper(".project-gallery-swiper", {
      loop: false,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },

      pagination: {
        el: ".project-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>

  // =======Swiper .gallery-swiper========>>>>>
  if ($(".gallerySwiper").length > 0) {
    var swiper = new Swiper(".gallerySwiper", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        750: {
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  if ($(".gallerySwiper2").length > 0) {
    var swiper2 = new Swiper(".gallerySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".project-gallery-button-next",
        prevEl: ".project-gallery-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
  // =======Swiper .gallery-swiper========>>>>>

  // =======Swiper .team-swiper========>>>>>
  if ($(".team-swiper").length > 0) {
    new Swiper(".team-swiper", {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      },
    });
  }
  // =======Swiper .team-swiper========>>>>>

  // =======Swiper .project-swiper========>>>>>
  if ($(".project-swiper").length > 0) {
    new Swiper(".project-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".project-next-btn",
        prevEl: ".project-prev-btn",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>

  // =======Gallery Animation onClick========>>>>>
  // $('.gallery-contents').on('click', function () {
  //   $('.gallery-contents').removeClass('gallery-expand').addClass('gallery-sm');
  //   $(this).removeClass('gallery-sm').addClass('gallery-expand');
  // })
  $(".gallery-contents").on("click mouseenter mouseleave", function (event) {
    if (event.type === "click" || event.type === "mouseenter") {
      $(".gallery-contents")
        .removeClass("gallery-expand")
        .addClass("gallery-sm");
      $(this).removeClass("gallery-sm").addClass("gallery-expand");
    } else if (event.type === "mouseleave") {
      $(this).removeClass("gallery-expand").addClass("gallery-sm");
    }
  });
  // =======Gallery Animation onClick========>>>>>

  // ========= Scrool stroke-text on Mouse-Wheel=========>>>>>

  if ($(".scroll-move").length > 0) {
    // const classNames = [];
    // $(".scroll-move").each(function (index, item) {
    //   index += 1;
    //   const newClassName = 'scroll-parent' + index;
    //   $(item).addClass(newClassName);
    //   classNames.push("." + newClassName);
    // });
    // for (var i = 0; i < classNames.length; i++) {
    //   letterCarousel(classNames[i], '.scrolling-text');
    // }
    // function letterCarousel(parent_cls, child_cls) {
    //   let elemts = jQuery(parent_cls + ' ' + child_cls);
    //   jQuery(window).on("scroll wheel touchmove", function () {
    //       let scrolltop = $(this).scrollTop(),
    //       windowHeight = $(window).height(),
    //       winWidth = $(window).width(),
    //       divid = winWidth / 100,
    //       elHeight = $(parent_cls).height(),
    //       elOffsetTop = $(parent_cls).offset().top,
    //       elOffestHeight = elOffsetTop + elHeight,
    //       elOffestScreen = elOffsetTop - windowHeight;
    //     if ((scrolltop < elOffestHeight && scrolltop > elOffestScreen)) {
    //       if (jQuery(parent_cls).length) {
    //         let tlH = jQuery(document).scrollTop() + windowHeight;
    //         if (elOffsetTop <= tlH) {
    //           let i = jQuery(document).scrollTop() - elOffsetTop + windowHeight,
    //           scroll = i + 100,
    //           scroll_slow = scroll + ((scroll / 75) / 100),
    //           img_scroll = scroll_slow * divid / 100;
    //           elemts.css({
    //               "transform": "translateX(" + img_scroll + "px)",
    //           });
    //         }
    //       }
    //     }
    //   });
    // }

    const classNames = [];
    $(".scroll-move").each(function (index, item) {
      index += 1;
      const newClassName = "scroll-parent" + index;
      $(item).addClass(newClassName);
      classNames.push("." + newClassName);
    });
    for (var i = 0; i < classNames.length; i++) {
      letterCarousel(classNames[i], ".scrolling-text");
    }
    function letterCarousel(parent_cls, child_cls) {
      let elemts = jQuery(parent_cls + " " + child_cls);
      jQuery(window).on("scroll wheel touchmove", function () {
        let windowHeight = $(window).height(),
          winWidth = $(window).width(),
          divid = winWidth / 100,
          elOffsetTop = $(parent_cls).offset().top;
        if (jQuery(parent_cls).length) {
          let tlH = jQuery(document).scrollTop(); // Get current scroll position
          // Check if scroll top is 0
          if (tlH === 0) {
            elemts.css({
              transform: "translateX(" + divid + ")",
            });
          } else {
            let i = tlH - elOffsetTop,
              scroll = i + 100,
              scroll_slow = scroll + scroll / 100 / 100,
              img_scroll = (scroll_slow * divid) / 150;
            elemts.css({
              transform: "translateX(" + img_scroll + "px)",
            });
          }
        }
      });
    }
  }
  // ========= Scrool stroke-text on Mouse-Wheel=========>>>>>

  // ========= Stroke-animation When visible on view-port=========>>>>>
  if ($(".stroke-heading").length > 0) {
    $(document).ready(function () {
      function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
      }
      function handleVisibility() {
        $(".stroke-heading , .stroke-heading-2").each(function (i, listItem) {
          if (isInViewport(listItem)) {
            $(listItem).find(".text-line-2").addClass("text-line-animation");
          } else {
            $(listItem).find(".text-line-2").removeClass("text-line-animation");
          }
        });
      }
      handleVisibility();
      $(window).on("scroll", handleVisibility);
    });
  }
  // ========= Stroke-animation When visible on view-port=========>>>>>

  // ========= Team-Wrapper hover=========>>>>>
  if ($(".team-wrapper").length > 0) {
    $(document).ready(function () {
      $(".team-wrapper").hover(
        function () {
          $(this).find(".author-name").addClass("author-border-bottom");
        },
        function () {
          $(this).find(".author-name").removeClass("author-border-bottom");
        }
      );
    });
  }
  // ========= Team-Wrapper hover=========>>>>>

  //===============smooth scrolling ===================
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 2,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  new WOW().init();

  // =================  Coustomizer closing =============
  if ($('[data-toggle="tooltip"]').length > 0) {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({ delay: { show: 300, hide: 300 } });
    });
  }
  // =================  Coustomizer closing =============
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".hover-menu .nav-item.dropdown")
      .forEach(function (everyitem) {
        everyitem.addEventListener(
          "mouseover",
          function (e) {
            let el_link = this.querySelector("a[data-bs-toggle]");
            if (el_link !== null) {
              let nextEl = el_link.nextElementSibling;
              el_link.classList.add("show");
              if (nextEl !== null && this.contains(nextEl)) {
                nextEl.classList.add("show");
              }
            }
          }.bind(everyitem)
        ); // Explicitly bind the context to the current element
        everyitem.addEventListener(
          "mouseleave",
          function (e) {
            let el_link = this.querySelector("a[data-bs-toggle]");
            if (el_link !== null) {
              let nextEl = el_link.nextElementSibling;
              if (nextEl !== null && this.contains(nextEl)) {
                el_link.classList.remove("show");
                nextEl.classList.remove("show");
              }
            }
          }.bind(everyitem)
        ); // Explicitly bind the context to the current element
      });
  }
  // end if innerWidth
});
