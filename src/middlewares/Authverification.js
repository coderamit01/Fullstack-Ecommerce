import { DecodeToken } from "../utils/TokenHelper.js";

export const Authverification = (req,res,next) => {
  const token = req.headers.token || req.cookies.token;
  const decode = DecodeToken(token);

  if(!decode) {
    return res.status(401).json({status: "Failed", message: "Unauthorized"})
  }

  const {email,user_id} = decode;
  req.headers.email = email;
  req.headers.user_id = user_id;

  next();
}