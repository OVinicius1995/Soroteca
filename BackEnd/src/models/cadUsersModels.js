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

module.exports = {
  getAll,
  cadUsers
}