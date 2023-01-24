let tasks = [];

export const GetTasks = () => {
  tasks = !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks'));
  return tasks;
};

export const GetLastTask = () => {
  let id = 1;
  let index = 1;
  const getLocalData = GetTasks();

  if (getLocalData?.length > 0) {
    const lastTask = getLocalData.slice(-1);
    id = lastTask[0].id + 1;
    index = lastTask[0].index + 1;
  }
  return { id, index };
};