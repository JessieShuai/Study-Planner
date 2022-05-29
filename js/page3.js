// pomo timer
let TimeS = 0;
let branchS = 0;
let secondS = 0;
let timerIntWatch;  
let timerState = false;     // start
let stopWatchTimeChild = document.querySelector(".stopWatchTimeChild")
function initWatch() {
    if(localStorage.getItem('TimeS') != null){
        TimeS = JSON.parse(localStorage.getItem('TimeS'))
    }else {
        TimeS = 0;
    }
    if(localStorage.getItem('branchS') != null){
        branchS = JSON.parse(localStorage.getItem('branchS'))
    }else {
        branchS = 0;
    }
    if(localStorage.getItem('secondS') != null){
        secondS = JSON.parse(localStorage.getItem('secondS'))
    }else {
        secondS = 0;
    }

    if(localStorage.getItem('setStudy') != null){
        setStudy = JSON.parse(localStorage.getItem('setStudy'))
    }else {
        setStudy = 15;
    }
    if(localStorage.getItem('setStudyCopy') != null){
        setStudyCopy = JSON.parse(localStorage.getItem('setStudyCopy'))
    }else {
        setStudyCopy = 15;
    }
    if(localStorage.getItem('setStudyCopySecond') != null){
        setStudyCopySecond = JSON.parse(localStorage.getItem('setStudyCopySecond'))
    }else {
        setStudyCopySecond = 0;
    }
    if(localStorage.getItem('setBreak') != null){
        setBreak = JSON.parse(localStorage.getItem('setBreak'))
    }else {
        setBreak = 5;
    }
    if(localStorage.getItem('setBreakCopy') != null){
        setBreakCopy = JSON.parse(localStorage.getItem('setBreakCopy'))
    }else {
        setBreakCopy = 5;
    }
    if(localStorage.getItem('setBreakCopySecond') != null){
        setBreakCopySecond = JSON.parse(localStorage.getItem('setBreakCopySecond'))
    }else {
        setBreakCopySecond = 0;
    }
    if(localStorage.getItem('endStudyState') != null){
        endStudyState = JSON.parse(localStorage.getItem('endStudyState'))
    }else {
        endStudyState = false;
    }

    let watchText = `${TimeS < 10 ? '0'+TimeS : TimeS} : ${branchS < 10 ? '0'+branchS : branchS} : ${secondS < 10 ? '0'+secondS : secondS}`
    stopWatchTimeChild.innerHTML = watchText
}
function timerWatch(e){
    if(!timerState){
        e.innerText = 'STOP'
        timerState = true
        suspendState = true
        timerIntWatch = setInterval(function () {
            if(secondS < 59){
                secondS++
            }else {
                secondS = 0
                if(branchS < 59){
                    branchS++
                }else {
                    branchS = 0
                    TimeS++
                }
            }
            let watchText = `${TimeS < 10 ? '0'+TimeS : TimeS} : ${branchS < 10 ? '0'+branchS : branchS} : ${secondS < 10 ? '0'+secondS : secondS}`
            stopWatchTimeChild.innerHTML = watchText
        },1000)
    }else {
        TimeS = 0;
        branchS = 0;
        secondS = 0;
        let watchText = `${TimeS < 10 ? '0'+TimeS : TimeS} : ${branchS < 10 ? '0'+branchS : branchS} : ${secondS < 10 ? '0'+secondS : secondS}`
        stopWatchTimeChild.innerHTML = watchText
        clearInterval(timerIntWatch)
        e.innerText = 'START'
        timerState = false
        suspendState = false
    }
}
// pause timer
let suspendState = false       
function suspendWatch() {
    if(timerState&&suspendState){
        clearInterval(timerIntWatch)
        suspendState = false
    }else if(!suspendState && timerState){
        timerIntWatch = setInterval(function () {
            if(secondS < 59){
                secondS++
            }else {
                secondS = 0
                if(branchS < 59){
                    branchS++
                }else {
                    branchS = 0
                    TimeS++
                }
            }
            let watchText = `${TimeS < 10 ? '0'+TimeS : TimeS} : ${branchS < 10 ? '0'+branchS : branchS} : ${secondS < 10 ? '0'+secondS : secondS}`
            stopWatchTimeChild.innerHTML = watchText
        },1000)
        suspendState = true
    }
}

// timer switch
let Pomodoro = document.querySelector(".Pomodoro")
let Stopwatch = document.querySelector(".Stopwatch")
let page3_stopWatch = document.querySelector(".page3_stopWatch")
let page3_study = document.querySelector(".page3_study")
function page3switchBtn(type){
    if(type == 'p'){
        Pomodoro.classList.add('activeWatch')
        Stopwatch.classList.remove('activeWatch')
        page3_stopWatch.style.display = 'none'
        page3_study.style.display = 'block'
        initStudyTimer()
        if(endStudyState){
            page3_study_set.style.display = 'none';
            page3_study_timer.style.display = 'flex';
            if(setStudyCopySecond > 0 || setStudyCopy > 0){
                createStudyTimer()
            }else {
                createBreakTimer()
            }
        }
    }else {
        Stopwatch.classList.add('activeWatch')
        Pomodoro.classList.remove('activeWatch')
        page3_stopWatch.style.display = 'flex'
        page3_study.style.display = 'none'
    }
}
// init pomo timer
function initStudyTimer() {
    studyTime.innerHTML = `${setStudy} : 00`
    BreakTime.innerHTML = `${setBreak < 10 ? '0'+ setBreak : setBreak} : 00`
}

