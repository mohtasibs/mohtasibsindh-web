import { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";
import { TiContacts } from "react-icons/ti";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "a4b7f20f6bcd914d0f85099", // API key for authentication
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BaseLayout>
      <div className="container mt-5">
        <div className="row">
          {/* Left Section: Contact Details */}
          <div className="col-md-6 pe-5 mb-4">
            <h2 className="values-system-heading mb-2 d-flex">
              Contact Us <TiContacts className="ms-3" />
            </h2>

            <p className="values-system-para mt-2">
              Secretariat Provincial Ombudsman, Sindh
            </p>
            <p className="values-system-para mt-2">
              Shahrah-e-Kamal Ataturk Ombudsman, Sindh Karachi
            </p>
            <p className="values-system-para mt-2">Contact: 021-99211025</p>

            <p className="values-system-para mt-3" style={{ fontSize: "20px", lineHeight: "1.6" }}>
              <a
                className="underline text-success"
                href="https://www.mohtasibsindh.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block" }}
              >
                Website: http://www.mohtasibsindh.gov.pk
              </a>
            </p>

            <p className="values-system-para mt-2 text-success" style={{ fontSize: "20px" }}>
              Email:{" "}
              <a href="mailto:mohtasibhd@yahoo.com" className="underline">
                mohtasibhd@yahoo.com
              </a>
            </p>

            <p className="values-system-para mt-5">
              Phone: +92-21-99211031,25,28 (PABX Ext: 200)
            </p>
            <p className="values-system-para">
              Phone: +92-21-99211026 (Direct Ombudsman’s Office)
            </p>

            <div className="mt-3">
              <Link
                className="learn-more mt-2 values-system-para underline text-success"
                href="/Headquarter"
                style={{ fontSize: "20px", display: "block" }}
              >
                Click here for names and contacts of officers in the Provincial
                Ombudsman Secretariat/Headquarter
              </Link>
            </div>
            <div className="mt-3">
              <Link
                className="learn-more mt-3 values-system-para underline text-success"
                href="/About/RegionalOffices"
                style={{ fontSize: "20px", display: "block" }}
              >
                Click here for names and contacts of officers in the Provincial
                Ombudsman Regional Offices
              </Link>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          {/* <div className="col-md-6 mb-4">
            <div className="contact-form p-4 border rounded shadow">
              <h3 className="mb-4 get-in-touch-heading">Get in Touch</h3>
              
              {responseMessage && (
                <div className={`alert ${responseMessage.includes("Error") ? "alert-danger" : "alert-success"}`}>
                  {responseMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <small className="text-danger">{errors.subject}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>

                <button type="submit" className="btn custom-submit-button w-100" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Contact;
