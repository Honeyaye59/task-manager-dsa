class TaskNode {
    constructor(task){
        this.task = task;
        this.next = null;
    }
}

class TaskList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // addTask(task){

    //     const newNode = new TaskNode(task);
    //     if(!this.head){
    //         this.head = newNode;
    //         this.tail = newNode;
    //         this.length++;
    //     }
    //     let temp = this.head;
    //     this.head = newNode;
    //     newNode.next = temp;
    //     this.length++;

        // const newNode = new TaskNode(task);
        // if(!this.head){
        //     this.head = newNode;
        //     this.tail = newNode;
        //     this.length++;
            
        // }
        // let currNode = this.head;
        // while(currNode.next){
        //     currNode = currNode.next
        // }
        // currNode.next = newNode;
        // this.tail = newNode;
        // this.length++;
              
    // }   
    addTask(task) {
        const newNode = new TaskNode(task);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }
     getTasks(){
        const tasks = [];
        if(this.head){
            let currNode = this.head;
            while(currNode){
                tasks.push(currNode.task);
                currNode = currNode.next;
            }
            return tasks;
        }
        // const tasks = [];
        // if(!this.head){
        //     return null;
        // }
        // let currNode = this.head;
        // while(currNode){
        //     tasks.push(currNode.task)
        //     currNode = currNode.next;
        // }
        // return tasks;
     }
            
   
}



const taskList = new TaskList();


function addTask () {
    const taskInput = document.getElementById("taskInput");
    const newTask = taskInput.value.trim();

    if(newTask !== ""){
        
        taskList.addTask(newTask);
        displayTasks();
        taskInput.value = ""
        

    }

}

function displayTasks (){
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = '';
    taskList.getTasks().forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
        <span>${task}</span>
      `;
      tasksList.appendChild(taskItem);
    })
    tasksList.onclick = toggleTask;
}

function toggleTask(event) {
    const clickedTask = event.target.closest('li.task');
    if (clickedTask) {
        
        clickedTask.classList.toggle('completed');
    }
}

