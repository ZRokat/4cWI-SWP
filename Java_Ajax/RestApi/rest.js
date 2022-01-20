/*function loadUser(){
    alert("test")
}*/

function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        let html = "";
      data.forEach(todo => {
          html += "<li>" + todo.title + "</li>";
          document.getElementById("list").innerHTML = html
          console.log(todo.title)
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        let html = "";
      data.forEach(todo => {
          html += "<li>" + todo.name+ "</li>";
          document.getElementById("list").innerHTML = html
          console.log(todo.title)
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function load(){
document.getElementById("loadUser").addEventListener("click",function (){
    loadUser();
})
document.getElementById("loadTodos").addEventListener("click", function (){
    loadTodos();
})
}

load();