//main desktop
function aboutLogic(){
    bodyL.innerHTML = aboutLeft
    bodyR.innerHTML = aboutRight
    colorBar.style.transform = setColorBarSkew()
    logoTextObj.inner.innerHTML = logoTextObj.about
    logoTextObj.page.innerText = "About"
    aboutCircleCreation()

    mobileBody.innerHTML = mobileAboutHTML
    mobileLogoPage.innerText = "About"
    mobileLogoInner.innerHTML = mobileLogoTextObj.about
}