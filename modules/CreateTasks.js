import { GetTasks, GetLastTask } from './ReadTasks.js';
import StoreTask from './UpdateTasks.js';
import EditTask from './EditTasks.js';
import { SelectTask } from './RemoveTask.js';

const mainUl = document.getElementById('main-tasks');

export const AddTask = (description) => {
  const lastTask = GetLastTask();
  const getLocalData = GetTasks();
  const newTask = {
    id: lastTask.id,
    description,
    completed: false,
    index: lastTask.index,
  };
  getLocalData.push(newTask);
  StoreTask(getLocalData);
  return newTask;
};

const DisplayTask = (task) => {
  const {
    id, description, completed,
  } = task;

  const mainLi = document.createElement('li');
  mainLi.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
  );
  mainLi.id = id;

  const checkPContainer = document.createElement('div');
  checkPContainer.classList.add('d-flex', 'gap-3');

  const checkBox = document.createElement('input');
  checkBox.classList.add('form-check-input');
  checkBox.type = 'checkbox';
  checkBox.id = `check-${id}`;

  if (completed) checkBox.checked = true;

  const addedInputTask = document.createElement('input');
  addedInputTask.value = description;
  addedInputTask.setAttribute('type', 'text');
  addedInputTask.disabled = true;
  addedInputTask.classList.add('input-task-added');

  checkPContainer.append(checkBox, addedInputTask);

  const icon = document.createElement('div');
  icon.id = `icon-container-${id}`;
  icon.innerHTML = `<i id="icon-edit-${id}" class="edit-icon fa-solid fa-ellipsis-vertical"></i>`;

  mainLi.append(checkPContainer, icon);
  mainUl.append(mainLi);

  const editIcon = document.getElementById(`icon-edit-${id}`);
  editIcon.addEventListener('click', () => {
    EditTask(id);
  });

  SelectTask(id);
};

export const ShowAllTasks = () => {
  const getLocalData = GetTasks();
  getLocalData?.map((task) => DisplayTask(task));
};

export default DisplayTask;