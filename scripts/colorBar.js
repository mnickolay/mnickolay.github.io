var lastSkew = 0

function setColorBarSkew(){
    let thisSkew = getRNGSkewValue()
    while(true){
        thisSkew = getRNGSkewValue()
        if(checkMatchingSkew(thisSkew)) break
    }

    if(height>1000) thisSkew = Math.round(thisSkew/(height/1000))
    lastSkew = thisSkew
    return "skew(" + thisSkew + "deg)"
}

function getRNGSkewValue(){
    return Math.floor((Math.random() * 35) + 1) - 15
}

function checkMatchingSkew(thisSkew){
    if(!lastSkew) return true
    if(lastSkew && thisSkew!=lastSkew) return true
    return false
}