// set study time
let setStudy = 15;
let setStudyCopy = 15;     
let setStudyCopySecond = 0  
// set break time
let setBreak = 5;
let setBreakCopy = 5;          
let setBreakCopySecond = 0      

// add or subtract time
let studyTime = document.querySelector(".studyTime")
let BreakTime = document.querySelector(".BreakTime")
function setStudyTimer(type,state) {
    setStudyCopySecond = 0;
    setBreakCopySecond = 0;
    if(type == 1){
        if(state == 'add'){
            setStudy = setStudy + 1
            setStudyCopy = setStudy
        }else {
            if(setStudy > 15){
                setStudy = setStudy - 1
                setStudyCopy = setStudy
            }
        }
        studyTime.innerHTML = `${setStudy} : 00`
    }else {
        if(state == 'add'){
            setBreak = setBreak + 1
            setBreakCopy = setBreak
        }else {
            if(setBreak > 5){
                setBreak = setBreak - 1
                setBreakCopy = setBreak
            }
        }
        BreakTime.innerHTML = `${setBreak < 10 ? '0'+ setBreak : setBreak} : 00`
    }
}

let page3_study_set = document.querySelector(".page3_study_set")
let page3_study_timer = document.querySelector(".page3_study_timer")
// click start timer
function startTimer() {
    page3_study_set.style.display = 'none';
    page3_study_timer.style.display = 'flex';
    setStudyCopy = setStudy
    setStudyCopySecond = 0

    setBreakCopy = setBreak
    setBreakCopySecond = 0
    createStudyTimer()
}
// create study time
let study_time_timer = document.querySelector(".study_time_timer")
function createStudyTimer() {
    study_time_timer.style.backgroundColor = '#fff'
    study_time_timer.innerHTML = `${setStudyCopy < 10 ? '0' + setStudyCopy : setStudyCopy} : ${ setStudyCopySecond < 10 ? '0' + setStudyCopySecond : setStudyCopySecond }`
}
// create break time
function createBreakTimer() {
    study_time_timer.style.backgroundColor = '#C9DFF2'
    study_time_timer.innerHTML = `${setBreakCopy < 10 ? '0' + setBreakCopy : setBreakCopy} : ${ setBreakCopySecond < 10 ? '0' + setBreakCopySecond : setBreakCopySecond }`
}

let startStudyState = false;       
let startStudyTimer;               
function clickStartStudy(e) {
    if(!startStudyState){
        startStudyState = true
        startStudyInter()
        e.innerText = 'PAUSE'
    }else {
        clearInterval(startStudyTimer)
        startStudyState = false
        e.innerText = 'START'
    }
}
let endStudyState = false;

// start timer
function startStudyInter() {
    startStudyTimer = setInterval(function (){
        endStudyState = true
        if(setStudyCopy >= 0){
            if(setStudyCopySecond == 0){
                setStudyCopySecond = 60;
                setStudyCopy = setStudyCopy - 1
            }
            setStudyCopySecond = setStudyCopySecond - 1
            if(setStudyCopy >= 0){
                createStudyTimer()
            }
        }else {
            setStudyCopySecond = 0;
            // setStudyCopy = 0;
            if(setBreakCopy >= 0){
                if(setBreakCopySecond == 0){
                    setBreakCopySecond = 60;
                    setBreakCopy = setBreakCopy - 1
                }
                setBreakCopySecond = setBreakCopySecond - 1
                if(setBreakCopy >= 0){
                    createBreakTimer()
                }
            }else {
                setBreakCopySecond = 0;
                // setBreakCopy = 0;
                createBreakTimer()
                clearInterval(startStudyTimer)
                startStudyState = false
                endStudyState = false
                endLearning()
            }
        }
    },200)
}
// stop timer
function endLearning(){
    endStudyState = false
    startStudyState = false
    setStudyCopy = 0;
    setStudyCopySecond = 0;
    setBreakCopy = 0;
    setBreakCopySecond = 0;
    clearInterval(startStudyTimer)
    page3_study_set.style.display = 'block';
    page3_study_timer.style.display = 'none';
}
let musicArr = [
    {
        name: 'Sharman Rock - Hanabi',
        src: './music/Sharman.mp3'
    },
    {
        name: 'WJCTION',
        src: './music/WJCTION.mp3'
    }
]
let musicIndex = 0
let music_name = document.querySelector(".music_name")
// last one
function lastSong(){
    if(musicIndex == 0){
        musicIndex = 1
        audioMusic.src = musicArr[musicIndex].src
        music_name.innerHTML = musicArr[musicIndex].name
    }else {
        musicIndex = 0
        audioMusic.src = musicArr[musicIndex].src
        music_name.innerHTML = musicArr[musicIndex].name
    }
    audioMusic.play()
    musicState = true
    kaiImg.src = './img/ting.png'
}
let musicState = false;  // pause
let audioMusic = document.querySelector(".audioMusic")
let kaiImg = document.querySelector(".kaiImg")
let music_con_left = document.querySelector(".music_con_left")

function startPause(){
    if(!musicState){
        musicState = true
        audioMusic.play()
        kaiImg.src = './img/ting.png'
        music_con_left.classList.add('music_con_left_rotate')
    }else {
        musicState = false
        audioMusic.pause()
        kaiImg.src = './img/kai.png'
        music_con_left.classList.remove('music_con_left_rotate')
    }
}
let page3_music_pop = document.querySelector(".page3_music_pop")
function musicBack(){
    page3_music_pop.style.display = 'none'
}
function musicPop(){
    page3_music_pop.style.display = 'flex'
}


