// click menu
function clickMenu(event,e,page) {
    for (let i = 0; i < menuAll.length; i++) {
        menuAll[i].classList.remove('menuActive')
    }
    page1.style.display = 'none'
    page2.style.display = 'none'
    page3.style.display = 'none'
    page4.style.display = 'none'

    switch (page){
        case 'page1':
            page1.style.display = 'flex'
            initTast()
            initMission()
            break
        case 'page2':
            page2.style.display = 'block'
            creactPage2List()
            break
        case 'page3':
            page3.style.display = 'block'
            break
        case 'page4':
            page4.style.display = 'flex'
            break

    }
    e.classList.add('menuActive')
    event.preventDefault()
}
