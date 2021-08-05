/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { decode } from 'jwt-simple';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

export class ValidationTokenService {
  async execute(token: string) {
    const userRepository = getCustomRepository(UserRepository);
    try {
      const { id, email } = decode(token, process.env.SECRET);
      const userDB = await userRepository.findOne({ id, email });

      if (!userDB) return false;

      return true;
    } catch (error) {
      return false;
    }
  }
}
