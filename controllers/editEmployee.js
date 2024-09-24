import { getDepartments, getEmployee } from "../db/query.js";

const editEmployee = async (req, res, next) => {
    const { idEmployee } = req.params;
    const rowsEmployee = await getEmployee(+idEmployee);
    const [employee] = rowsEmployee;
    const departments = await getDepartments();
    res.render("editEmployee", {employee, departments})
};

export default editEmployee;