import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Required for handling file uploads
  },
};

const API_KEY = "a4b7f20f6bcd914d0f85099";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  if (req.headers["x-api-key"] !== API_KEY) {
    return res.status(403).json({ message: "Unauthorized: Invalid API key" });
  }

  try {
    const form = new formidable.IncomingForm({ multiples: false });

    await new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("🚨 Form Parsing Error:", err);
          reject(res.status(500).json({ message: "Error parsing form data" }));
          return;
        }

        console.log("✅ Form Data Parsed Successfully:", fields);

        // ✅ Extract user and complaint details
        const user = JSON.parse(fields.user);
        const complaint = JSON.parse(fields.complaint);

        console.log("📝 Extracted User:", user);
        console.log("📝 Extracted Complaint:", complaint);

        let attachments = [];
        if (files.file) {
          attachments.push({
            filename: files.file.originalFilename,
            path: files.file.filepath,
            contentType: files.file.mimetype,
          });
        }

        console.log("📎 Attachments:", attachments);
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Missing');

        // ✅ Setup Nodemailer
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS,
        //     },
        // });

        const transporter = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com",
            port: 465,
            secure: true, // Use SSL
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // This MUST be your Yahoo App Password
          },
        });

        // ✅ Properly formatted HTML email
        const mailOptions = {
          from: `"Complaint Form Submission" <${process.env.EMAIL_USER}>`,
          to: 'mohtasibhd@yahoo.com',
          subject: 'New Complaint Submitted',
          html: `
                        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                            <h2 style="color: #007BFF;">Complaint Form Submission</h2>
                            <p><strong>Name:</strong> ${user.name}</p>
                            <p><strong>CNIC:</strong> ${user.cnic}</p>
                            <p><strong>Address:</strong> ${user.address}</p>
                            <p><strong>District:</strong> ${user.district}</p>
                            <p><strong>Phone:</strong> ${user.phone}</p>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <hr/>
                            <p><strong>Complaint Type:</strong> ${
                              complaint.type ? complaint.type : "Not Provided"
                            }</p>
                            <p><strong>Complaint Office:</strong> ${
                              complaint.complaintOffice
                            }</p>
                            <p><strong>Complaint Against:</strong> ${
                              complaint.complaintAgainst
                            }</p>
                            <p><strong>Subject:</strong> ${
                              complaint.subject
                            }</p>
                            <p><strong>Complaint Details:</strong></p>
                            <p>${complaint.complaint}</p>
                        </div>
                    `,
          attachments,
        };

        console.log("📩 Sending Email...");
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error("❌ Error sending email:", err);
            res
              .status(500)
              .json({ message: "❌ Failed to send email", error: err.message });
            return;
          }
          console.log("✅ Email Sent Successfully!", info);

          if (files.file) fs.unlinkSync(files.file.filepath);

          res.status(200).json({
            message: "✅ Complaint submitted successfully via email!",
            complaintType: complaint.type ? complaint.type : "Not Provided", // ✅ Added complaint type in response
          });

          resolve();
        });
      });
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res
      .status(500)
      .json({ message: "❌ Failed to send email", error: error.message });
  }
}
