/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { TaskRepository } from '../repositories/TaskRepository';

export class DeleteTaskService {
  async execute(id: number) {
    const taskRepository = getCustomRepository(TaskRepository);

    await taskRepository.delete({ id });
  }
}
