const router = require("express").Router();
const { body } = require("express-validator/check");
const { validationResult } = require("express-validator/check");

const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

router.post(
  "/contact",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 2 }),
    body("message").isLength({ min: 4 }),
  ],
  (req, res) => {
    let data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ msg: "Please provide valid information." });
    }

    const transporter = nodemailer.createTransport(
      sendgridTransport({
        auth: {
          api_key: process.env.SENDGRID_API_KEY,
        },
      })
    );

    const emailData = {
      to: "ibrahimtoru@gmail.com",
      from: "ibrahimkamalzai@gmail.com",
      subject: `${data.name}, ${data.email} sent you an email.`,
      html: `
                <h3>Details</h3>
                <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${data.message}</p>
            
            `,
    };

    transporter.sendMail(emailData, (error) => {
      try {
        if (error)
          return res.status(400).json({ msg: "Please fill all the fields." });
        res.status(200).json({
          msg: "Thank you for contacting me. You will get a response as soon as possible.",
        });
      } catch (error) {
        console.log(error);
        if (error) return res.status(500).json({ msg: "Server side error" });
      }
    });
  }
);

module.exports = router;
