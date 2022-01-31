import { Router } from "express";
import { UserController } from "../controller/userController";

export const userRouter = Router();

const userController = new UserController()

userRouter.post("/create", userController.createUser)