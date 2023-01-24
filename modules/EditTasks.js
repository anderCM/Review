import UpdateIndex from './UpdateIndex.js';
import { RemoveFromLocal } from './RemoveTask.js';
import { GetTasks } from './ReadTasks.js';
import StoreTask from './UpdateTasks.js';

const EditTask = (idTask) => {
  const idLi = document.getElementById(idTask);
  const addedInputTask = idLi.querySelector('input[type=text]');
  const iconContainer = document.getElementById(`icon-container-${idTask}`);
  idLi.classList.add('edit-task');
  addedInputTask.classList.add('edit-task');
  addedInputTask.disabled = false;
  addedInputTask.focus();
  iconContainer.innerHTML = `<i id="remove-task-${idTask}" class="remove-icon fa-solid fa-trash-can"></i>`;

  const removeIcon = document.getElementById(`remove-task-${idTask}`);
  if (removeIcon) {
    removeIcon.addEventListener('click', () => {
      let getLocalData = GetTasks();
      getLocalData = RemoveFromLocal(getLocalData, idTask);
      document.getElementById(idTask).remove();

      UpdateIndex(getLocalData);
      StoreTask(getLocalData);
    });
  }

  addedInputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      idLi.classList.remove('edit-task');
      addedInputTask.classList.remove('edit-task');
      addedInputTask.disabled = true;
      iconContainer.innerHTML = `<i id="icon-edit-${idTask}" class="edit-icon fa-solid fa-ellipsis-vertical"></i>`;

      const editIcon = document.getElementById(`icon-edit-${idTask}`);
      editIcon.addEventListener('click', () => {
        EditTask(idTask);
      });
    }
  });
};

export default EditTask;