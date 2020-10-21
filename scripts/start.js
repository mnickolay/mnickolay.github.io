setViews(); 
appStart();

window.onresize = appStart;

function appStart(){
        if(window.innerWidth >= 900 && width < 900) greaterThan900()
        else if(window.innerWidth < 900 && width >= 900) lessThan900()
}

function greaterThan900(){
    displayingMobile = false;
    width = window.innerWidth
    desktop.style.display = ""
    mobile.style.display = "none"
}

function lessThan900(){
    displayingMobile = true;
    width = window.innerWidth
    desktop.style.display = "none"
    mobile.style.display = ""
}

function setViews(){
    desktopStart();
    if(window.innerWidth >= 900){
        desktop.style.display = ""
        mobile.style.display = "none"
    }else{
        mobile.style.display = ""
        desktop.style.display = "none"
    }
    
}