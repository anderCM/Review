import UpdateIndex from './UpdateIndex.js';
import { GetTasks } from './ReadTasks.js';
import StoreTask from './UpdateTasks.js';

let taskToDelete = [];

export const RemoveFromLocal = (tasks, taskId) => tasks.filter((task) => taskId !== task.id);

export const SelectTask = (idTask) => {
  const mainLi = document.getElementById(idTask);
  const checkBox = document.getElementById(`check-${idTask}`);
  const addedInputTask = mainLi.querySelector('input[type=text]');
  checkBox.addEventListener('change', function select() {
    const getLocalData = GetTasks();
    const findIndex = getLocalData.findIndex((task) => task.id === idTask);
    if (this.checked) {
      addedInputTask.classList.add('text-decoration-line-through');
      taskToDelete.push(idTask);
      getLocalData[findIndex].completed = true;
      StoreTask(getLocalData);
      return;
    }
    addedInputTask.classList.remove('text-decoration-line-through');
    taskToDelete = taskToDelete.filter(((task) => idTask !== task));
    getLocalData[findIndex].completed = false;
    StoreTask(getLocalData);
  });
};

export const DeleteAllSelected = () => {
  if (taskToDelete.length === 0) {
    alert('Please select at least 1 task first');
    return;
  }
  let getLocalData = GetTasks();
  taskToDelete.map((taskId) => {
    getLocalData = RemoveFromLocal(getLocalData, taskId);
    return document.getElementById(taskId).remove();
  });
  UpdateIndex(getLocalData);
  StoreTask(getLocalData);
};