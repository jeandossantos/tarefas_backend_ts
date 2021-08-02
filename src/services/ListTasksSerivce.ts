/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCustomRepository } from 'typeorm';
import { TaskRepository } from '../repositories/TaskRepository';

export class ListTasksService {
  async execute(user_id: number) {
    const taskRepository = getCustomRepository(TaskRepository);

    const tasks = await taskRepository.find({ user_id });

    return tasks;
  }
}
