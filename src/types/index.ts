export interface TaskT {
  task: string;
  time: string;
  selected: boolean;
  completed: boolean;
  id: string;
}

export interface TasksT {
  tasks: TaskT[];
  selectedTask: (selectedTask: TaskT) => void;
}

export interface Props extends TaskT {
  selectedTask: (selectedTask: TaskT) => void;
}
