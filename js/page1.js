// select element
let page1_left = document.querySelector(".page1_left")
let page1_center = document.querySelector(".page1_center")
let page1_right = document.querySelector(".page1_right")
let page1_left_top = document.querySelector(".page1_left_top")
let menuAll = document.querySelectorAll(".menuc");

let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");


// task array
let taskArr = []        

// task object
let tastObj = {
    title: '',         
    description: '',   
    taskId: '',           
    priority: '',       
    state: false,       
    data: '',           
}

//task list
let tastList = [
    {
        id:0,
        value:'Today task list'
    }, 
    {
        id:1,
        value:'All tasks'
    },
    {
        id:2,
        value:'Completed tasks' 
    },
];
let taskId = 2;


// initialize
function init() {
    // get data
    if (localStorage.getItem('taskId') != null) {
        taskId = JSON.parse(localStorage.getItem('taskId'))
    }else {
        taskId = 3
    }
    if (localStorage.getItem('tastList') != null) {
        tastList = JSON.parse(localStorage.getItem('tastList'))
    } else {
        tastList = [
            {
                id:0,
                value:'Today task list'
            },  
            {
                id:1,
                value:'All tasks'
            },
            {
                id:2,
                value:'Completed tasks' 
            },
        ];
    }
    if (localStorage.getItem('taskArr') != null) {
        taskArr = JSON.parse(localStorage.getItem('taskArr'))
    } else {
        taskArr = []
    }
    initTast()
    initMission()
    console.log(taskArr);
}

// initialize task list
function initTast() {
    let tastListHtml = ''
    for (let i = 0; i < tastList.length; i++) {
        let item = tastList[i].value
        let id = tastList[i].id
        tastListHtml = tastListHtml + `<div class="page1_left_list tran3" onclick="clickTast(this,${id})">${item}</div>`
    }
    page1_left_top.innerHTML = tastListHtml
}


