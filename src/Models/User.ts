import Task from "./Task";

export default interface User {
  id: number,
  email: string,
  username: string,
  password: string,
  dob: Date | null,
  first_name: string,
  last_name: string | null,
  deleted_at: Date | null,
  tasks?: Task[]
}

