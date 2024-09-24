import pool from "../db/pool.js";

const postEditEmployee = async (req, res, next) => {
    const { firstName, lastName, sexe, dateHire, email, department } = req.body;
    const query = `
    UPDATE employee SET
        first_name_employee = $1, 
        last_name_employee = $2,
        sexe_employee = $3,
        date_embauche_employee = $4,
        email_employee = $5,
        id_department = $6
    WHERE
        eid_employee = $7;
    `;

    await pool.query(query, [firstName, lastName, sexe, dateHire, email, department, +req.params.idEmployee]);
    res.redirect("/");
};

export default postEditEmployee;