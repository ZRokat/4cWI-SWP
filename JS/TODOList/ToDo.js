var task = {name: "Duschen", responsible: "Ben", isDone: false}



const tasks = [task];

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

function getHTMLTasks(){
    let html = "";
    tasks.forEach(element => {
        html += "<li>" + element.name + "-" + element.responsible + " " + "<input type='checkbox'/>"+ "</li>"   
    });
    return html;  
}