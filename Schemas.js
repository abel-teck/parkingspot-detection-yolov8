const mongoose = require("mongoose");
const Schemas = mongoose.Schema;

// const userSchema = Schemas({
//   name: { type: String },
//   email: { type: String },
//   password: { type: String },
//   confirmPassword: { type: String },
//   telephone: { type: String },
// });

const parkingInfo = Schemas({
  a1: { type: Number },
  a2: { type: Number },
  a3: { type: Number },
  a4: { type: Number },
  a5: { type: Number},
  a6: { type: Number},
  a7: { type: Number },
  a8: { type: Number },
  a9: { type: Number },
  a10: { type: Number },
  a11: { type: Number },
  a12: { type: Number },
});

// const parkSchema = Schemas({
//   a1: { type: Number },
//   a2: { type: Number },
//   a3: { type: Number },
//   a4: { type: Number },
//   a5: { type: Number},
//   a6: { type: Number},
//   a7: { type: Number },
//   a8: { type: Number },
//   a9: { type: Number },
//   a10: { type: Number },
//   a11: { type: Number },
//   a12: { type: Number },
// });

// const UserData = new mongoose.model("UserData", userSchema, "users");
const ParkingInfo = new mongoose.model("ParkingInfo", parkingInfo,"Parking");
const Parking = mongoose.connection;
const db=  Parking.collection("Parking")

const myscehmas= {Parkingdata:ParkingInfo, Parking:db}
module.exports = myscehmas;
