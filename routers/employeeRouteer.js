import express from "express";
import { body, param, validationResult } from "express-validator";

import postEmployee from "../controllers/postEmployee.js";
import getEditEmployee from "../controllers/getEditEmployee.js";
import postEditEmployee from "../controllers/postEditEmployee.js";

const employeeRouter = express.Router();

const validateEmployee = [
    body('firstName')
        .notEmpty().withMessage('First name is required')
        .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long')
        .trim().escape(),

    body('lastName')
        .notEmpty().withMessage('Last name is required')
        .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long')
        .trim().escape(),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Must be a valid email')
        .normalizeEmail(),

    body('dateHire')
        .notEmpty().withMessage('Date of hiring is required')
        .isISO8601().withMessage('Date must be in a valid format (ISO 8601)')
        .toDate(),

    body('sexe')
        .notEmpty().withMessage('Sexe is required')
        .isIn(['M', 'F']).withMessage('Sexe must be either M (Male) or F (Female)')
        .trim().escape(),

    body('department')
        .notEmpty().withMessage('Department is required')
        .isInt({ min: 1 }).withMessage('Department ID must be a valid positive integer'),

    (req, res, next) => {
        const { errors } = validationResult(req);
        if (errors.length !== 0) {
            return res.status(400).json({ errors });
        }
        next();
    }
];


employeeRouter.post("/create", [validateEmployee, postEmployee]);

const handleIdEmployeeParam = (req, res, next) => {
    const { idEmployee } = req.params;
    if (Number.isInteger(+idEmployee)) {
        return next();
    }
    return res.redirect("/");
};

employeeRouter.get("/:idEmployee/edit", handleIdEmployeeParam, getEditEmployee);

employeeRouter.post("/:idEmployee/edit", handleIdEmployeeParam, postEditEmployee);

export default employeeRouter;