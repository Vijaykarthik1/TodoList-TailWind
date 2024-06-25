const addTask = document.getElementById('add-task');
const Taskcontainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener("click", function () {
    let task = document.createElement('div');
    task.classList.add('task', 'bg-white', 'rounded-lg', 'shadow', 'p-3', 'flex', 'items-center', 'justify-between', 'mb-2');

    let li = document.createElement('span');
    li.classList.add('flex-1', 'mr-2', 'pl-3'); 
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('checkTask', 'text-orange-600', 'border', 'border-orange-600', 'rounded-lg', 'px-2', 'py-1', 'transition', 'duration-300', 'hover:bg-orange-600', 'hover:text-white', 'mr-2'); // Add mr-2 class here
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('DeleteTask', 'text-red-600', 'border', 'border-red-600', 'rounded-lg', 'px-2', 'py-1', 'transition', 'duration-300', 'hover:bg-red-600', 'hover:text-white', 'mr-2'); // Add mr-2 class here
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert('Please Enter a Task');
    } else {
        Taskcontainer.appendChild(task);
    }
    inputTask.value = "";

    checkButton.addEventListener("click", function () {
        li.classList.toggle('line-through'); 
    });

    deleteButton.addEventListener("click", function (e) {
        let taskElement = e.target.closest('.task');
        if (taskElement.querySelector('.line-through')) {
            taskElement.remove();
        } else {
            alert('Please complete the task before deleting.');
        }
    });
});
