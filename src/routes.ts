import { Router } from 'express';
import { CreateTaskController } from './controllers/CreateTaskController';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const createTaskController = new CreateTaskController();

const routes = Router();

// users
routes.post('/users', createUserController.handle);
routes.put('/users', updateUserController.handle);
routes.delete('/users/:id', deleteUserController.handle);

// tasks
routes.post('/tasks', createTaskController.handle);

export { routes };
