const nodemailer = require("nodemailer");
const { createCipheriv } = require("crypto");

// Update Email
exports.update = async (req, res) => {
  console.log(`<=== Update Email ====>`);
  const id = req.params.id;
  const result = await emailIdentifier(req.body.description);
  const { name, email, description, reply } = req.body;

  // Read the PDF file from the request body
  const pdfFile = req.file.buffer;

  // Generate a random initialization vector
  const iv = crypto.randomBytes(16);

  // Encrypt the PDF file with a symmetric encryption algorithm using the IV
  const algorithm = "aes-256-cbc";
  const key = Buffer.from(process.env.ENCRYPTION_KEY, "hex");
  const cipher = createCipheriv(algorithm, key, iv);
  const encryptedPdf = Buffer.concat([cipher.update(pdfFile), cipher.final()]);

  // Create a nodemailer transporter object
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Compose the email message
  const message = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Update for ${name}'s Email`,
    text: `${description} \n\n Reply: ${reply}`,
    attachments: [
      {
        filename: "encrypted.pdf",
        content: encryptedPdf,
      },
    ],
  };

  // Send the email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ status: "Error! Cannot Update!" });
    } else {
      console.log(`Email sent: ${info.response}`);
      // Update the email in the database after the email has been sent
      emailModel
        .findByIdAndUpdate(id, req.body)
        .then(() => {
          res.status(200).send({ status: "Email Updated!" });
        })
        .catch((err) => {
          res.status(500).send({ status: "Error! Cannot Update!" });
          console.log(err.message);
        });
    }
  });
};
