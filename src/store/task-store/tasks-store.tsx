import { makeAutoObservable } from "mobx";

interface TaskAction {
  title: string;
  description: string;
  date: string;
}

class TaskStore {
  tasks = [
    {
      id: 1,
      title: "Пойти в поход",
      description: "Купить мангал и продукты",
      date: "2023-05-10",
      completed: false,
    },
  ];
  idSearch: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  createTask = (task: TaskAction) => {
    this.tasks.push({ ...task, id: +new Date(), completed: false });
  };

  delTask = (id: number) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };
  updateCompleted = (id: number) => {
    let taskUpdate = this.tasks.find((item) => item.id === id);
    if (taskUpdate) {
      taskUpdate.completed = !taskUpdate.completed;
    }
    console.log('taskUpdate', taskUpdate)
    return this.tasks;
  };
  updateTaskOpenModel = (id: number) => {
    return this.idSearch = id
  }
  updateTask = (task: TaskAction) => {
    let taskUpdate = this.tasks.find((item) => item.id === this.idSearch)
    if (taskUpdate) {
      taskUpdate.title = task.title
      taskUpdate.description = task.description
      taskUpdate.date = task.date
    }
    return this.tasks;
  };
}

export default new TaskStore();