// initialize detail task
let page1_center_bottom = document.querySelector(".page1_center_bottom")
let missionId = 'all';      
function initMission() {
    let searchIptVl = searchIpt.value
    let mission = '';
    for (let i = 0; i < taskArr.length; i++) {
        let priorityColor = ''
        switch (taskArr[i].priority) {
            case 'Urgent and lmportant':
                priorityColor = '#CB1414';
                break;
            case 'Not Urgent and lmportant':
                priorityColor = '#FB8B25';
                break;
            case 'Urgent and Unimportant':
                priorityColor = '#A931BC';
                break;
            case 'Not Urgent and Unimportant':
                priorityColor = '#2BAA30';
                break;
        }
        if(taskArr[i].title.indexOf(searchIptVl) != -1){
            if(missionId == 'all'){
                mission = mission + `
                <div class="quizList" style="border-right: 2rem solid ${priorityColor};background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}" onclick="missionDetail(event,${i})">
                    <div class="checkBox" style="border:1px solid ${priorityColor};color: ${priorityColor}" onclick="checkMission(event,${i},${taskArr[i].state})">${taskArr[i].state ? '&radic;' : ''}</div>
                      <div>
                          <div class="quizTitle">${taskArr[i].title}</div>
                          <div class="quizDes">${taskArr[i].description}</div>
                     </div>
                </div>
            `
            }else {
                if(missionId == 0){
                    if(new Date(taskArr[i].data).toDateString() == new Date().toDateString()){
                        mission = mission + `
                <div class="quizList" style="border-right: 2rem solid ${priorityColor};background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}" onclick="missionDetail(event,${i})">
                    <div class="checkBox" style="border:1px solid ${priorityColor};color: ${priorityColor}" onclick="checkMission(event,${i},${taskArr[i].state})">${taskArr[i].state ? '&radic;' : ''}</div>
                      <div>
                          <div class="quizTitle">${taskArr[i].title}</div>
                          <div class="quizDes">${taskArr[i].description}</div>
                     </div>
                </div>
            `
                    }
                }else if(missionId == taskArr[i].taskId){
                    mission = mission + `
                <div class="quizList" style="border-right: 2rem solid ${priorityColor};background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}" onclick="missionDetail(event,${i})">
                    <div class="checkBox" style="border:1px solid ${priorityColor};color: ${priorityColor}" onclick="checkMission(event,${i},${taskArr[i].state})">${taskArr[i].state ? '&radic;' : ''}</div>
                      <div>
                          <div class="quizTitle">${taskArr[i].title}</div>
                          <div class="quizDes">${taskArr[i].description}</div>
                     </div>
                </div>
            `
                }else if(missionId == 2){
                    if(taskArr[i].state){
                        mission = mission + `
                <div class="quizList" style="border-right: 2rem solid ${priorityColor};background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}" onclick="missionDetail(event,${i})">
                    <div class="checkBox" style="border:1px solid ${priorityColor};color: ${priorityColor}" onclick="checkMission(event,${i},${taskArr[i].state})">${taskArr[i].state ? '&radic;' : ''}</div>
                      <div>
                          <div class="quizTitle">${taskArr[i].title}</div>
                          <div class="quizDes">${taskArr[i].description}</div>
                     </div>
                </div>
            `
                    }
                }else {
                    if(taskArr[i].taskId == missionId) {
                        mission = mission + `
                <div class="quizList" style="border-right: 2rem solid ${priorityColor};background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}" onclick="missionDetail(event,${i})">
                    <div class="checkBox" style="border:1px solid ${priorityColor};color: ${priorityColor}" onclick="checkMission(event,${i},${taskArr[i].state})">${taskArr[i].state ? '&radic;' : ''}</div>
                      <div>
                          <div class="quizTitle">${taskArr[i].title}</div>
                          <div class="quizDes">${taskArr[i].description}</div>
                     </div>
                </div>
            `
                    }
                }
            }
        }


    }
    page1_center_bottom.innerHTML = mission
}
// check box
function checkMission(e,index,type) {
    if(!type){
        if(window.confirm('You are sure to end the current mission？')){
            taskArr[index].state = true
            initMission()
            creactMission(index)
        }
    }
    if(window.event){
      
        window.event.cancelBubble = true;
    } else{
      
        e.preventDefault();
    }
}
// mission detail
function missionDetail(e,index) {
    if(document.body.clientWidth < 768){
        page1_center.style.width = 0;
        page1_center.style.padding = 0;
        page1_right.style.width = '100%';
        page1_right.style.padding = '0';
    }else {
        page1_left.style.width = 0;
        page1_left.style.padding = 0;
        page1_right.style.width = '40%';
        page1_right.style.padding = '0';
    }
    creactMission(index)
    if(window.event){
       
        window.event.cancelBubble = true;
    } else{
      
        e.preventDefault();
    }
}
// create task detail
function creactMission(index) {
    let priorityColor = ''
    switch (taskArr[index].priority) {
        case 'Urgent and lmportant':
            priorityColor = '#CB1414';
            break;
        case 'Not Urgent and lmportant':
            priorityColor = '#FB8B25';
            break;
        case 'Urgent and Unimportant':
            priorityColor = '#A931BC';
            break;
        case 'Not Urgent and Unimportant':
            priorityColor = '#2BAA30';
            break;
    }
    let missionDelHtml = `
    <div class="page1_right_title">
                    <div class="dataTitle">${new Date(taskArr[index].data).toDateString()}</div>
                </div>
                <div class="page1_right_del">
                    <div class="page1_right_sunTitle">
                        <div class="checkBox" style="border:1px solid ${priorityColor};color: ${priorityColor}" onclick="checkMission(event,${index},${taskArr[index].state})">
                        ${taskArr[index].state ? '&radic;' : ''}
                        </div>
                        ${taskArr[index].title}
                    </div>
                    <div class="page1_right_del_text">
                        ${taskArr[index].description}
                    </div>
                </div>
                <div class="delBack" onclick="delBack()"><img src="img/goback.png"/></div>
    `
    page1_right.innerHTML = missionDelHtml
}
// click back
function clickGoBack() {
    if(document.body.clientWidth < 768){
        page1_left.style.width = '100%';
        page1_left.style.padding = '1rem 1.5rem';
        page1_center.style.width = 0;
        page1_center.style.padding = 0;
    }else {
        page1_left.style.width = '40%';
        page1_left.style.padding = '1rem 1.5rem';
        page1_right.style.width = 0;
        page1_right.style.padding = 0;
    }
}
// click back from detail information
function delBack() {
    page1_right.style.width = 0;
    page1_right.style.padding = 0;
    page1_center.style.width = 100 + '%'
    page1_center.style.padding = '3rem 2rem'
}
// search table and add table
let page1_center_search = document.querySelector(".page1_center_search");
let page1_center_add = document.querySelector(".page1_center_add");

