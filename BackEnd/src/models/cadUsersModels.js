const conn = require('./connection');
const jwt = require('jsonwebtoken');

const getAll = async () => {
  const [users] = await conn.execute('Select * from cadUsers');
  
  const tokenGerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXBwZXIiOiIxIiwiaWF0IjoxNzEzOTA0MjQzLCJleHAiOjE3NDU0NjE4NDN9.zSpmRh_kpytVQurHCqIUvAKtMaWMO_8P8QcsVQFuCss';
  console.log(jwt.decode(tokenGerado));

    
  return users;
};

const cadUsers = async (user) => {

  const {Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass} = user;
  const query = 'INSERT INTO cadUsers(Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass) VALUES (?,?,?,?,?,?,?)';
  const [createdUser] = await conn.execute(query,[Uname,Ucpf,Upaper,Uuf,UconsPro,Uemail,Upass]);
                    
  //clicnpj_soroteca_2024** 
  const secretKey = '44d939129da1372c74eb4798ffd930cc';
  
  
  const makeTokem = jwt.sign(
    {
      papper: Upaper
    },
    secretKey,
    {
      expiresIn: '1y',
    }
  );
                        

  console.log(makeTokem);

  return {insertedId: createdUser.insertId, token: makeTokem};
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