/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCustomRepository } from 'typeorm';
import { ITask } from '../interfaces/ITask';
import { TaskRepository } from '../repositories/TaskRepository';
import { existsOrError } from '../utils/validation';

export class CreateTaskService {
  async execute({ user_id, name, description, priority, deadline }: ITask) {
    const taskRepository = getCustomRepository(TaskRepository);

    existsOrError(user_id, 'ID do Usuário é necessário');
    existsOrError(name, 'Nome da Tarefa é necessário');
    existsOrError(deadline, 'Prazo é necessário');

    const task = taskRepository.create({
      user_id,
      name,
      description,
      priority,
      deadline,
    });

    await taskRepository.save(task);

    return task;
  }
}
