import jwt from 'jsonwebtoken';

export const EncodeToken = (email,user_id) => {
  const KEY = process.env.JWT_WEB_TOKEN;
  const EXPIRE = {expireIn: process.env.JWT_EXPIRE};
  const PAYLOAD = {email,user_id};
  return jwt.sign(PAYLOAD,KEY,EXPIRE)
}
export const DecodeToken = (token) => {
  try {
    const KEY = process.env.JWT_WEB_TOKEN;
    return jwt.verify(KEY,token)
  } catch (err) {
    return null;
  }

}