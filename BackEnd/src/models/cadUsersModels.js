const conn = require('./connection');

const getAll = async () => {
  const [users] = await conn.execute('Select * from cadUsers');
  return users;
};

const cadUsers = async (user) => {
  const {Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass} = user;
  const query = 'INSERT INTO cadUsers(Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass) VALUES (?,?,?,?,?,?,?)';
  const [createdUser] = await conn.execute(query,[Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass]);

  return {insertedId: createdUser.insertId};
}

const deleteUser = async (id) =>{
  const [removedUser] = await conn.execute('DELETE FROM cadUsers WHERE ID = ?',[id]);
  return removedUser;
}

const updateUser = async (id, user) =>{
  const {Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass} = user;
  const updatequery = 'UPDATE cadUsers SET Uname = ?,Ucpf = ?,Upaper = ?,Uuf = ?,UconsPro = ?,Uemail = ?,Upass = ? WHERE ID = ?';
  const [updateUser] = await conn.execute(updatequery,[Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass,id]);
  return updateUser;
}

module.exports = {
  getAll,
  cadUsers,
  deleteUser,
  updateUser
}