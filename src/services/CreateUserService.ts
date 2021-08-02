/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCustomRepository } from 'typeorm';
import { genSaltSync, hashSync } from 'bcryptjs';
import { UserRepository } from '../repositories/UserRepository';
import { IUser } from '../interfaces/IUser';
import {
  equalsOrError,
  existsOrError,
  notExistsOrError,
} from '../utils/validation';
import { CreateTaskService } from './CreateTaskService';

export class CreateUserService {
  async execute({ name, initiais, email, password, confirmPassword }: IUser) {
    const userRepository = getCustomRepository(UserRepository);
    const createTaskService = new CreateTaskService();

    existsOrError(name, 'Nome é Necessário(a)');
    existsOrError(initiais, 'Iniciais são Necessário(a)');
    existsOrError(email, 'E-mail é Necessário(a)');
    existsOrError(password, 'Senha é Necessário(a)');
    equalsOrError(password, confirmPassword, 'Senhas não coincidem');

    const userAlreadyExists = await userRepository.findOne({ email });

    notExistsOrError(userAlreadyExists, 'E-mail já cadastrado');

    const salt = genSaltSync(8);

    const passwordHash = hashSync(password, salt);

    const user = userRepository.create({
      name,
      initiais,
      email,
      password: passwordHash,
    });

    await userRepository.save(user);

    await createTaskService.execute({
      user_id: user.id,
      name: 'Primeiro Login',
      description: 'Está é uma tarefa criada por padrão pelo sistema.',
      priority: 0,
      deadline: new Date(),
      done: true,
    });

    return user;
  }
}
