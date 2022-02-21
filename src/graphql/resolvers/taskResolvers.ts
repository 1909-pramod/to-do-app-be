import { getAllUsertasks, getTaskWithTaskId } from "../../queries/taskDbQueries";
import { getUserWithIdQuery } from "../../queries/userDbQueries";

export class TaskResolvers {
  async getUserTask(userId: number) {
    return await getAllUsertasks(userId);
  }
  async getUserTaskWithTaskId(userId: number, taskId: number) {
    return await getTaskWithTaskId(userId, taskId);
  }
}