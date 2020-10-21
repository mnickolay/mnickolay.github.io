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