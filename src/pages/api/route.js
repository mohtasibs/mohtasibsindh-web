const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// These id's and secrets should come from .env file.
const CLIENT_ID = '50043583073-j9a3v1p1t4sudb4k2betmd8k9at0noa4.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04VZOUCHFuNQZCgYIARAAGAQSNwF-L9IrwggMh16zDhrl-E0qqNWaXRlMQusmoZIAmjo-1-3rLxGQHwTq3jvEZCMhYJD1rnm2eWU';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Express setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route for handling form submission
app.post('/submit-form', async (req, res) => {
  try {
    // Fetch form data from the request
    const { user, complaint } = req.body;

    // Send email
    const emailResult = await sendMail(user, complaint);

    res.json({ user, complaint, emailResult });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mtariq255255@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'tariq <mtariq255255@gmail.com>',
      to: 'mtariq255255@gmail.com',
      subject: 'New Complaint Registration',
      text: `New complaint registered:\n\nUser Data:\n${JSON.stringify(userData, null, 2)}\n\nComplaint Data:\n${JSON.stringify(complaintData, null, 2)}`,
      html: `<h1>New Complaint Registration</h1><p><strong>User Data:</strong></p><pre>${JSON.stringify(userData, null, 2)}</pre><p><strong>Complaint Data:</strong></p><pre>${JSON.stringify(complaintData, null, 2)}</pre>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));