// click task list
function clickTast(e, id) {
    if(document.body.clientWidth < 768){
        page1_left.style.width = 0
        page1_left.style.padding = 0
        page1_center.style.width = 100 + '%'
        page1_center.style.padding = '3rem 2rem'
    }
    searchIpt.value = ''
    let tastListAll = document.querySelectorAll(".page1_left_list")
    for (let i = 0; i < tastListAll.length; i++) {
        tastListAll[i].classList.remove('tastActive')
    }
    e.classList.add('tastActive')
    if (id == '1') {
        page1_center_search.style.display = 'block'
        page1_center_add.style.display = 'none'
        missionId = 'all'
    } else {
        page1_center_search.style.display = 'none'
        page1_center_add.style.display = 'flex'
        missionId = id
    }
    initMission()
}


let timer = null;     

let tastMark = document.querySelector(".tastMark")
let addTastIpt = document.querySelector(".addTastIpt")

// click add list
function addList() {
    tastMark.style.display = 'flex'
}

// add task list
function addTask() {
    if (addTastIpt.value == '') {
        return alert('Please enter the content')
    } else {
        taskId++
        tastList.push({
            id: taskId,
            value: addTastIpt.value
        })

        initTast()
        tastMark.style.display = 'none'
    }
}

// cancel add task
function cancelAdd() {
    tastMark.style.display = 'none'
    addTastIpt.value = ''
}

// add task list table
let missionPop = document.querySelector(".missionPop")

function addMissionList() {
    missionPop.style.display = 'flex'
    initListSel()
}

//get input value  
let titleIpt = document.querySelector(".titleIpt");
let descriptionIpt = document.querySelector(".descriptionIpt");
let listIpt = document.querySelector(".listIpt");
let priorityIpt = document.querySelector(".priorityIpt");
let dataIpt = document.querySelector(".dataIpt");

//init list select
function initListSel() {
    let listSelHtml = ''
    for (let i = 0; i < tastList.length; i++) {
        if(tastList[i].id >= 3){
            listSelHtml = listSelHtml + `<option value="${tastList[i].id}">${tastList[i].value}</option>`
        }
    }
    listIpt.innerHTML = listSelHtml
}

// cancel add task
function cancelMission() {
    missionPop.style.display = 'none'
    descriptionIpt.value = '';
    dataIpt.value = '';
}

// click add task  Done
let doneState = true;       
function doneMission() {
    doneState = true
    if (titleIpt.value == '') {
        doneState = false
    }
    if (descriptionIpt.value == '') {
        doneState = false
    }
    if (dataIpt.value == '') {
        doneState = false
    }

    if (doneState) {
        tastObj = {
            title: titleIpt.value,
            description: descriptionIpt.value,
            taskId: listIpt.value,
            priority: priorityIpt.value,
            state: false,
            data: dataIpt.value,
        }
        taskArr.push(tastObj)
        cancelMission()
        initMission()
    } else {
        return alert('Please complete the information')
    }
}

// search title
let searchIpt = document.querySelector(".searchIpt")
function searchMission(){
    initMission()
}


