const mongoose = require('mongoose');


const carSchema = new mongoose.Schema(
    {
      make: String,
      model:{type: String, unique: true},
      year: {type: Number, unique: true},
  },
  {
  versionKey: false,
  timestamps: true,
  }
  );
 
  const Car = mongoose.model('Car', carSchema);
  module.exports = Car;