import { EmailSend } from "../utils/EmailHelper.js";
import UserModel from "../models/UserModel.js";
import { EncodeToken } from "../utils/TokenHelper.js";

export const UserOTPService = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(10000 + Math.random() * 900000);

    let emailSubject = "Email Verification";
    let emailText = `Your Verification code ${code}`;

    await EmailSend(email, emailSubject, emailText);

    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );

    return { status: "success", message: "6 Digit OTP has been send" };
  } catch (err) {
    return { status: "Fail", message: err };
  }
};

export const VerifyOTPService = async (req) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;

    let total = await UserModel.find({
      email: email,
      otp: otp
    }).countDocuments();

    if(total === 1 ) {
      let user_id = await UserModel.find({email:email, otp: otp}).select("_id");
      let token = EncodeToken(email,user_id[0]["_id"].toString());

      await UserModel.updateOne({email: email}, {$set: {otp: "0"}});

      return {status: "success", message: "Valid OTP", token: token};
    }else{
      return {status: "Fail", message: "InValid OTP"};
    }
  } catch (err) {
    return { status: "Fail", message: err };
  }
};
