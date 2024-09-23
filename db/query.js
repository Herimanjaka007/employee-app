import pool from "./pool.js";
import { config } from "dotenv";

config();

export const getEmployees = async () => {
    const QUERY = `
    SELECT * FROM employee e, department d WHERE e.eid_employee = d.id_department;
    `
    const { rows } = await pool.query(QUERY);
    return rows;
}

export const getDepartments = async () => {
    const query = `SELECT * FROM department;`;
    const {rows} = await pool.query(query);
    return rows;
}
