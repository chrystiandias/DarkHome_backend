import mongoose from 'mongoose';

// definição para o investimento
const investmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Investment = mongoose.model('Investment', investmentSchema);

export default Investment; 