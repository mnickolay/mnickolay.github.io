//page
var html = document.querySelector("html");
var desktop = document.querySelector(".desktopDiv");
var mobile = document.querySelector(".mobileDiv");
var width = window.innerWidth;
var height = window.innerHeight;

//mobile
var mobileNav = document.querySelector(".mobileNav");
var mobileBody = document.querySelector(".mobileBody");
var mobileColorBar = document.querySelector(".mobileColorBar");
var mobileLogoParent = document.querySelector(".mobileLogoParent");
var mobileLogoMain = document.querySelector(".mobileLogoMain");
var mobileLogoSmile = document.querySelector(".mobileLogoSmile");
var mobileLogoPage = document.querySelector(".mobileLogoPage");
var mobileLogoInner = document.querySelector(".mobileLogoInner");
var displayingMobile = false;

//logic
var pageLock = false;

//scroll
var scrollTimeoutStart = new Date().getTime()/1000;
var scrollTimeoutEnd;

//nav
var page = "home";
var navCircle1 = document.querySelector("#navCircle1"),
    navCircle2 = document.querySelector("#navCircle2"),
    navCircle3 = document.querySelector("#navCircle3"),
    navCircle4 = document.querySelector("#navCircle4");
var navCircleArr = [navCircle1,navCircle2,navCircle3,navCircle4];
var mobileNavCircle1 = document.querySelector("#mobileNavCircle1"),
    mobileNavCircle2 = document.querySelector("#mobileNavCircle2"),
    mobileNavCircle3 = document.querySelector("#mobileNavCircle3"),
    mobileNavCircle4 = document.querySelector("#mobileNavCircle4");
var mobileNavCircleArr = [mobileNavCircle1,mobileNavCircle2,mobileNavCircle3,mobileNavCircle4];
var mobileNavToggle = false;

//colors
var currentColor = "#0000ff";
const blue = "#0534cf";
const yellow = "#d1a212";
const green = "#009659";
const pink = "#ffb6bd";

//body
var colorBar = document.querySelector("#rightColor")
var bodyR = document.querySelector(".bodyRight");
var bodyL = document.querySelector(".bodyLeft");
var rightHTML = document.querySelector(".rightHTML");
var leftHTML = document.querySelector(".leftHTML");

//html
const leftHTMLstr = '<div class="leftHTML"></div>';
const rightHTMLstr = '<div class="rightHTML"></div>';

//about
var svgCircles;

//resume
var skillsObj;
var educationObj;
var workObj;
var resumeObj;
var resPageSet = false;

//mobile resume
var mobileResumeInfoDisplay;
var mobileDisplayFill;
var mobileDisplayFillName;
var mobileDisplayFillDate;
var mobileDisplayFillTitle;
var mobileDisplayFillArr;
var mobileDisplayX;
var mobileDisplayPrev;
var mobileDisplayNext;
var mobileCurrentResumeDisplay;

//contact
var contactObjArr;

//logo
var logoDiv = document.querySelector(".logoDiv");
var logoParent = document.querySelector(".logoParent");
var borderString = "";
var logoTextObj = {
    page: document.querySelector(".logoPage"),
    mn: document.querySelector(".logoMain"),
    smile: document.querySelector(".logoSmile"),
    circle: document.querySelector(".logoCircle"),
    inner: document.querySelector(".logoInner"),
    home: "<p>You can hover over me on each page to get details about the page!</p>" +
          "<p>This website was built by me using only HTML, CSS, and JavaScipt— no jQuery or BootStrap!</p>" +
          "<p>Animations use the @keyframes CSS rule.</p>" +
          "<p>Everything runs off of one HTML page and is updated when a new page is requested upon arrow key press, scroll, or click on the nav.</p>",
    resume: "<p>The resume categories can be hovered over to show details.</p>" +
            "<p>The left side of the page is populated with a JS object based on the hovered element.</p>" +
            "<p>Each object has an HTML element, a title, and an array of information for the lower table.</p>" +
            "<p></p>",
    about: "<p>The most interesting part of this page is the circles that are populated in the background.</p>" +
           "<p>Every time this page is visited, 7 circle objects are made with random values for their X and Y coordinates and radius.</p>" +
           "<p>They each follow the mouse at a different rate.</p>" +
           "<p>When looking at the code to generate the circles (scripts/circles.js), it may seem strange to make them objects.</p>" +
           "<p>This was the first part of the project that was somewhat outside of web development, and I wanted to demonstrate OOP understanding</p>",
    contact: "<p>This contact page runs similarily to the resume page with each object having a HTML element, title, and information.</p>" +
             "<p>Hovering over an element will begin an interval to write out the title and push the blinker a set amount.</p>" +
             "<p>Once typed, the information is show by setting the width of a white bar to 0 and left position of a bar to the text's length over one second.</p>" +
             "<p></p>",
}

var mobileLogoTextObj = {
    home: "<p>You can click on me on each page to get details about the page!</p>" +
          "<p>This website was built by me using only HTML, CSS, and JavaScipt— no jQuery or BootStrap!</p>" +
          "<p>Animations use the @keyframes CSS rule.</p>" +
          "<p>Everything runs off of one HTML page and is updated when a new page is requested upon a click on the nav.</p>" +
          "<p>While the mobile site has some variance to the desktop, the site was built and inteded for desktop use.</p>",
    resume: "<p>The resume categories can be clicked to show details.</p>" +
            "<p>The information is populated with a JS object based on the clicked element.</p>" +
            "<p>Each object has an HTML element, a title, and an array of information for the lower table.</p>" +
            "<p>The previous and next arrows use functions that find the current object on display's number, and switch the page information with the previous or next object.</p>",
    about: "<p>The desktop version of this site has circles on display that are randomly generated with JS. If you can, go check it out!</p>",
    contact: "<p>This contact page runs similarily to the resume page with each object having a HTML element, title, and information.</p>" +
             "<p>Clicking on an element will begin an interval to write out the title and push the blinker a set amount.</p>" +
             "<p>Once typed, the information is show by setting the width of a white bar to 0 with a 1px border on the left.</p>"
}