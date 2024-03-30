const cadUsersModel = require('../models/cadUsersModels');

const getAll = async (_req,res) => {
  
  const users = await cadUsersModel.getAll();
  
  return res.status(200).json(users);
};

const cadUsers = async (req,res) => {
  const createdUsers = await cadUsersModel.cadUsers(req.body);
  return res.status(201).json(createdUsers);
}

module.exports = {
  getAll,
  cadUsers
}