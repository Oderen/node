const nodemailer = require("nodemailer");

const password = "1234567890";

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "load7en@meta.ua",
    pass: password,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const isEmailSent = await transport.sendMail({
      ...data,
      from: "load7en@meta.ua",
    });
    console.log("isEmailSent", isEmailSent);
    console.log("Email is sent successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
