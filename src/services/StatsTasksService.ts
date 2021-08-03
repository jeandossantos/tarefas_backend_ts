/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { getCustomRepository } from 'typeorm';
import { TaskRepository } from '../repositories/TaskRepository';

export class StatsTasksService {
  async execute(user_id: number) {
    const taskRepository = getCustomRepository(TaskRepository);

    const [, finishedTask] = await taskRepository.findAndCount({
      where: {
        user_id,
        done: true,
      },
    });

    const unfinishedTask = await taskRepository.find({
      where: {
        user_id,
        done: false,
      },
    });
    const dateTime = new Date().getTime();

    const expiredTasksCount = unfinishedTask.filter(
      t => new Date(t.deadline).getTime() < dateTime,
    );

    const [, totaltasksCount] = await taskRepository.findAndCount({
      user_id,
    });

    return {
      finishedTasksCount: finishedTask,
      expiredTasksCount: expiredTasksCount.length,
      totaltasksCount,
    };
  }
}
