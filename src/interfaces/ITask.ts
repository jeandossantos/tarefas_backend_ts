/* eslint-disable camelcase */
export interface ITask {
  id?: number;
  user_id: number;
  name: string;
  description: string;
  priority?: number;
  deadline: Date;
  done?: boolean;
}
