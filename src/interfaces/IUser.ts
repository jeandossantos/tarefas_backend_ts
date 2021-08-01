export interface IUser {
  id?: number;
  name: string;
  initiais: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}
