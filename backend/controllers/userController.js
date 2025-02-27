import { User } from "../models/userModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

export const getUser = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};

export const updateUser = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};
export const deleteUser = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};
