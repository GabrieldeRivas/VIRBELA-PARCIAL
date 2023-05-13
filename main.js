let facebookIcon = document.querySelector("#icon-facebook");

facebookIcon.addEventListener("click", () => {
    location.href ='https://www.facebook.com/Virbela/';
})

let twitterIcon = document.querySelector("#icon-twitter");

twitterIcon.addEventListener("click", () => {
    location.href ='https://twitter.com/VirbelaHQ';
})

let linkedinIcon = document.querySelector("#icon-linkedin");

linkedinIcon.addEventListener("click", () => {
    location.href ='https://www.linkedin.com/company/virbela/';
})

let facebookIconCel = document.querySelector("#icon-facebook-cel");

facebookIconCel.addEventListener("click", () => {
    location.href ='https://www.facebook.com/Virbela/';
})

let twitterIconCel = document.querySelector("#icon-twitter-cel");

twitterIconCel.addEventListener("click", () => {
    location.href ='https://twitter.com/VirbelaHQ';
})

let linkedinIconCel = document.querySelector("#icon-linkedin-cel");

linkedinIconCel.addEventListener("click", () => {
    location.href ='https://www.linkedin.com/company/virbela/';
})

let registerButton = document.querySelector("#register-button");

registerButton.addEventListener("click", () => {
    location.href ='register.html';
})

// DARK-MODE TOGGLE

const btnSwitch = document.querySelector(".dark-toggle");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

const btnSwitchCel = document.querySelector("#dark-toggle-cel");

btnSwitchCel.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})
