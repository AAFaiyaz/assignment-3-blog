import { Request, Response } from 'express';
import { UserServices } from './user.service';

const registerUser = async (req: Request, res: Response) => {
  const { user: userData } = req.body;

  // will calll service func to send this data
  const result = await UserServices.registerUserIntoDB(userData);
  //send response
  try {
    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserControllers = {
  registerUser,
  getAllUsers,
};
