const UpdateIndex = (tasks) => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
};

export default UpdateIndex;