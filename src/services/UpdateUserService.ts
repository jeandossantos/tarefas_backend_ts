/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { IUser } from '../interfaces/IUser';
import { UserRepository } from '../repositories/UserRepository';

export class UpdateUserService {
  async execute({ name, initiais, email, id }: IUser) {
    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.create({
      id,
      name,
      initiais,
      email,
    });

    await userRepository.save(user);

    return user;
  }
}
