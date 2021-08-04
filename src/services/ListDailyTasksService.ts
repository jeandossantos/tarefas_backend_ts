/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { getCustomRepository, Raw } from 'typeorm';
import { TaskRepository } from '../repositories/TaskRepository';

export class ListDailyTasksService {
  async execute(user_id: number, search = '', page = 1) {
    const taskRepository = getCustomRepository(TaskRepository);
    const date = new Date().toISOString().substr(0, 10);
    const from = `${date} 00:00:00`;
    const to = `${date} 23:59:59`;
    const limit = 4;

    const [data, count] = await taskRepository.findAndCount({
      where: {
        user_id,
        name: Raw(
          () => `LOWER(name) LIKE :search and deadline BETWEEN :from and :to`,
          {
            search: `${search.toLocaleLowerCase()}%`,
            from,
            to,
          },
        ),
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
