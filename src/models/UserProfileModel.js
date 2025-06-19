import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    cus_name: {type: String},
    cus_phone: {type: String},
    cus_address: {type: String},
    cus_city: {type: String},
    cus_country: {type: String},
    cus_fax: {type: String},
    cus_state: {type: String},
    cus_postcode: {type: String},
    ship_name: {type: String},
    ship_phone: {type: String},
    ship_address: {type: String},
    ship_city: {type: String},
    ship_country: {type: String},
    ship_fax: {type: String},
    ship_state: {type: String},
    ship_postcode: {type: String}
  },{
    timestamps: true,
    versionKey: false
  }
);

const UserProfileModel = mongoose.model('userprofile', DataSchema);

export default UserProfileModel;