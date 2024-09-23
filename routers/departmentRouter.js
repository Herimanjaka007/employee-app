import express from "express";

import { postDepartment } from "../controllers/postDepartment.js";
import { body, validationResult } from "express-validator";

const departmentRouter = express.Router();

const validateDepartment = [
    body('department')
        .trim()
        .notEmpty().withMessage("Department name is required")
        .isLength({ min: 3 }).withMessage("Department name require 3 characters at least")
        .escape(),
    (req, res, next) => {
        const { errors } = validationResult(req);
        if (errors.length !== 0) {
            return res.status(400).json(errors);
        }
        next();
    }
]

departmentRouter.post("/create", [validateDepartment, postDepartment]);

export default departmentRouter;