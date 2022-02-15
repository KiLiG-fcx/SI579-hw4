// initial calls
addTask("Learn to wrap gifts", 1639944400000);
addTask("buy milk");
addTask("csfeuydgcaowksj");
addTask("sleep 24h",1648249900000);
addTask("draw pictures",1699359900000);

const addlistbutton=document.querySelector("#add_task");
const descinput=document.querySelector("#task_description_input");
const tasklist=document.querySelector('#task_list');

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time
    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

function addTask(description,dueTime){
    const newli=document.createElement("li");
    newli.innerText=description;
    const newbutton=document.createElement("button");
    if (dueTime){
        // if have due time, add span
        const newspan=document.createElement("span");
        const date=new Date(dueTime);
        // create the time text
        newspan.classList.add("due");
        newspan.innerText="due "+date;
        newli.appendChild(newspan);
    }
    newbutton.setAttribute("class","btn btn-sm btn-outline-danger done");
    newbutton.setAttribute("type","button");
    newbutton.innerText="Done";
    newbutton.addEventListener('click',function(){
        // task 6, add remove to each button
        newli.remove();
    })
    // add button into li, and put into ul
    newli.appendChild(newbutton);
    tasklist.appendChild(newli);
}

function addtotasks(){
    // use time convert, perform addtask()
    var desc=descinput.value;
    const duetime=dateAndTimeToTimestamp(document.querySelector("#duedate_input"),document.querySelector("#duetime_input"));
    addTask(desc,duetime)
}

descinput.addEventListener('keydown',function(e){
    // task 4
    if (e.keyCode==13){
        addtotasks();
        descinput.value='';
    }
})

addlistbutton.addEventListener('click',function(){
    // add task event
    addtotasks();
    descinput.value='';
})

