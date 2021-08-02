import { Router } from 'express';
import { CreateTaskController } from './controllers/CreateTaskController';
import { UpdateTaskController } from './controllers/UpdateTaskController';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteTaskController } from './controllers/DeleteTaskController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { ListTasksController } from './controllers/ListTasksController';
import { UpdateUserController } from './controllers/UpdateUserController';

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();

const routes = Router();

// users
routes.post('/users', createUserController.handle);
routes.put('/users/:id', updateUserController.handle);
routes.delete('/users/:id', deleteUserController.handle);

// tasks
routes.post('/tasks', createTaskController.handle);
routes.put('/tasks/:id', updateTaskController.handle);
routes.get('/tasks', listTasksController.handle);
routes.delete('/tasks/:id', deleteTaskController.handle);

export { routes };
