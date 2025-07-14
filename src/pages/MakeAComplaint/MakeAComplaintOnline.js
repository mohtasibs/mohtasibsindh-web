"use client";

import axios from "axios";
import { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MakeAComplaintOnline = () => {
  const [user, setUser] = useState({
    cnic: "",
    name: "",
    address: "",
    district: "",
    phone: "",
    mobile: "",
    email: "",
  });

  const [complaint, setComplaint] = useState({
    type: "",
    complaintOffice: "",
    complaintAgainst: "",
    subject: "",
    complaint: "",
  });

  const [vsAffidavit, setVsAffidavit] = useState(false);
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState(""); // ✅ Added missing state
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ Added missing state
  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // ✅ CNIC Validation: Ensure only digits and correct format
    if (name === "cnic") {
      formattedValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      if (formattedValue.length > 13) {
        formattedValue = formattedValue.slice(0, 13);
      }
      if (formattedValue.length > 5) {
        formattedValue =
          formattedValue.slice(0, 5) +
          "-" +
          formattedValue.slice(5, 12) +
          "-" +
          formattedValue.slice(12);
      }
    }

    setUser({ ...user, [name]: formattedValue });
  };
  const handleChangeComplaint = (e) => {
    const { name, value } = e.target;

    setComplaint((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(`Updated Complaint State:`, complaint); // Debugging
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // ✅ Store file in state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic Validation
    if (
      !user.name ||
      !user.cnic ||
      !user.address ||
      !complaint.subject ||
      !complaint.complaint
    ) {
      toast.error("❌ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const formData = new FormData();
      formData.append("user", JSON.stringify(user));
      formData.append("complaint", JSON.stringify(complaint));
      if (file) formData.append("file", file);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "x-api-key": "a4b7f20f6bcd914d0f85099", // API Key for authentication
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("✅ Complaint submitted successfully!");
        setUser({
          cnic: "",
          name: "",
          address: "",
          district: "",
          phone: "",
          mobile: "",
          email: "",
        });
        setComplaint({
          type: "",
          complaintOffice: "",
          complaintAgainst: "",
          subject: "",
          complaint: "",
        });
        setFile(null);
        setVsAffidavit(false); // ✅ reset checkbox
      } else {
        console.error("API Error:", result.message);
        toast.error(`⚠️ Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("❌ Failed to submit complaint. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BaseLayout>
      <div className="container mt-5">
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={4000}
        />

        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 shadow p-4 rounded bg-white">
            <h2 className="complaint-title text-center mb-3 d-flex align-items-center justify-content-center" >
              ONLINE COMPLAINT REGISTRATION FORM
              
            </h2>
            <p className="complaint-subtitle text-center text-muted mb-4">
              Please enter your complaint details
            </p>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Type Radio */}
              <div className="form-group mb-3">
                <label className="form-label fw-bold">Complaint Type</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      value="General"
                      checked={complaint.type === "General"}
                      onChange={handleChangeComplaint}
                    />
                    <label className="form-check-label">General</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      value="Child Related"
                      checked={complaint.type === "Child Related"}
                      onChange={handleChangeComplaint}
                    />
                    <label className="form-check-label">Child Related</label>
                  </div>
                </div>
              </div>

              {/* Office Dropdown */}
              <div className="form-group mb-3">
                <select
                  name="complaintOffice"
                  value={complaint.complaintOffice}
                  className="form-select"
                  onChange={handleChangeComplaint}
                >
                  <option value="Select Office">Select Office</option>
                  <option value="Karachi (Central)">Karachi (Central)</option>
                  <option value="Karachi (East)">Karachi (East)</option>
                  <option value="Karachi (South)">Karachi (South)</option>
                  <option value="Karachi (West)">Karachi (West)</option>
                  <option value="Korangi">Korangi</option>
                  <option value="Thatta">Thatta</option>
                  <option value="Sukkur">Sukkur</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Badin">Badin</option>
                  <option value="Naushahro Feroze">Naushahro Feroze</option>
                  <option value="Larkana">Larkana</option>
                  <option value="Mirpurkhas">Mirpurkhas</option>
                  <option value="Mithi">Mithi</option>
                  <option value="Jacobabad">Jacobabad</option>
                  <option value="Dadu">Dadu</option>
                  <option value="Nawabshah">Nawabshah</option>
                  <option value="Khairpur">Khairpur</option>
                  <option value="Ghotki">Ghotki</option>
                  <option value="Sanghar">Sanghar</option>
                </select>
              </div>

              {/* User Details */}
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  placeholder="Complainant Name"
                  onChange={handleChangeUser}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={complaint.subject}
                  placeholder="Subject"
                  onChange={handleChangeComplaint}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={user.address}
                  placeholder="Enter Address"
                  onChange={handleChangeUser}
                />
              </div>

              {/* District */}
              <div className="form-group mb-3">
                <select
                  name="district"
                  value={user.district}
                  className="form-select"
                  onChange={handleChangeUser}
                >
                  <option value="Select District">Select District</option>
                  <option value="Karachi (Central)">Karachi (Central)</option>
                  <option value="Karachi (East)">Karachi (East)</option>
                  <option value="Karachi (South)">Karachi (South)</option>
                  <option value="Karachi (West)">Karachi (West)</option>
                  <option value="Korangi">Korangi</option>
                  <option value="Thatta">Thatta</option>
                  <option value="Sukkur">Sukkur</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Badin">Badin</option>
                  <option value="Naushahro Feroze">Naushahro Feroze</option>
                  <option value="Larkana">Larkana</option>
                  <option value="Mirpurkhas">Mirpurkhas</option>
                  <option value="Mithi">Mithi</option>
                  <option value="Jacobabad">Jacobabad</option>
                  <option value="Dadu">Dadu</option>
                  <option value="Nawabshah">Nawabshah</option>
                  <option value="Khairpur">Khairpur</option>
                  <option value="Ghotki">Ghotki</option>
                  <option value="Sanghar">Sanghar</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={user.phone}
                  placeholder="Phone"
                  onChange={handleChangeUser}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="cnic"
                  value={user.cnic}
                  placeholder="Enter CNIC No"
                  onChange={handleChangeUser}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  value={user.mobile}
                  placeholder="Enter Mobile Number"
                  onChange={handleChangeUser}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  placeholder="Enter Email Address"
                  onChange={handleChangeUser}
                />
              </div>

              {/* File Upload */}
              <div className="form-group mb-3">
                <label htmlFor="file" className="form-label fw-bold">
                  Upload File
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={handleFileChange}
                />
              </div>

              {/* Complaint Against Office */}
              <div className="form-group mb-3">
                <label className="form-label fw-bold">
                  Select the Sindh Govt. Office against which the complaint is
                  being made
                </label>
                <select
                  name="complaintAgainst"
                  value={complaint.complaintAgainst}
                  className="form-select"
                  onChange={handleChangeComplaint}
                >
                  <option value="Select Office">Select Office</option>
                  <option value="Accountant General Sindh">
                    Accountant General Sindh
                  </option>
                  <option value="Agriculture Supply & Prices Department">
                    Agriculture Supply & Prices Department
                  </option>
                  <option value="Auqaf Religious Affairs Zakat & Ushr Department">
                    Auqaf Religious Affairs Zakat & Ushr Department
                  </option>
                  <option value="Benazir Bhutto Shaheed Human Resource Research and Development Board">
                    Benazir Bhutto Shaheed Human Resource Research and
                    Development Board
                  </option>
                  <option value="Cooperation Department">
                    Cooperation Department
                  </option>
                  <option value="Culture Tourism and Antiquities Department">
                    Culture Tourism and Antiquities Department{" "}
                  </option>
                  <option value="Education & Literacy Department (Colleges Education)">
                    Education & Literacy Department (Colleges Education)
                  </option>
                  <option value="Education & Literacy Department (Schools Education)">
                    Education & Literacy Department (Schools Education)
                  </option>
                  <option value="Energy Department">Energy Department</option>
                  <option value="Enquiries and Anti Corruption Establishment">
                    Enquiries and Anti Corruption Establishment{" "}
                  </option>
                  <option value="Environment Climate Change and Costal Development Department">
                    Environment Climate Change and Costal Development Department
                  </option>
                  <option value="Environmental Alternate Energy">
                    Environmental Alternate Energy{" "}
                  </option>
                  <option value="Excise Taxation and Narcotics Department">
                    Excise Taxation and Narcotics Department{" "}
                  </option>
                  <option value="Finance Department">Finance Department</option>
                  <option value="Forest & Wildlife Department">
                    Forest & Wildlife Department
                  </option>
                  <option value="Food Department">Food Department</option>
                  <option value="Health Department">Health Department </option>
                  <option value="Home Department">Home Department</option>
                  <option value="Human Rights Department">
                    Human Rights Department
                  </option>
                  <option value="Industries & Commerce Department">
                    Industries & Commerce Department
                  </option>
                  <option value="Information & Archives Department">
                    Information & Archives Department
                  </option>
                  <option value="Information Science & Technology Department">
                    Information Science & Technology Department
                  </option>
                  <option value="Irrigation Department">
                    Irrigation Department
                  </option>
                  <option value="Karachi Municipal Cooperation">
                    Karachi Municipal Cooperation
                  </option>
                  <option value="Karachi Development Authority">
                    Karachi Development Authority
                  </option>
                  <option value="Karachi Water and Sewerage Board">
                    Karachi Water and Sewerage Board
                  </option>
                  <option value="Katchi Abadies and Spatial Development Department">
                    Katchi Abadies and Spatial Development Department
                  </option>
                  <option value="Labour  and Human Resources Department">
                    Labour and Human Resources Department
                  </option>
                  <option value="Law and Parliamentary Affairs Department">
                    Law and Parliamentary Affairs Department
                  </option>
                  <option value="Live Stock & Fisheries Department">
                    Live Stock & Fisheries Department
                  </option>
                  <option value="Local Government and Housing Town Planning Department">
                    Local Government and Housing Town Planning Department
                  </option>
                  <option value="Lyari Development Authority">
                    Lyari Development Authority{" "}
                  </option>
                  <option value="Malir Development Authority">
                    Malir Development Authority{" "}
                  </option>
                  <option value="Mines and Mineral Development Department">
                    Mines and Mineral Development Department
                  </option>
                  <option value="Minorities Affairs Department">
                    Minorities Affairs Department
                  </option>
                  <option value="Planning & Development Department">
                    Planning & Development Department
                  </option>
                  <option value="Police Department">Police Department</option>
                  <option value="Population & Welfare Department">
                    Population & Welfare Department
                  </option>
                  <option value="Power Department">Power Department</option>
                  <option value="Public Health Engineering and Rural Development Department">
                    Public Health Engineering and Rural Development Department
                  </option>
                  <option value="Revenue Department">Revenue Department</option>
                  <option value="Services General Administration & Coordination Department">
                    Services General Administration & Coordination Department
                  </option>
                  <option value="Sindh Building Control Authority">
                    Sindh Building Control Authority
                  </option>
                  <option value="Sindh Employees Social Security Institution">
                    Sindh Employees Social Security Institution
                  </option>
                  <option value="Sindh Higher Education Commission Karachi">
                    Sindh Higher Education Commission Karachi{" "}
                  </option>
                  <option value="Sindh Public Service Commission">
                    Sindh Public Service Commission{" "}
                  </option>
                  <option value="Social Welfare Department">
                    Social Welfare Department
                  </option>
                  <option value="Special Education Department">
                    Special Education Department
                  </option>
                  <option value="Sport & Youth  Affairs Department">
                    Sport & Youth Affairs Department
                  </option>
                  <option value="Transport & Mass Transit Department">
                    Transport & Mass Transit Department
                  </option>
                  <option value="Women Development Department">
                    Women Development Department
                  </option>
                  <option value="Work & Services Department">
                    Work & Services Department{" "}
                  </option>
                </select>
              </div>

              {/* Complaint Description */}
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  name="complaint"
                  value={complaint.complaint}
                  rows="4"
                  placeholder="Main Point of Complainant"
                  onChange={handleChangeComplaint}
                ></textarea>
              </div>

              {/* Affidavit Section */}
              <div className="form-group mb-3">
                <label className="fw-bold">
                  Please read the following and check the box before submitting
                  your complaint
                </label>
                <textarea
                  className="form-control"
                  rows="7"
                  readOnly
                  value={
                  `I do hereby solemnly affirm:
                  (a) That the facts mentioned in this complaint are correct to the best of my knowledge and belief. 
                  (b) That no complaint on this subject has previously been lodged with Provincial Mohtasib (Ombudsman) by me, or on my behalf, in the Head Office or any the Regional Offices. 
                  (c) That no suit,appeal,petition or other judicial proceeding in connection with the subject matter of this complaint is pending in any court, tribunal or board. 
                  (d) I made a representation to the the senior Officers of the Agency in this connection but have failed to elicit a reply/my representation has been unjustly turned down.`}
                ></textarea>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="vsAffidavit"
                    checked={vsAffidavit}
                    onChange={(e) => setVsAffidavit(e.target.checked)}
                    required
                  />
                  <label className="form-check-label">
                    I do affirm the Affidavit
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Complaint"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default MakeAComplaintOnline;
