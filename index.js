particlesJS("particles-js", {
    particles: {
        number: { value: 600, density: { enable: true, value_area: 800 } },
        color: { value: "#fff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.9219619349976756,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 4,
            direction: "bottom-left",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            grab: { distance: 300, line_linked: { opacity: 0.5 } },
            bubble: { distance: 300, size: 4, duration: 0.3, opacity: 1, speed: 3 },
            repulse: { distance: 150, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

new Typed('#typed', {
    strings: ["A Front End Developer.", "An UI/UX Designer.", "An Angular Developer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});

$(function() {
    $('#contact-form').on('click', 'button', function(e) {
      e.preventDefault();
  
      const $form = $("#contact-form");
  
      const phone = '917339234152';
  
      // get object i.e {key: 'value'} of form
      let data = {}
      $form.serializeArray().forEach(v => data[v.name] = v.value)

      console.log(data)
  
      // make the ?text= payload, 
      // - could use .filter() here too if you dont want empty values
      const text = [
        data.name,
        data.email,
        data.message,
      ].join(' - ') // change to what you want sep to be
  
      // make the url
      const action = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
      console.log(action)
      window.open(action, "_blank");
  
      /*
          $form.attr('action', action);
          $form.attr('target', '_blank');
          $form.submit();
      */
    });
  });