const Car = require('../models/car.model');



exports.save_car = async (req, res) => {
    const { make, model, year } = req.body;
    console.log("im here");
    
    try {
      const saveCar = new Car({make, model, year});
      await saveCar.save();
      return res
      .status(201)
       .json({
        success: true,
        message: "Car saved successfully",
        data: saveCar,
       });    
    } catch (err) {
      console.log(err);
      return res.status(500).json({success: false, message: err.message});
      }
  };
  
  exports.get_car = async (req, res) => {
    try {
      const cars = await Car.find();
      return res.json({
        success: true,
        message: "Cars fetched successfully",
        data: cars,
        count: cars.length,
      });
      } catch (err) {
        console.log(err);
        return res.status(404).json({success: false, message: err.message});
        }
  };
  
  exports.update_car = async (req, res) => { 
    const {make, model, year} = req.body;
    try {
      const updatedCar = await Car.findByIdAndUpdate(
        {_id: req.params.id},
        {make, model, year},
        {isNew: true}
  );
    return res.status(200).json({message: "CAR updated successfully", data: updatedCar});    
    } catch (err) {
      console.log(err);
      return res.status(500).json({success: false, message: err.message});
    }
  };
  
  exports.find_car = async (req, res) => {
    try {
      const car = await Car.findOne();
      return res.status(200).json({message: "Car found", data: car});   
    } catch (err) {
      console.log(err);
      return res.status(500).json({success: false, message: err.message});
      }
  }
  
  exports.delete_car = async (req, res) => {
    try {
      await Car.findByIdAndDelete(req.params.id);
      return res.status(200).json({message: "Car deleted successfully"});
      } catch (err) {
      console.log(err);
      return res.status(500).json({success: false, message: err.message});
    }
  };
  