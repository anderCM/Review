const StoreTask = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

export default StoreTask;