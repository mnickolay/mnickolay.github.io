function desktopStart(){
    currentColor = blue;
    colorBar.style.backgroundColor = currentColor;
    mobileColorBar.style.backgroundColor = currentColor;
    page = "home";
    navCircle1.classList.add("navActive");
    mobileNavCircle1.classList.add("mobileNavActive");
    homeLogic();
}

function pageScrollNavClick(clr, pg, cir){
    currentColor = clr;
    page = pg;
    colorBar.style.backgroundColor = currentColor;
    mobileColorBar.style.backgroundColor = currentColor;
    removeActive();
    addActive(cir);
    findLogicSwitch();
}

function findLogicSwitch() {
    resetRLHTML();
    switch(page){
        case "home":
            homeLogic();
            break;
        case "resume":
            resumeLogic();
            break;
        case "about":
            aboutLogic();
            break;
        case "contact":
            contactLogic();
            break;
    }
};

function resetRLHTML(){
    bodyL.innerHTML = leftHTMLstr;
    bodyR.innerHTML = rightHTMLstr;
    rightHTML = document.querySelector(".rightHTML");
    leftHTML = document.querySelector(".leftHTML");
    resPageSet = false
    contactIntervalArr.map((thisInt) => {
        clearInterval(thisInt)
        contactIntervalArr = []
    })
}