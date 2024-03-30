const rulesModel = require('../models/rulesModel');

const getAllRules = async (_req,res) => {
  const rules = await rulesModel.getRules();
  return res.status(200).json(rules);
}

module.exports = {
  getAllRules
};