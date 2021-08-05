import { Router } from 'express';
import { CreateTaskController } from './controllers/CreateTaskController';
import { UpdateTaskController } from './controllers/UpdateTaskController';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteTaskController } from './controllers/DeleteTaskController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { ListTasksController } from './controllers/ListTasksController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { FinishTaskController } from './controllers/FinishTaskController';
import { StatsTasksController } from './controllers/StatsTasksController';
import { ListDailyTasksController } from './controllers/ListDailyTasksController';
import { AuthController } from './controllers/AuthController';
import { ValidationTokenController } from './controllers/ValidationTokenController';

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();
const finishTaskController = new FinishTaskController();
const statsTasksController = new StatsTasksController();
const listDailyTasksController = new ListDailyTasksController();
const authController = new AuthController();
const validationTokenController = new ValidationTokenController();

const routes = Router();

// auth
routes.post('/signin', authController.handle);
routes.post('/signup', createUserController.handle);
routes.post('/validatetoken', validationTokenController.handle);

// users
routes.put('/users/:id', updateUserController.handle);
routes.delete('/users/:id', deleteUserController.handle);

// tasks
routes.post('/tasks', createTaskController.handle);
routes.put('/tasks/:id', updateTaskController.handle);
routes.get('/tasks', listTasksController.handle);
routes.delete('/tasks/:id', deleteTaskController.handle);
routes.post('/tasks/finish/:id', finishTaskController.handle);
routes.get('/tasks/daily', listDailyTasksController.handle);

// stats
routes.get('/stats', statsTasksController.handle);

export { routes };
