import pool from "../db/pool.js";

const postEmployee = async (req, res, next) => {
    const { firstName, lastName, sexe, dateHire, email, department } = req.body;
    const query = `
        INSERT INTO employee 
        (first_name_employee, last_name_employee, sexe_employee, date_embauche_employee, email_employee, id_department)
        VALUES ($1, $2, $3, $4, $5, $6);
    `;
    
    await pool.query(query, [firstName, lastName, sexe, dateHire, email, department]);
    res.redirect('/');
};

export default postEmployee;