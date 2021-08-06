/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

export class FindUserService {
  private userRepository: UserRepository;

  async execute(id: number) {
    this.userRepository = getCustomRepository(UserRepository);
    const user = await this.userRepository.findOne({ id });
    return user;
  }
}
