const conn = require('./connection');
const jwt = require('jsonwebtoken');

const getAll = async () => {
  const [users] = await conn.execute('Select * from cadUsers');
  
  const tokenGerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAYWx1cmEuY29tLmJyIiwicGFzc3dvcmQiOiJIdUVLVzQ4OSFqNDQ1KiIsImlhdCI6MTY1MTY4MzUxNywiZXhwIjoxNjgzMjQxMTE3LCJzdWIiOiIxIn0.t0UuIAxJ1NPXANtlBOKfHfLsePF4LRPu4RA2WMkJl6A';
  console.log(jwt.decode(tokenGerado));
  return users;
};

const cadUsers = async (user) => {
  const {Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass} = user;
  const query = 'INSERT INTO cadUsers(Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass) VALUES (?,?,?,?,?,?,?)';
  const [createdUser] = await conn.execute(query,[Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass]);

  const secretKey = 'skljaksdj9983498327453lsldkjf';

  const nossoToken = jwt.sign(
    {
      email: 'nome@alura.com.br',
      password: 'HuEKW489!j445*',
    },
    secretKey,
    {
      expiresIn: '1y',
      subject: '1',
    }
  );

  console.log(nossoToken);

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