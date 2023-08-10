//

export interface Todo {
  id: string;
  title: string,
  color: string,
  startTime: string,
  endTime: string,
  isChecked: boolean,
}


export interface UpdateTodo {
  title: string,
  color: string,
  startTime: string,
  endTime: string,
}