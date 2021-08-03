/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { getCustomRepository } from 'typeorm';
import { TaskRepository } from '../repositories/TaskRepository';

export class FinishTaskService {
  async execute(id: number) {
    const taskRepository = getCustomRepository(TaskRepository);

    await taskRepository.update({ id }, { done: true });
  }
}
