"use client";

import axios from "axios";
import { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//toast-latest-code

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
      
    </BaseLayout>
  );
};

export default MakeAComplaintOnline;
