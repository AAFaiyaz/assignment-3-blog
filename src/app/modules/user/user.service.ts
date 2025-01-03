import { UserModel } from '../user.model';
import { User } from './user.interface';

const registerUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const UserServices = {
  registerUserIntoDB,
  getAllUserFromDB,
};
