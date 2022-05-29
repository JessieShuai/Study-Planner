let articleArr = []
let articleObj = {
    type: '',       
    creator: '',    
    title: '',      
    date: '',       
    source: '',    
    id: '',        
}
let articleType = [ 
    {
        id: 0,
        value: 'All readings'
    }, 
    {
        id: 1,
        value: 'Recent reading'
    },
    {
        id: 2,
        value: 'Trash Bin' 
    },
]
let articleId = 2      

function creactPage4List() {
    if (localStorage.getItem('articleId') != null) {
        articleId = JSON.parse(localStorage.getItem('articleId'))
    } else {
        articleId = 2
    }
    if (localStorage.getItem('articleArr') != null) {
        articleArr = JSON.parse(localStorage.getItem('articleArr'))
    } else {
        articleArr = []
    }
    if (localStorage.getItem('articleType') != null) {
        articleType = JSON.parse(localStorage.getItem('articleType'))
        console.log(articleType);
    } else {
        articleType = [
            {
                id: 0,
                value: 'All readings'
            },  
            {
                id: 1,
                value: 'Recent reading'
            },
            {
                id: 2,
                value: 'Trash Bin' 
            },
        ]
    }
    createArticleList()
    creactTable(0)
}

let addArticleIpt = document.querySelector(".addArticleIpt")

function addArticle() {
    if (addArticleIpt.value == '') {
        return alert('Please enter the content')
    } else {
        articleId++
        articleType.push({
            id: articleId,
            value: addArticleIpt.value
        })
        console.log(articleType);
        createArticleList()
        articleMark.style.display = 'none'
    }
}

let articleMark = document.querySelector(".articleMark")

function cancelArticle() {
    articleMark.style.display = 'none'
}

// reading infomation
function addArticlePop() {
    articleMark.style.display = 'flex'
}


// creators
let page4_left_top = document.querySelector(".page4_left_top")

function createArticleList() {
    let articleListHtml = ''
    for (let i = 0; i < articleType.length; i++) {
        let item = articleType[i].value
        let id = articleType[i].id
        articleListHtml = articleListHtml + `<div class="page4_left_list tran3" onclick="clickArticle(this,${id})">${item}</div>`
    }
    page4_left_top.innerHTML = articleListHtml
}

// stype
let temId = 0;     
let page4_left = document.querySelector(".page4_left")
let page4_center = document.querySelector(".page4_center")
function clickArticle(e, id) {
    if(document.body.clientWidth < 768){
        page4_left.style.width = 0
        page4_left.style.padding = 0

        page4_center.style.width = '100%'
        page4_center.style.padding = '3rem 2rem'
    }
    let articleListAll = document.querySelectorAll(".page4_left_list")
    for (let i = 0; i < articleListAll.length; i++) {
        articleListAll[i].classList.remove('tastActive')
    }
    e.classList.add('tastActive')
    temId = id
    creactTable(id)
    articleArrIndex = ''
    page4_searchIpt.value = ''
}

// go back
function page4GoBank() {
    page4_left.style.width = '100%'
    page4_left.style.padding = '1.5rem 1rem'

    page4_center.style.width = 0
    page4_center.style.padding = 0
}

// build table
let tableCon = document.querySelector(".tableCon")
let page4_searchIpt = document.querySelector(".page4_searchIpt")
function creactTable(id) {
    let tableInerHtml = ``
    if (id == 0) {
        for (let i = 0; i < articleArr.length; i++) {
            let item = articleArr[i]
            console.log(item.title.indexOf(page4_searchIpt.value));
            if(item.id != 2 && (item.title.indexOf(page4_searchIpt.value) != -1)){
                tableInerHtml = tableInerHtml + `
                <div class="table_list" onclick="clickCreatorList(this,${i})">
                    <div class="tableLeft">${item.title}</div>
                    <div class="tableRight">${item.creator}</div>
                </div>
            `
            }
        }
    } else if (id == 1) {
        let articleArrIndex = 0;
        if (articleArr.length > 8) {
            articleArrIndex = 7
        } else {
            articleArrIndex = articleArr.length
        }
        for (let i = 0; i < articleArrIndex; i++) {
            let item = articleArr[i]
            if(item.id != 2 && (item.title.indexOf(page4_searchIpt.value) != -1)){
                tableInerHtml = tableInerHtml + `
                <div class="table_list" onclick="clickCreatorList(this,${i})">
                    <div class="tableLeft">${item.title}</div>
                    <div class="tableRight">${item.creator}</div>
                </div>
            `
            }
        }
    } else {
        for (let i = 0; i < articleArr.length; i++) {
            let item = articleArr[i]
            if (item.id == id && (item.title.indexOf(page4_searchIpt.value) != -1)) {
                tableInerHtml = tableInerHtml + `
                <div class="table_list" onclick="clickCreatorList(this,${i})">
                    <div class="tableLeft">${item.title}</div>
                    <div class="tableRight">${item.creator}</div>
                </div>
            `
            }
        }
    }
    tableCon.innerHTML = tableInerHtml
}

