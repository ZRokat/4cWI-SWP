const tasks = [];

printTaskList();

document.getElementById("Addtask").addEventListener("click",function(){
    let taskName = document.getElementById("newTask").value;
    let taskResponsible = document.getElementById("newResponsibel").value;
    let newTask = {name:taskName, responsible: taskResponsible, isDone: false};
    tasks.push(newTask);
    printTaskList();
});

function printTaskList(){
    document.getElementById("TaskList").innerHTML = getHTMLTasks();
}

function markTask(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked

    tasks[index].isDone = isChecked;
    printTaskList();
}

function getHTMLTasks(){
    let index = 0;
    let html = "";

    tasks.forEach(element => {
        let checked="";
        if (element.isDone){
            checked = "checked"
        }
        html += "<li>" + element.name + "-" + element.responsible  + " " + "<input onClick='markTask(this)' type='checkbox' data-index='"+ index +"'"+ checked +" />"+ index + "</li>"  
        index ++;
    });
    return html;  
}