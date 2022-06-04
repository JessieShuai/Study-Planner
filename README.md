# Study Planner
DECO207_A3_pshu3830 Assignment for advanced web design course
## General Info  
Study Planner is a websit helps students who learning online to manage their time and achieve study goal. This website needs to including functions of the time management, to-do list, music player and reading list. 
## Iteration
1. Buttons forward timer has changed to stop button and paus button since start timer.
2. The adding task form has changed to a pop-up table.  
3. Add list function for task page and reading page has changed to a pop-up nameing table before add it.
4. Select reading before edit and delete.
5. Check task state need to finish a Pop up table
6.Hover animation of adding task.
## How to use
1. Add the task with its information.
2. Check the state of tasks in the covey quadrants page.
3. Set pomodoro timer or stopwatch for study time.
4. select musice during study (optional)
5. Edit and add readings.
## Process
The website is adaptive for mobile and desktop.
```
@media screen and (max-width: 768px){
    html{
        font-size: 8px !important;
    }
    .content{
        display: block;
    }
    .menu{
        width: 100%;
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu>div{
        margin: 0 2rem;
        width: 13% !important;
    }
    .app{
        width: 100vw;
        height: calc(100vh - 7rem);
    }
}
```
