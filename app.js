let log = console.log;
let doc = document;

//////////////////////////////// ============> 1. scrolling animation <============= /////////////////////////////////

const sr = ScrollReveal({
  distance: `60px`,
  duration: 2500,
  delay: 400,
  reset: true,
  mobile: true,
});

sr.reveal(`header`, { delay: 200, origin: `bottom` });

sr.reveal(`.home-text`, { delay: 200, origin: `left` });
sr.reveal(`.home-img`, { delay: 200, origin: `right` });
sr.reveal(`.firstPlan`, { delay: 200, origin: `top` });
sr.reveal(`.secondPlan`, { delay: 300, origin: `top` });
sr.reveal(`.thirdPlan`, { delay: 400, origin: `top` });

sr.reveal(`.imgFormContainer img`, { delay: 200, origin: `top` });
sr.reveal(`#contactForm`, { delay: 300, origin: `bottom` });

sr.reveal(`.signUpForm, .signUpForm`, { delay: 200, origin: `top` });
sr.reveal(`.signUp-pic`, { delay: 300, origin: `bottom` });

window.onscroll = function (e) {
  if (window.scrollY > 650) {
    doc.querySelector(`.scrollBack`).style.cssText = `display: initial`;
  }
  if (window.scrollY < 650) {
    doc.querySelector(`.scrollBack`).style.cssText = `display: none`;
  }
};

//// ===> firebase code

let pass = "2334354@";

console.log();
