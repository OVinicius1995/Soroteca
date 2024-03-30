const conn = require('./connection');

const getRules = async (req,res) => {
      const [rules] = await conn.execute('SELECT * FROM rules');
      return rules;
}

module.exports = {
  getRules
};


