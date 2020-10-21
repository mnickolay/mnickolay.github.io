//main desktop
function resumeLogic(){
    setResumePage()
    setMobileResumeVar()
    setResumeVariables()
    getObjForEventListeners()
    mobileResumeLogic()
}

//main mobile
function mobileResumeLogic(){
    mobileDisplayX.addEventListener("mouseup", () => {
        mobileSetResumeInfoDisplay()
    })

    mobileDisplayPrev.addEventListener("mouseup", () => {
        mobileFindPreviousResumeObj()
    })

    mobileDisplayNext.addEventListener("mouseup", () => {
        mobileFindNextResumeObj()
    })

    mobileLogoPage.innerText = "Resume"
    mobileLogoInner.innerHTML = mobileLogoTextObj.resume
}

function mobileFindPreviousResumeObj(){
    if(mobileCurrentResumeDisplay.num != 0){
        Object.keys(resumeObj).forEach((childObj) => {
            Object.keys(resumeObj[childObj]).forEach(function(innerChildObj){
                let thisObj = resumeObj[childObj]
                if(thisObj[innerChildObj].num == mobileCurrentResumeDisplay.num-1){
                    mobileCurrentResumeDisplay = thisObj[innerChildObj]
                    mobileObjSettingDisplayFill(mobileCurrentResumeDisplay)
                }
            })
        })
    }
}

function mobileFindNextResumeObj(){
    if(mobileCurrentResumeDisplay.num != 11){
        let settingNext = true;
        Object.keys(resumeObj).forEach((childObj) => {
            Object.keys(resumeObj[childObj]).forEach(function(innerChildObj){
                let thisObj = resumeObj[childObj]
                if(settingNext){
                    if(thisObj[innerChildObj].num == mobileCurrentResumeDisplay.num+1){
                        mobileCurrentResumeDisplay = thisObj[innerChildObj]
                        mobileObjSettingDisplayFill(mobileCurrentResumeDisplay)
                        settingNext = false;
                    }
                }
            })
        })
    }
}

function getObjForEventListeners(){
    Object.keys(skillsObj).forEach(function(childObj){
        var obj = skillsObj[childObj]
        objAddEventListeners(obj)
    });

    Object.keys(educationObj).forEach(function(childObj){
        var obj = educationObj[childObj]
        objAddEventListeners(obj)
    });

    Object.keys(workObj).forEach(function(childObj){
        var obj = workObj[childObj]
        objAddEventListeners(obj)
    });
}

function objRemoveActiveClass(obj){
    var resActive = document.querySelector(".resActive");
    if(resActive) resActive.classList.remove("resActive");
    obj.ele.classList.add("resActive")
}

function objAddEventListeners(obj){
    obj.ele.addEventListener("mouseenter", () =>{
        objRemoveActiveClass(obj)

        resTHead.innerHTML=""
        resTBody.innerHTML=""
        resTHead.innerHTML = objSettingTableHeader(obj)
        resTBody.innerHTML += objSettingTableFillArr(obj)
    })

    obj.mobileEle.addEventListener("mouseup", () =>{
        mobileSetResumeInfoDisplay()
        mobileObjSettingDisplayFill(obj)
    })
}

function mobileObjSettingDisplayFill(obj){
    mobileCurrentResumeDisplay = obj
    mobileDisplayFillName.innerText = obj.mobileEle.innerText
    if(obj.date) mobileDisplayFillDate.innerText = obj.date
    if(obj.title) mobileDisplayFillTitle.innerText = obj.title
    mobileDisplayFillArr.innerHTML = mobileObjGetFillArrString(obj.arr)
}

function mobileObjGetFillArrString(arr){
    let fillArrStr = "<ul id='mobileResumeList'>"
    arr.forEach((item) =>{
        fillArrStr += "<li>" + item + "</li>"
    })
    fillArrStr += "</ul>"
    return fillArrStr
}