// search reading
function searchArticle() {
        creactTable(temId)
}

let creatorPop = document.querySelector(".creatorPop")
let creatorType = document.querySelector(".creatorType")
let creatorIpt = document.querySelector(".creatorIpt")
let creatorTitleIpt = document.querySelector(".creatorTitleIpt")
let creatorDateIpt = document.querySelector(".creatorDateIpt")
let creatorSourceIpt = document.querySelector(".creatorSourceIpt")

//add reading
function addCreatorPop() {
    creatorPop.style.display = 'flex'
    let typeSel = ``
    for (let i = 0; i < articleType.length; i++) {
        if (articleType[i].id >= 3) {
            typeSel = typeSel + `<option value="${articleType[i].id}">${articleType[i].value}</option>`
        }
    }
    creatorType.innerHTML = typeSel
    addOrEdit = 'add'
}
// edit reading
function clickEditCreator(){
    if(articleArrIndex === ''){
        return alert('Please select the content to be operated!')
    }
    if(temId == 2){
        return alert('Deleted items are not editable!')
    }
    addOrEdit = 'edit'
    creatorPop.style.display = 'flex'
    let typeSel = ``
    for (let i = 0; i < articleType.length; i++) {
        if (articleType[i].id >= 3) {
            typeSel = typeSel + `<option value="${articleType[i].id}">${articleType[i].value}</option>`
        }
    }
    creatorType.innerHTML = typeSel
    creatorType.value = articleArr[articleArrIndex].type
    creatorIpt.value = articleArr[articleArrIndex].creator
    creatorTitleIpt.value = articleArr[articleArrIndex].title
    creatorDateIpt.value = articleArr[articleArrIndex].date
    creatorSourceIpt.value = articleArr[articleArrIndex].source
}
// confirm add/edit
let addOrEdit = 'add'
function addCreator() {
    if(addOrEdit == 'add'){
        articleArr.push({
            type: creatorType.value,
            creator: creatorIpt.value,
            title: creatorTitleIpt.value,
            date: creatorDateIpt.value,
            source: creatorSourceIpt.value,
            id: creatorType.value
        })
    }else {
        articleArr[articleArrIndex].type = creatorType.value
        articleArr[articleArrIndex].creator = creatorIpt.value
        articleArr[articleArrIndex].title = creatorTitleIpt.value
        articleArr[articleArrIndex].date = creatorDateIpt.value
        articleArr[articleArrIndex].source = creatorSourceIpt.value
    }
    creactTable(temId)
    cancelCreator()
    articleArrIndex = ''
}

// cancel add/ edit
function cancelCreator() {
    creatorPop.style.display = 'none'
    creatorIpt.value = ''
    creatorTitleIpt.value = ''
    creatorDateIpt.value = ''
    creatorSourceIpt.value = ''
}

// creators
let articleArrIndex = '';       
function clickCreatorList(e,index){
    articleArrIndex = index;
    let table_listAll = document.querySelectorAll(".table_list");
    for(let i = 0; i < table_listAll.length; i++){
        table_listAll[i].classList.remove('table_list_active')
    }
    e.classList.add('table_list_active')
}
// delete reading
function clickDelete() {
    if(articleArrIndex === ''){
        return alert('Please select the project to operate')
    }
    if(temId == 2){
        return alert('It\'s been deleted')
    }
    if(window.confirm('Are you sure you want to delete this action?')){
        articleArr[articleArrIndex].id = 2
        creactTable(temId)
        articleArrIndex = ''
    }
}
