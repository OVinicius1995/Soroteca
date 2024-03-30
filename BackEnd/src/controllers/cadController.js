const cadUsersModel = require('../models/cadUsersModels');

const getAll = async (_req,res) => {
  
  const users = await cadUsersModel.getAll();
  
  return res.status(200).json(users);
};

const cadUsers = async (req,res) => {
  const createdUsers = await cadUsersModel.cadUsers(req.body);
  return res.status(201).json(createdUsers);
}

const deleteUser = async (req,res) =>{
  const {id} = req.params;

  await cadUsersModel.deleteUser(id);
  return res.status(204).json();
}

const updateUser = async (req,res) =>{
  const {id} = req.params;

  await cadUsersModel.updateUser(id,req.body);
  return res.status(204).json();
}

module.exports = {
  getAll,
  cadUsers,
  deleteUser,
  updateUser
}