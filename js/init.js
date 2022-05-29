window.onload = function () {
    init()
    initWatch()
    creactPage4List()
}

// reload and close
window.onunload = function () {
    // save data
    localStorage.setItem('tastList', JSON.stringify(tastList))
    localStorage.setItem('taskArr', JSON.stringify(taskArr))
    localStorage.setItem('taskId', JSON.stringify(taskId))

    localStorage.setItem('TimeS',JSON.stringify(TimeS))
    localStorage.setItem('branchS',JSON.stringify(branchS))
    localStorage.setItem('secondS',JSON.stringify(secondS))


    localStorage.setItem('setStudy',JSON.stringify(setStudy))
    localStorage.setItem('setStudyCopy',JSON.stringify(setStudyCopy))
    localStorage.setItem('setStudyCopySecond',JSON.stringify(setStudyCopySecond))
    localStorage.setItem('setBreak',JSON.stringify(setBreak))
    localStorage.setItem('setBreakCopy',JSON.stringify(setBreakCopy))
    localStorage.setItem('setBreakCopySecond',JSON.stringify(setBreakCopySecond))
    localStorage.setItem('endStudyState',JSON.stringify(endStudyState))



    localStorage.setItem('articleId',JSON.stringify(articleId))
    localStorage.setItem('articleType',JSON.stringify(articleType))
    localStorage.setItem('articleArr',JSON.stringify(articleArr))
}
