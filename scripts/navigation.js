function findNavSwitch(scroll){
    switch(page){
        case "home":
            if(scroll=="down")
                pageScrollNavClick(yellow, "resume", navCircle2);
            break;
        case "resume":
            if(scroll=="up")
                pageScrollNavClick(blue, "home", navCircle1);
            else
                pageScrollNavClick(pink, "about", navCircle3);
            break;
        case "about":
            if(scroll=="up")
                pageScrollNavClick(yellow, "resume", navCircle2);
            else
                pageScrollNavClick(green, "contact", navCircle4);
            break;
        case "contact":
            if(scroll=="up")
                pageScrollNavClick(pink, "about", navCircle3);
            break;
    }
}

//click
navCircle1.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
            pageScrollNavClick(blue, "home", this);
});

navCircle2.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
        pageScrollNavClick(yellow, "resume", this);
});

navCircle3.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
            pageScrollNavClick(pink, "about", this);
});

navCircle4.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
            pageScrollNavClick(green, "contact", this);
});

mobileNavCircle1.addEventListener("click", function(){
    if(!this.classList.contains("mobileNavActive"))
            pageScrollNavClick(blue, "home", this);
});

mobileNavCircle2.addEventListener("click", function(){
    if(!this.classList.contains("mobileNavActive"))
        pageScrollNavClick(yellow, "resume", this);
});

mobileNavCircle3.addEventListener("click", function(){
    if(!this.classList.contains("mobileNavActive"))
            pageScrollNavClick(pink, "about", this);
});

mobileNavCircle4.addEventListener("click", function(){
    if(!this.classList.contains("mobileNavActive"))
            pageScrollNavClick(green, "contact", this);
});

//hover
navCircle1.addEventListener("mouseenter", function(){
    this.children[0].innerText = "Home";
});

navCircle1.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});


navCircle2.addEventListener("mouseenter", function(){
    this.children[0].innerText = "Resume";
});

navCircle2.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});

navCircle3.addEventListener("mouseenter", function(){
    this.children[0].innerText = "About";
});

navCircle3.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});

navCircle4.addEventListener("mouseenter", function(){
    this.children[0].innerText = "Contact";
});

navCircle4.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});

//scroll
window.addEventListener("wheel", function(event){
    if(!displayingMobile){
        if(event.deltaY < 0) findNavSwitch("up")
        else if(event.deltaY > 0) findNavSwitch("down")
    }
})

//arrow
document.onkeydown = function(event){
    if(!displayingMobile){
        if(event.key === "ArrowDown") findNavSwitch("down")
        else if(event.key === "ArrowUp") findNavSwitch("up")
    }
}

function addActive(circle){
    let thisMobile = false;
    let navNum = 1;

    if(circle.id.includes("mobile")){
        circle.classList.add("mobileNavActive")
        thisMobile = true
    }else circle.classList.add("navActive")

    for(var i=1; i<=4; i++){
        if(circle.id.includes(i.toString())){
            navNum = i;
            break;
        }
    }

    if(!thisMobile){
        mobileNavCircleArr.forEach((nav) => {
            if(nav.id.includes(navNum.toString()))
                nav.classList.add("mobileNavActive")
        })
    }else{
        navCircleArr.forEach((nav) => {
            if(nav.id.includes(navNum.toString()))
                nav.classList.add("navActive")
        })
    }
}

function removeActive(){
    navCircleArr.forEach(function(cir){
        cir.classList.remove("navActive");
    });
    mobileNavCircleArr.forEach(function(cir){
        cir.classList.remove("mobileNavActive");
    });
};