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




//   const cardS = document.querySelectorAll('button')

// const Observer = new IntersectionObserver(entries =>{
//     entries.forEach(element => {
//     console.log(element);
        
//     });
// })


// Observer.observe(cardS)

// cardS.forEach(element => {
//     element.addEventListener("click", function(event) {console.log(event);});
// });
var timerStart = Date.now();
localStorage.setItem('startTime', '')
// localStorage.setItem('close', '')

var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                console.log('l');
                console.log('start time : '+ datetime) 
                localStorage.setItem('startTime', datetime)
                document.getElementById("demo").innerHTML = localStorage.getItem("startTime");


                entryTime = datetime;
                existTime = ''

                clickArr = [];
                userdata = [];
addEventListener('click', (event) => {
console.log(event);
console.log(event.path[10].navigator.userAgentData);

console.log('start time : ') + timerStart;

const clickObj = {
    innerText:event.target.innerText,
    tagName:event.target.tagName,
    link:event.target.href

}
userdata.push(event.path[10].navigator.userAgentData)

clickArr.push(clickObj)
    console.log('text:'+ event.target.innerText);
    console.log('tag:'+event.target.tagName);

    console.log('location:'+event.target.href);
});


existTime = ''
window.onbeforeunload = confirmExit;
function confirmExit(){
    alert("confirm exit is being called");
    var currentdate1 = new Date(); 
        var datetime1 = "Last Sync: " + currentdate1.getDate() + "/"
                        + (currentdate1.getMonth()+1)  + "/" 
                        + currentdate1.getFullYear() + " @ "  
                        + currentdate1.getHours() + ":"  
                        + currentdate1.getMinutes() + ":" 
                        + currentdate1.getSeconds();
                        console.log('l');
                        console.log('close time : '+ datetime1) 
       localStorage.setItem('close', datetime1)
       existTime = datetime1
       device = ''

if( userdata[0].mobile === false){
    device = 'Windoes'
}else{
    device = 'Mobile'
}
       const Api = {
        entryTime: entryTime,
     existTime: existTime,
     devideType: device,
     deviceOs: userdata[0].platform,
      systemOs: userdata,
    clickArr: clickArr

}
console.log( JSON.stringify(Api));


fetch("http://localhost:4000/api/designcreate", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(Api)
  }).then(res => {
    console.log("Request complete! response:", res);
  });
    return false;
}


function finalCall() {



    const Api = {
        entryTime: entryTime,
     existTime: existTime,
      systemOs: userdata,
    clickArr: clickArr

}
console.log( JSON.stringify(Api));


fetch("http://localhost:4000/api/designcreate", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(Api)
  }).then(res => {
    console.log("Request complete! response:", res);
  });

    // fetch('http://localhost:4000/api/designcreate', {
    //     method: 'POST',
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(response => console.log(JSON.stringify(response)))


}



// getapi();
  
// Defining async function
 function getapi() {
    const api_url = 
      "https://employeedetails.free.beeceptor.com/my/api/path";
    
    // Storing response
   const muru =  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {console.log(json);
         return json})
    console.log(muru);


}
