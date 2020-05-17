//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const RemoveAll = document.querySelector('.removeAll');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");
const count = document.querySelector('.count-items');


//Event Listners
todoButton.addEventListener('click',addTodo);
RemoveAll.addEventListener('click',remove);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click', filterTodo);





//Functions

function addTodo(event){
    
    // Prevent form from submitting
    event.preventDefault();
    //Create TODO Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check" ></i>'
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //Delete Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= "fas fa-trash" ></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append the lsit
    todoList.appendChild(todoDiv);
    //clear ToDo input value
    todoInput.value="";

}

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0] === 'trash-btn'){
       
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener('transitionend',function(){
            item.parentElement.remove();
        }); 
        
    }

    //Check Mark
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    
}

//function to filter according to the categories
function filterTodo(event){
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch (event.target.value){
            case "all":{
                todo.style.display = "flex";
                break;}
            
            case "completed":{ 
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else{
                    todo.style.display = "none";
                }
                break;
            }

            case "uncompleted":{
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

            }


        }
    });
}

//function to remove everything
function remove(e){
    //e.preventDefault();
    if(todoInput.value === '')
        alert('You have opted to delete all records. Thanks for using My ToDo List!!');
    else
    alert('While you were writing you opted for delete all record. Oops!! bad Hit !!');
}


function digiclock(){
    var date = new Date();
    var hour = date.getHours() + '';
    var min = date.getMinutes() + '';
    var sec = date.getSeconds() + '';
    var day = date.getDay();

    if(hour.length<2)
        hour = '0' + hour; 
    
    if(min.length<2)
        min = '0' + min; 
    
    if(sec.length<2)
        sec = '0' + sec; 
    
        var weekdays = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']

    var clock =  hour +':'+ min+':'+  sec;
    var currday = weekdays[day];
    document.querySelector('.day').innerHTML = currday;
    document.querySelector('.clck').innerHTML = clock;

}

digiclock();
setInterval(digiclock,1000);
