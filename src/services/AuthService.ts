/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { compareSync } from 'bcryptjs';
import { encode } from 'jwt-simple';
import { UserRepository } from '../repositories/UserRepository';
import { equalsOrError, existsOrError } from '../utils/validation';
import { CustomException } from '../exception/CustomException';

interface IAuth {
  email: string;
  password: string;
}

export class AuthService {
  async execute({ email, password }: IAuth) {
    const userRepository = getCustomRepository(UserRepository);

    existsOrError(email, 'E-mail é obrigatório');
    existsOrError(password, 'Senha é obrigatória');

    const userDB = await userRepository.findOne({ email });

    equalsOrError(userDB.email, email, 'Usuário e/ou Senha Inválido(os)');

    const isMath = compareSync(password, userDB.password);

    if (!isMath) throw new CustomException('Usuário e/ou Senha Inválido(os)');

    const payload = {
      id: userDB.id,
      name: userDB.name,
      initiais: userDB.initiais,
      email: userDB.email,
    };

    return {
      ...payload,
      token: encode(payload, process.env.SECRET),
    };
  }
}
