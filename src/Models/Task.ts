import User from "./User"

export default interface Task {
  id?: number,
  task_title: string,
  task_description?: string,
  start_date: Date,
  end_date?: Date,
  staus: string,
  closed_date: Date,
  user_id?: number,
  parent_task_id?: number,
  tasks?: Task
  user?: User,
  other_tasks?: Task[]
}