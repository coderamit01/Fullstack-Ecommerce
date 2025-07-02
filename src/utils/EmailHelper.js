import nodemailer from 'nodemailer';

export const EmailSend = async (MailTo, MailSub, MailText) => {
  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_KEY
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: MailTo,
    subject: MailSub,
    text: MailText,
  };

  return await transporter.sendMail(mailOptions);
}