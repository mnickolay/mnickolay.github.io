var logoTimer;
var logoBubble;
var logoIntervalArr = [];

logoTextObj.inner.style.display = "none"

logoParent.addEventListener("mouseenter", () =>{
    logoIntervalArr.push(logoTimer = setInterval(() => {
        logoParent.style.backgroundColor = currentColor;
        logoParent.style.height = findLogoHeight() + "vw";
    }, 100));

    logoIntervalArr.push(logoBubble = setInterval(() => {
        cssBorderRadius(logoParent);
    }, 300))
    
    logoParent.style.borderColor = "#f0f0f0";
    logoParent.style.width = "30vw";
    logoTextObj.smile.style.opacity = "1";
    logoTextObj.mn.style.opacity = "0";
    logoTextObj.circle.style.border = "1px solid transparent";
    logoTextObj.inner.style.display = ""
})

logoParent.addEventListener("mouseleave", () =>{
    logoIntervalArr.map((thisInt) => {
        clearInterval(thisInt)
        logoIntervalArr = []
    })
    logoParent.style.backgroundColor = "transparent";
    logoParent.style.borderColor = "transparent";
    logoParent.style.height = "5vw";
    logoParent.style.width = "5vw";
    logoParent.style.borderRadius = "50px";
    logoTextObj.smile.style.opacity = "0";
    logoTextObj.mn.style.opacity = "1";
    logoTextObj.circle.style.border = "1px solid black";
    logoTextObj.inner.style.display = "none"
})

// mobile
mobileLogoParent.addEventListener('mouseup', () => {
    if(mobileNavToggle){
        mobileColorBar.style.height = "9%"
        mobileLogoMain.innerText = "MN"
        mobileNavToggle = false
    }else{
        mobileColorBar.style.height = "90%"
        mobileLogoMain.innerText = "X"
        mobileNavToggle = true;
    } 
})

function findLogoHeight(){
    let count = 0;
    let thisEle = logoTextObj.inner.childNodes;
    thisEle.forEach((item) => {
        count += item.clientHeight + (window.innerHeight/18)
    })
    count = (count/window.innerWidth) * 100
    return count;
}

function logoStyling(ele){
    ele.mouseenter(function(){
        eleInterval(ele);
    });
    if(!active){
        ele.mouseleave(function(){
            clearInterval(interval);
            resetBorder(ele);
        })
    }
}

function eleInterval(ele){
    interval = setInterval(function(){
        cssBorderRadius(ele);
    }, 500)
}

function resetBorder(ele){
    ele.css("border-radius", "5px")
}

function cssBorderRadius(ele){
    for(var i=0; i<4; i++){
        borderString+=valueFinder() + " ";
    }
    ele.style.borderRadius = borderString;
    borderString="";
}

function valueFinder(){
    if(rng()) return "30px"
    else return "5px"
}

function rng(){
    return Math.round(Math.random());
}