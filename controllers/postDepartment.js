import pool from "../db/pool.js";

export const postDepartment = async (req, res, next) => {
    const { department } = req.body;
    const query = `
    INSERT INTO department (name_department)
    VALUES
    ($1);
    `;

    await pool.query(query, [department]);
    res.redirect("/");
};