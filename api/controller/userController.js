import connect from "../helper/index.js";

// const query
const getAllUsers = (req, res) => {
  const sql = `SELECT * FROM USERS`;
  connect.query(sql, (err, result) => {
    if (err) return res.status(400).send(err.message);
    res.status(200).send(result);
  });
};

const insertUsers = (req, res) => {
  const sql = `INSERT INTO USERS (userName,email) VALUES (?)`;
  const { userName, email } = req.body;
  if (userName && email) {
    const data = [userName, email];
    connect.query(sql, [data], (err, result) => {
      if (err) return res.status(201).send(err.message);
      res.status(200).send(result);
    });
  } else {
    res.send("all fields are required");
  }
};

const updateUsers = (req, res) => {
  const sql = `UPDATE USERS SET  userName=? ,email=? WHERE userId = ?`;
  const { userName, email } = req.body;
  const { userId } = req.params;
  const data = [userName, email];
  connect.query(sql, [...data, userId], (err, result) => {
    if (err) return res.status(201).send(err.message);
    res.status(200).send(result);
  });
};

const deleteUsers = (req, res) => {
  const { userId } = req.params;
  const sql = `DELETE FROM USERS  WHERE userId = ?`;
  const data = [userId];
  connect.query(sql, [data], (err, result) => {
    if (err) return res.status(201).send(err.message);
    res.status(200).send(result);
  });
};

export { getAllUsers, insertUsers, updateUsers, deleteUsers };