function mobileSetResumeInfoDisplay(){
    if(mobileResumeInfoDisplay.style.display == ""){
        mobileClearResumeDisplayFill()
        mobileResumeInfoDisplay.style.opacity = "0"
        mobileResumeInfoDisplay.style.display = "none"
    }else{
        mobileResumeInfoDisplay.style.display = "" 
        mobileResumeInfoDisplay.style.opacity = "1"
    }
}

function mobileClearResumeDisplayFill(){
    mobileDisplayFillName.innerText = ""
    mobileDisplayFillDate.innerText = ""
    mobileDisplayFillTitle.innerText = ""
    mobileDisplayFillArr.innerHTML = ""
}

function objSettingTableHeader(obj){
    var thisTableFill = '<tr><th>' +  obj.ele.innerHTML + '</th>'
    if(obj.date != null){
        thisTableFill += '<th id="thDate">' + obj.date + '</th></tr>'
    }
    if(obj.title != null){
        thisTableFill += '<tr><th id="thTitle">' + obj.title + '</th><th></th>'
    }
    thisTableFill += '</tr>'
    return thisTableFill;
}

function objSettingTableFillArr(obj){
    var thisTableFill = ""
    for(var i=0; i<obj.arr.length; i++){
        thisTableFill += '<tr><td>'
        thisTableFill += obj.arr[i] + '</td></tr>'
    }
    return thisTableFill
}

function objSettingTableFillDate(obj){
    var thisTableFill = ""
    if(obj.date != null){
        thisTableFill += '<tr><td>' + obj.date + '</td></tr>'
    }
    return thisTableFill
}

function setResumePage(){
    resPageSet = true
    leftHTML.innerHTML = resumeLeft
    rightHTML.innerHTML = resumeRight
    colorBar.style.transform = "skew(-7deg)"
    logoTextObj.inner.innerHTML = logoTextObj.resume
    logoTextObj.page.innerText = "Resume"
    mobileBody.innerHTML = mobileResumeBody
}

function setMobileResumeVar(){
    mobileResumeInfoDisplay = document.querySelector(".mobileResumeInfoDisplay");
    mobileDisplayFill = document.querySelector(".mobileDisplayFill");
    mobileDisplayFillName = document.querySelector("#mobileDisplayFillName");
    mobileDisplayFillDate = document.querySelector("#mobileDisplayFillDate");
    mobileDisplayFillTitle = document.querySelector("#mobileDisplayFillTitle");
    mobileDisplayFillArr = document.querySelector("#mobileDisplayFillArr");
    mobileDisplayX = document.querySelector(".mobileDisplayX");
    mobileDisplayPrev = document.querySelector(".mobileDisplayPrev");
    mobileDisplayNext = document.querySelector(".mobileDisplayNext");
}

