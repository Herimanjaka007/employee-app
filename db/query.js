import pool from "./pool.js";
import { config } from "dotenv";

config();

export const getEmployees = async () => {
    const QUERY = `
    SELECT eid_employee, first_name_employee, last_name_employee, email_employee, date_embauche_employee, sexe_employee, name_department
FROM employee e, department d WHERE e.eid_employee = d.id_department;
    `
    const { rows } = await pool.query(QUERY);
    return rows;
}

export const getDepartments = async () => {
    const query = `SELECT name_department FROM department;`;
    const {rows} = await pool.query(query);
    return rows;
}
