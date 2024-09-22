import { getDepartments, getEmployees } from "../db/query.js";

export const getIndex = async (req, res) => {
    const employees = await getEmployees();
    const departments = await getDepartments();
    res.render('index', { employees, departments: departments.map(department => department.name_department) });
};

