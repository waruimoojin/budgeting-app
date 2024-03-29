const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence vers l'utilisateur auquel ce budget appartient
  name: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
