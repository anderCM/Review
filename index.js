import './style.css';
import DisplayTask, { AddTask, ShowAllTasks } from './modules/CreateTasks.js';
import { DeleteAllSelected } from './modules/RemoveTask.js';

const inputText = document.getElementById('input-task');

inputText.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (!inputText.value) {
      alert('Please enter a Task to add first');
      return;
    }
    const addTask = AddTask(inputText.value);
    DisplayTask(addTask);
    inputText.value = '';
  }
});

ShowAllTasks();

const deleteAllSelected = document.getElementById('delete-all-selected');
deleteAllSelected.addEventListener('click', () => {
  DeleteAllSelected();
});