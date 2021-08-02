/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import { IUser } from '../interfaces/IUser';
import { existsOrError } from '../utils/validation';

export class UpdateUserService {
  async execute({ id, name, initiais, email }: IUser) {
    const userRepository = getCustomRepository(UserRepository);

    existsOrError(name, 'Nome é Necessário(a)');
    existsOrError(initiais, 'Iniciais são Necessário(a)');
    existsOrError(email, 'E-mail é Necessário(a)');

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