function setResumeVariables(){
    skillsObj = {
        languageObj: {
            num: 0,
            ele: document.querySelector(".langHead"),
            mobileEle: document.querySelector("#mobileLanguages"),
            arr: ['C#', 'JavaScript', 'HTML/CSS', 'JSON', 'XML', 'SQL', 'noSQL']
        },
        lafObj: {
            num: 1,
            ele: document.querySelector(".lafHead"),
            mobileEle: document.querySelector("#mobileLAF"),
            arr: ['.NET Core', 'jQuery', 'MVC', 'ASP.NET', 'React', 'Razor Pages', 'Node.js',
            'Express', 'APIs', 'Bootstrap', 'Entity Framework', 'Dapper ORM', 'NUnit']
        },
        environmentObj: {
            num: 2,
            ele: document.querySelector(".environmentHead"),
            mobileEle: document.querySelector("#mobileEnvironments"),
            arr: ['Visual Studio', 'Sublime', 'Command Prompt',
            'Git Bash', 'MongoDB', 'SQL Server Management Studio']
        },
        generalObj: {
            num: 3,
            ele:document.querySelector(".generalHead"),
            mobileEle: document.querySelector("#mobileGeneral"),
            arr: ['Full Stack Developement', 'Object Orientation', 'Generics',
            'Server Side Validation', 'REST', 'Testing']
        }
    };
    educationObj = {
        TSG: {
            num: 4,
            ele: document.querySelector(".SWGHead"),
            mobileEle: document.querySelector("#mobileSWG"),
            date: '01/2020 - 04/2020',
            arr: [
                'Intensive and challenging, The Software Guild has students coding 60 hours a week to develop full-stack  programming abilities.',
                'Developed a C# banking software that saves customer account information with three different account types,  each with varying rulesets. Required dependency injection, interfaces, and three layers with models.',
                'Built a  software program in Visual Studio that took in and saved order information for a flooring company to unique  file locations depending on the order date. Implemented an SQL Server to store data and write to the program.',
                'Designed a website for a restaurant and for a virtual vending machine that used an online server with applicable  items. Both were designed with and used an extensive amount of CSS, Bootstrap, and JavaScript.',
                'Utilized and became proficient with GitHub, SQL Server Mgmt Studio, and IDEs.'
            ]
        },
        WDB: {
            num: 5,
            ele: document.querySelector(".WDBHead"),
            mobileEle: document.querySelector("#mobileWDB"),
            date: '05/2020 - Current',
            arr: [
                'Currently working through an online course for web development that emphasizes HTML, CSS, JavaScript, jQuery, Bootstrap, and Node.js.',
                'Built from scratch full, responsive websites and small, browser-based games and tools using DOM manipulation.'
            ]
        },
        DCT: {
            num: 6,
            ele: document.querySelector(".DCTHead"),
            mobileEle: document.querySelector("#mobileDCT"),
            date: '08/2017 - 05/2019',
            arr: [
                'Received an associates degree in HVAC/R. Emphasis on servicing residential and commercial HVAC equipment.'
            ]
        }
    };
    workObj = {
        instacart: {
            num: 7,
            ele: document.querySelector(".instacartHead"),
            mobileEle: document.querySelector("#mobileInstacart"),
            date: '06/2020 - Current',
            title: 'Shopper, Driver',
            arr: [
                'Working part time doing grocery delivery service for Instacart customers',
                'Required to shop and communicate with customers on order information and finding replacements for products when not avaialable.'
            ]
        },
        synergy: {
            num: 8,
            ele: document.querySelector(".synergyHead"),
            mobileEle: document.querySelector("#mobileSynergy"),
            date: '08/2019 - 01/2020',
            title: 'Delivery Driver',
            arr: [
                'Worked for Amazon as a local package delivery driver.',
                'Entrusted with an average of 180 packages, a company phone, and a company van daily for Amazon.',
                'Required to be flexible with assisting other drivers who were behind schedule.'
            ]
        },
        gilbert: {
            num: 9,
            ele: document.querySelector(".gilbertHead"),
            mobileEle: document.querySelector("#mobileGilbert"),
            date: '05/2019 - 08/2019',
            title: 'Pre-Apprentice',
            arr: [
                'Tasked with assisting journeymen with installing commercial HVAC equipment.',
                'Helped in transitioning all warehouse tools into an online database and installing barcodes.',
                'Organized tool crib, performed deliveries, and cleaned condenser coils.'
            ]
        },
        mmc: {
            num: 10,
            ele: document.querySelector(".mmcHead"),
            mobileEle: document.querySelector("#mobileMMC"),
            date: '05/2018 - 08/2018',
            title: 'Pre-Apprentice',
            arr: [
                'The job mainly consisted of full time condenser coil cleaning with a permenent teammeate.',
                'Given a company truck to arrive at specfied job sites to perform job and communicate with on-site employees.'
            ]
        },
        salut: {
            num: 11,
            ele: document.querySelector(".salutHead"),
            mobileEle: document.querySelector("#mobileSalut"),
            date: '05/2016 - 11/2019',
            title: 'Food Runner, Busser, Dishwasher',
            arr: [
                'Was the person who was responsible with getting all food out to tables in correct table positions.',
                'Fast paced environment required you to always be looking for work to do and help in any way possible.',
                'Cleaned tables and reset when customers left, and washed dishes when noone was available to do so.'
            ]
        }
    }

    resumeObj = {
        skills: skillsObj,
        education: educationObj,
        work: workObj
    }
}