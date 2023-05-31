import express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();

router.post('/', async (req, res) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure your email provider
    service: 'outlook',
    auth: {
      user: 'eshabachuwar@outlook.com',
      pass: process.env.pass,
    },
  });
  let body = '';
  req.body.forEach((element) => {
    let x = `Name: ${element.name}\nPhone: ${element.phone}\nEmail: ${element.email}\nHobbies: ${element.hobbies}\n~~~~~~~~~~~~~~~~~~\n`;
    body = body + x;
  });
  var mailOptions = {
    from: 'eshabachuwar@outlook.com',
    to: 'eshabachuwar09@gmail.com',
    subject: 'The selected data',
    text: body,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ error });
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ resCode: 451, resTiming: '34ms', dataSent: '45kb' });
    }
  });
});

export default router;
