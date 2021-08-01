import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const routes = Router();

routes.post('/users', createUserController.handle);
routes.put('/users', updateUserController.handle);
routes.delete('/users/:id', deleteUserController.handle);

export { routes };
