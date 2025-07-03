import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
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
          return reject(
            res.status(500).json({ message: "Error parsing form data" })
          );
        }

        let user, complaint;
        try {
          user = JSON.parse(fields.user);
          complaint = JSON.parse(fields.complaint);
        } catch (parseError) {
          console.error("Failed to parse JSON fields:", parseError.message);
          return res.status(400).json({ message: "Invalid form data" });
        }

        const attachments = [];
        if (files.file) {
          attachments.push({
            filename: files.file.originalFilename,
            path: files.file.filepath,
            contentType: files.file.mimetype,
          });
        }

        const transporter = nodemailer.createTransport({
          host: "smtp.mail.yahoo.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Complaint Form Submission" <${process.env.EMAIL_USER}>`,
          to: "mohtasibhd@yahoo.com",
          subject: "New Complaint Submitted",
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
                complaint.type || "Not Provided"
              }</p>
              <p><strong>Complaint Office:</strong> ${
                complaint.complaintOffice
              }</p>
              <p><strong>Complaint Against:</strong> ${
                complaint.complaintAgainst
              }</p>
              <p><strong>Subject:</strong> ${complaint.subject}</p>
              <p><strong>Complaint Details:</strong></p>
              <p>${complaint.complaint}</p>
            </div>
          `,
          attachments,
        };

        transporter
          .sendMail(mailOptions)
          .then((info) => {
            if (files.file) {
              try {
                fs.unlinkSync(files.file.filepath);
              } catch (cleanupError) {
                console.warn("File cleanup failed:", cleanupError.message);
              }
            }

            console.log("Email sent successfully:", info.response);
            res.status(200).json({
              message: "Complaint submitted successfully via email.",
              complaintType: complaint.type || "Not Provided",
            });
            resolve();
          })
          .catch((err) => {
            console.error("Email sending failed:", err.message);
            res.status(500).json({
              message: "Failed to send email",
              error: err.message,
            });
            reject();
          });
      });
    });
  } catch (error) {
    console.error("Unexpected error:", error.message);
    return res
      .status(500)
      .json({ message: "Unexpected error", error: error.message });
  }
}
