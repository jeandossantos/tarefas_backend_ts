/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

export class DeleteUseerService {
  async execute(id: number) {
    const userRepository = getCustomRepository(UserRepository);

    await userRepository.delete(id);
  }
}
