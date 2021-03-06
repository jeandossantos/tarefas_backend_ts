/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCustomRepository, Raw } from 'typeorm';
import { TaskRepository } from '../repositories/TaskRepository';

export class ListTasksService {
  async execute(user_id: number, search = '', page = 1) {
    const taskRepository = getCustomRepository(TaskRepository);
    const limit = 4;
    const [data, count] = await taskRepository.findAndCount({
      where: {
        user_id,
        name: Raw(() => `LOWER(name) LIKE :search`, {
          search: `${search.toLocaleLowerCase()}%`,
        }),
      },
      skip: page * limit - limit,
      take: limit,
      order: {
        deadline: 'DESC',
      },
    });

    const tasks = data.sort((a, b) => {
      if (a.done > b.done) return 1;
      if (a.done < b.done) return -1;
      return 0;
    });

    return { data: tasks, count, limit };
  }
}
