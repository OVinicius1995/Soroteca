const conn = require('./connection');

const getAll = async () => {
  const [users] = await conn.execute('Select * from cadUsers');
  return users;
};

module.exports = {
  getAll
}