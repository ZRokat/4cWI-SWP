var task = {name: "Duschen", isDone: false, responsible: "Ben"}



const tasks = ["putzen","tanzen","kochen"];

printTaskList();

document.getElementById("Addtask").addEventListener("click",function(){
    let newTask = document.getElementById("newTask").value;
    console.log(newTask)
    tasks.push(newTask);
    printTaskList();
});

function printTaskList(){
    document.getElementById("TaskList").innerHTML = getHTMLTasks();
}

function getHTMLTasks(){
    let html = "";
    tasks.forEach(element => {
        html += "<li>" + element + "</li>"   
    });
    return html;  
}