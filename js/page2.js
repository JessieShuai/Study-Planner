let page2_sm_listAll = document.querySelectorAll(".page2_sm_list")
function creactPage2List() {
    let level1 = ``
    let level2 = ``
    let level3 = ``
    let level4 = ``
    for(let i = 0; i < taskArr.length; i++){
        switch (taskArr[i].priority) {
            case 'Urgent and lmportant':
                level1 = level1 + `
                <div class="page2_mission" style="border-right: 2rem solid #CB1414;background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}">
                            <div class="checkBox" style="border: 1px solid #CB1414;color:#CB1414;" onclick="page2checkMission(${taskArr[i].state},${i})">
                            ${taskArr[i].state ? '&radic;' : ''}
                            </div>
                            <div class="page2_mission_title">${taskArr[i].title}</div>
                        </div>
            `
                break;
            case 'Not Urgent and lmportant':
                level2 = level2 + `
                <div class="page2_mission" style="border-right: 2rem solid #FB8B25;background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}">
                            <div class="checkBox" style="border: 1px solid #FB8B25;color:#FB8B25;" onclick="page2checkMission(${taskArr[i].state},${i})">
                            ${taskArr[i].state ? '&radic;' : ''}
                            </div>
                            <div class="page2_mission_title">${taskArr[i].title}</div>
                        </div>
            `
                break;
            case 'Urgent and Unimportant':
                level3 = level3 + `
                <div class="page2_mission" style="border-right: 2rem solid #A931BC;background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}">
                            <div class="checkBox" style="border: 1px solid #A931BC;color:#A931BC;" onclick="page2checkMission(${taskArr[i].state},${i})">
                            ${taskArr[i].state ? '&radic;' : ''}
                            </div>
                            <div class="page2_mission_title">${taskArr[i].title}</div>
                        </div>
            `
                break;
            case 'Not Urgent and Unimportant':
                level4 = level4 + `
                <div class="page2_mission" style="border-right: 2rem solid #2BAA30;background-color: ${taskArr[i].state ? '#F2F2F2' : '#fff'}">
                            <div class="checkBox" style="border: 1px solid #2BAA30;color:#2BAA30;" onclick="page2checkMission(${taskArr[i].state},${i})">
                            ${taskArr[i].state ? '&radic;' : ''}
                            </div>
                            <div class="page2_mission_title">${taskArr[i].title}</div>
                        </div>
            `
                break;
        }
    }
    page2_sm_listAll[0].innerHTML = level1;
    page2_sm_listAll[1].innerHTML = level2;
    page2_sm_listAll[2].innerHTML = level3;
    page2_sm_listAll[3].innerHTML = level4;
}

// check task state
function page2checkMission(type,index) {
    if(!type){
        if(window.confirm('You are sure to end the current mission？')){
            taskArr[index].state = true
            creactPage2List()
        }
    }
    if(window.event){
       
        window.event.cancelBubble = true;
    } else{

        e.preventDefault();
    }
}
