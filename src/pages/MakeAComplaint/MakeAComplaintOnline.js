'use client'

import axios from "axios";
import { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import { HiOutlineStatusOnline } from "react-icons/hi";

const MakeAComplaintOnline = () => {
    const [user, setUser] = useState({
        cnic: '',
        name: '',
        address: '',
        district: '',
        phone: '',
        mobile: '',
        email: ''
    });

    const [complaint, setComplaint] = useState({
        type: '',
        complaintOffice: '',
        complaintAgainst: '',
        subject: '',
        complaint: ''
    });

    const handleChangeUser = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        // Ensure CNIC is in the correct format (XXXXX-XXXXXXX-X)
        if (name === "cnic") {
            // Remove any non-digit characters
            formattedValue = value.replace(/\D/g, '');

            // Limit the CNIC to 13 characters and add hyphens
            if (formattedValue.length > 13) {
                formattedValue = formattedValue.slice(0, 13);
            }
            if (formattedValue.length > 5) {
                formattedValue = formattedValue.slice(0, 5) + '-' + formattedValue.slice(5, 12) + '-' + formattedValue.slice(12);
            }
        }

        setUser({
            ...user,
            [name]: formattedValue
        });
    };

    const handleChangeComplaint = (e) => {
        setComplaint({
            ...complaint,
            [e.target.name]: e.target.value
        });
        console.log(complaint)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let data = user;

            if (data.phone == '') {
                const { phone, ...newData } = data
                data = newData;
            }

            if (data.email == '') {
                const { email, ...newData } = data
                data = newData;
            }

            try {
                const userRes = await axios.post(`http://localhost:3001/users`, data);

                console.log(userRes.data)
            } catch (error) {
                console.log(error)
            }

            const complaintRes = await axios.post(`http://localhost:3001/complaints/${user.cnic}`, complaint);

            console.log(complaintRes.data)
        }
        catch (error) {
            console.log(error.response)
        }
    };

    return <BaseLayout>
        <div className="container">
            {/* <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 text-align-center">Online Complaint Registration</h2>

                        <p className="values-system-para text-align-center">Please enter your complaint details (Fields marked with * are mandatory).</p>
                    </div>
                </div>

                <div>

                </div>
            </div> */}
            <div className="container our-value-system mt-5 text-align-center justify-content-center">
                <div className="row">

                    <div className="container col-md-12 ">
                        <section id="contact">
                            <div className="contact">
                                <div className="container align-items-center d-flex justify-content-center">
                                    <div className="col-lg-12 col-md-12 pt-lg-0 pt-md-0 pt-4">
                                        <h2 className="values-system-heading mb-2 text-align-center d-flex">Online Complaint Registration <HiOutlineStatusOnline className=" ms-3" /></h2>

                                        <p className="values-system-para text-align-center mb-5">Please enter your complaint details </p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="form-control">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="type" id="inlineRadio1" value='General' onChange={handleChangeComplaint} />
                                                                <label className="form-check-label" for="inlineRadio1">General</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="type" id="inlineRadio2" value='Child Related' onChange={handleChangeComplaint} />
                                                                <label className="form-check-label" for="inlineRadio2">Child Related</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-control">
                                                            <select id="nearestOffice" name="complaintOffice" value={complaint.complaintOffice} class="form-select" data-bs-placement="bottom" placeholder="Select Office" onChange={handleChangeComplaint}>
                                                                <option value="Karachi (Central)">Select Office</option>
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
                                                    </div>


                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            value={user.name}
                                                            id="name"
                                                            placeholder="Complaint name"
                                                            onChange={handleChangeUser}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="subject"
                                                            value={complaint.subject}
                                                            id="subject"
                                                            placeholder="Subject "
                                                            onChange={handleChangeComplaint}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="address"
                                                            value={user.address}
                                                            id="address"
                                                            placeholder="Address "
                                                            onChange={handleChangeUser}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="district"
                                                            value={user.district}
                                                            id="district"
                                                            placeholder="District "
                                                            onChange={handleChangeUser}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="phone"
                                                            value={user.phone}
                                                            id="phone"
                                                            placeholder="Phone "
                                                            onChange={handleChangeUser}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="cnic"
                                                            value={user.cnic}
                                                            id="cnic"
                                                            placeholder="CNIC"
                                                            onChange={handleChangeUser}
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="mobile"
                                                            value={user.mobile}
                                                            id="mob"
                                                            placeholder="Mobile Number "
                                                            onChange={handleChangeUser}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            value={user.email}
                                                            id="email"
                                                            placeholder="Email address"
                                                            onChange={handleChangeUser}
                                                        />
                                                    </div>
                                                </div>


                                                {/* <div className="col-md-12">
                                                    <div className="form-group form-control">
                                                        <label htmlFor="file" className="me-3">Upload File</label>
                                                        <input
                                                            type="file"
                                                            className="form-control-file "
                                                            name="file"
                                                            id="file"
                                                        />
                                                    </div>
                                                </div> */}
                                                <h2>Select the Sindh Govt. Office against which the complaint is being made</h2>
                                                <div className="form-group">
                                                    <div className="form-control">
                                                        <select id="nearestOffice" name="complaintAgainst" value={complaint.complaintAgainst} class="form-select" data-bs-placement="bottom" placeholder="Select Office" onChange={handleChangeComplaint}>
                                                            <option value="Select Office">Select Office</option>
                                                            <option value="Accountant General Sindh">Accountant General Sindh</option>
                                                            <option value="Agriculture Supply & Prices Department">Agriculture Supply & Prices Department</option>
                                                            <option value="Auqaf Religious Affairs Zakat & Ushr Department">Auqaf Religious Affairs Zakat & Ushr Department</option>
                                                            <option value="Benazir Bhutto Shaheed Human Resource Research and Development Board">Benazir Bhutto Shaheed Human Resource Research and Development Board</option>
                                                            <option value="Cooperation Department">Cooperation Department</option>
                                                            <option value="Culture Tourism and Antiquities Department">Culture Tourism and Antiquities Department </option>
                                                            <option value="Education & Literacy Department (Colleges Education)">Education & Literacy Department (Colleges Education)</option>
                                                            <option value="Education & Literacy Department (Schools Education)">Education & Literacy Department (Schools Education)</option>
                                                            <option value="Energy Department">Energy Department</option>
                                                            <option value="Enquiries and Anti Corruption Establishment">Enquiries and Anti Corruption Establishment </option>
                                                            <option value="Environment Climate Change and Costal Development Department">Environment Climate Change and Costal Development Department</option>
                                                            <option value="Environmental Alternate Energy">Environmental Alternate Energy </option>
                                                            <option value="Excise Taxation and Narcotics Department">Excise Taxation and Narcotics Department </option>
                                                            <option value="Finance Department">Finance Department</option>
                                                            <option value="Forest & Wildlife Department">Forest & Wildlife Department</option>
                                                            <option value="Food Department">Food Department</option>
                                                            <option value="Health Department">Health Department </option>
                                                            <option value="Home Department">Home Department</option>
                                                            <option value="Human Rights Department">Human Rights Department</option>
                                                            <option value="Industries & Commerce Department">Industries & Commerce Department</option>
                                                            <option value="Information & Archives Department">Information & Archives Department</option>
                                                            <option value="Information Science & Technology Department">Information Science & Technology Department</option>
                                                            <option value="Irrigation Department">Irrigation Department</option>
                                                            <option value="Karachi Municipal Cooperation">Karachi Municipal Cooperation</option>
                                                            <option value="Karachi Development Authority">Karachi Development Authority</option>
                                                            <option value="Karachi Water and Sewerage Board">Karachi Water and Sewerage Board</option>
                                                            <option value="Katchi Abadies and Spatial Development Department">Katchi Abadies and Spatial Development Department</option>
                                                            <option value="Labour  and Human Resources Department">Labour  and Human Resources Department</option>
                                                            <option value="Law and Parliamentary Affairs Department">Law and Parliamentary Affairs Department</option>
                                                            <option value="Live Stock & Fisheries Department">Live Stock & Fisheries Department</option>
                                                            <option value="Local Government and Housing Town Planning Department">Local Government and Housing Town Planning Department</option>
                                                            <option value="Lyari Development Authority">Lyari Development Authority </option>
                                                            <option value="Malir Development Authority">Malir Development Authority </option>
                                                            <option value="Mines and Mineral Development Department">Mines and Mineral Development Department</option>
                                                            <option value="Minorities Affairs Department">Minorities Affairs Department</option>
                                                            <option value="Planning & Development Department">Planning & Development Department</option>
                                                            <option value="Police Department">Police Department</option>
                                                            <option value="Population & Welfare Department">Population & Welfare Department</option>
                                                            <option value="Power Department">Power Department</option>
                                                            <option value="Public Health Engineering and Rural Development Department">Public Health Engineering and Rural Development Department</option>
                                                            <option value="Revenue Department">Revenue Department</option>
                                                            <option value="Services General Administration & Coordination Department">Services General Administration & Coordination Department</option>
                                                            <option value="Sindh Building Control Authority">Sindh Building Control Authority</option>
                                                            <option value="Sindh Employees Social Security Institution">Sindh Employees Social Security Institution</option>
                                                            <option value="Sindh Higher Education Commission Karachi">Sindh Higher Education Commission Karachi </option>
                                                            <option value="Sindh Public Service Commission">Sindh Public Service Commission </option>
                                                            <option value="Social Welfare Department">Social Welfare Department</option>
                                                            <option value="Special Education Department">Special Education Department</option>
                                                            <option value="Sport & Youth  Affairs Department">Sport & Youth  Affairs Department</option>
                                                            <option value="Transport & Mass Transit Department">Transport & Mass Transit Department</option>
                                                            <option value="Women Development Department">Women Development Department</option>
                                                            <option value="Work & Services Department">Work & Services Department </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control"
                                                            name="complaint"
                                                            value={complaint.complaint}
                                                            id=""
                                                            rows="4"
                                                            placeholder="Main Point Of Complaint"
                                                            onChange={handleChangeComplaint}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <table>
                                                    <tr>
                                                        <td colspan="2" >
                                                            Please read the following and check the box before submitting your complaint:
                                                            <br />
                                                            <textarea className="form-control mt-3" rows="10" cols="100%" readonly>
                                                                I do hereby solemnly affirm:

                                                                (a) That  the facts mentioned in this complaint are correct to the best of my knowledge and belief.

                                                                (b) That no complaint on this subject has previously been lodged with Provincial Mohtasib (Ombudsman) by me, or on my behalf, in the Head Office or any the Regional Offices.

                                                                (c) That no suit,appeal,petition or other judicial proceeding in connection with the subject matter of this complaint is pending in any court, tribunal or board.

                                                                (d) I made a representation to the the senior Officers of the Agency in this connection but have failed to elicit a reply/my representation has been unjustly turned down.
                                                            </textarea>
                                                        </td>

                                                    </tr>

                                                    <tr >
                                                        <td>
                                                            <input type="checkbox" name="vsAffidavit" value="I do affirm the Affidavit" required /> I do affirm the Affidavit.
                                                        </td>
                                                        <td>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                </table>
                                                <div className="col-md-12 mt-3">
                                                    <button className="btn btn-success">Send Complaint</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
    </BaseLayout>;
};

export default MakeAComplaintOnline;


// import React, { useState } from "react";
// import BaseLayout from "@/components/BaseLayout";
// import { HiOutlineStatusOnline } from "react-icons/hi";

// const formGroups = [
//     {
//         type: "radio",
//         name: "complaintType",
//         label: "Complaint Type",
//         options: [
//             { id: "general", label: "General" },
//             { id: "childRelated", label: "Child Related" },
//         ],
//         defaultOption: "general",
//     },
//     {
//         type: "select",
//         name: "nearestOffice",
//         label: "Select Office",
//         options: [
//             "Karachi (Central)",
//             "Karachi (East)",
//             "Karachi (South)",
//             "karachi (West)",
//             "Thatta",
//             "Sukkur",
//             "Hyderabad",
//             "Badin",
//             "Naushahro Feroze",
//             "Larkana",
//             "Mirpurkhas",
//             "Mithi",
//             "Jacobabad",
//             "Dadu",
//             "Nawabshah",
//             "Khairpur",
//             "Ghotki",
//             "Sanghar",
//             "Korangi"

//             // Add more options here
//         ],
//         defaultOption: "Karachi (Central)",
//     },
//     {
//         type: "text",
//         name: "complaintName",
//         label: "Complaint Name",
//         placeholder: "Complaint name",
//     },
//     {
//         type: "text",
//         name: "subject",
//         label: "Subject",
//         placeholder: "Subject",
//     },
//     {
//         type: "text",
//         name: "address",
//         label: "Address",
//         placeholder: "Address",
//     },
//     {
//         type: "text",
//         name: "district",
//         label: "District",
//         placeholder: "District",
//     },
//     {
//         type: "text",
//         name: "phone",
//         label: "Phone",
//         placeholder: "Phone",
//     },
//     {
//         type: "text",
//         name: "cnic",
//         label: "CNIC",
//         placeholder: "CNIC",
//     },
//     {
//         type: "text",
//         name: "mob",
//         label: "Mobile Number",
//         placeholder: "Mobile Number",
//     },
//     {
//         type: "email",
//         name: "email",
//         label: "Email address",
//         placeholder: "Email address",
//     },
//     {
//         type: "file",
//         name: "file",
//         label: "Upload File",
//         placeholder: "Upload File",
//     },
//     {
//         type: "select",
//         name: "govtOffice",
//         label: "Select the Sindh Govt. Office",
//         options: [
//             "Accountant General Sindh",
//             "Agriculture Supply & Prices Department",
//             "Auqaf Religious Affairs Zakat & Ushr Department",
//             "Benazir Bhutto Shaheed Human Resource Research and Development Board",
//             "Cooperation Department",
//             "Culture Tourism and Antiquities Department",
//             "Education & Literacy Department (Colleges Education)",
//             "Education & Literacy Department (Schools Education)",
//             "Energy Department",
//             "Enquiries and Anti Corruption Establishment",
//             "Environment Climate Change and Costal Development Department",
//             "Environmental Alternate Energy",
//             "Excise Taxation and Narcotics Department",
//             "Finance Department",
//             "Forest & Wildlife Department",
//             "Food Department",
//             "Health Department",
//             "Home Department",
//             "Human Rights Department",
//             "Industries & Commerce Department",
//             "Information & Archives Department",
//             "Information Science & Technology Department",
//             "Irrigation Department",
//             "Karachi Municipal Cooperation",
//             "Karachi Development Authority",
//             "Karachi Water and Sewerage Board",
//             "Katchi Abadies and Spatial Development Department",
//             "Labour  and Human Resources Department",
//             "Law and Parliamentary Affairs Department",
//             "Live Stock & Fisheries Department",
//             "Local Government and Housing Town Planning Department",
//             "Lyari Development Authority",
//             "Malir Development Authority",
//             "Mines and Mineral Development Department",
//             "Minorities Affairs Department",
//             "Planning & Development Department",
//             "Police Department",
//             "Population & Welfare Department",
//             "Power Department",
//             "Public Health Engineering and Rural Development Department",
//             "Revenue Department",
//             "Services General Administration & Coordination Department",
//             "Sindh Building Control Authority",
//             "Sindh Employees Social Security Institution",
//             "Sindh Higher Education Commission Karachi",
//             "Sindh Public Service Commission",
//             "Social Welfare Department",
//             "Special Education Department",
//             "Sport & Youth  Affairs Department",
//             "Transport & Mass Transit Department",
//             "Women Development Department",
//             "Work & Services Department",


//         ],
//         defaultOption: "Accountant General Sindh",
//     },
//     {
//         type: "textarea",
//         name: "complaintDetails",
//         label: "Main Point Of Complaint",
//         placeholder: "Main Point Of Complaint",
//         rows: 4,
//         cols: 50,
//     }
// ];

// const MakeAComplaintOnline = () => {
//     const [formData, setFormData] = useState({});

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log(formData);
//     };

//     return (
//         <BaseLayout>
//             <div className="container">
//                 <div className="our-value-system mt-5 text-align-center justify-content-center">
//                     <div className="row">
//                         <div className="col-md-12 container">
//                             <section id="contact">
//                                 <div className="contact">
//                                     <div className="col-lg-12 col-md-12 pt-lg-0 pt-md-0 pt-4">
//                                         <h2 className="values-system-heading mb-2 text-align-center d-flex">
//                                             Online Complaint Registration <HiOutlineStatusOnline className="ms-3" />
//                                         </h2>

//                                         <p className="values-system-para text-align-center mb-5">Please enter your complaint details</p>

//                                         <form onSubmit={handleSubmit}>
//                                             {formGroups.map((formGroup, index) => (
//                                                 <div className="form-group" key={index}>
//                                                     {formGroup.type === "radio" && (
//                                                         <div className="form-control">
//                                                             {formGroup.options.map((option) => (
//                                                                 <div className="form-check form-check-inline" key={option.id}>
//                                                                     <input
//                                                                         className="form-check-input"
//                                                                         type="radio"
//                                                                         name={formGroup.name}
//                                                                         id={option.id}
//                                                                         value={option.id}
//                                                                         checked={formData[formGroup.name] === option.id}
//                                                                         onChange={handleInputChange}
//                                                                     />
//                                                                     <label className="form-check-label" htmlFor={option.id}>
//                                                                         {option.label}
//                                                                     </label>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     )}
//                                                     {formGroup.type === "select" && (
//                                                         <div className="form-control">
//                                                             <select
//                                                                 id={formGroup.name}
//                                                                 name={formGroup.name}
//                                                                 className="form-select"
//                                                                 value={formData[formGroup.name] || formGroup.defaultOption}
//                                                                 onChange={handleInputChange}
//                                                             >
//                                                                 {formGroup.options.map((option, optionIndex) => (
//                                                                     <option key={optionIndex} value={option}>
//                                                                         {option}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                     )}
//                                                     {formGroup.type === "text" && (
//                                                         <input
//                                                             type="text"
//                                                             className="form-control"
//                                                             name={formGroup.name}
//                                                             id={formGroup.name}
//                                                             placeholder={formGroup.placeholder}
//                                                             value={formData[formGroup.name] || ""}
//                                                             onChange={handleInputChange}
//                                                         />
//                                                     )}
//                                                     {formGroup.type === "email" && (
//                                                         <input
//                                                             type="email"
//                                                             className="form-control"
//                                                             name={formGroup.name}
//                                                             id={formGroup.name}
//                                                             placeholder={formGroup.placeholder}
//                                                             value={formData[formGroup.name] || ""}
//                                                             onChange={handleInputChange}
//                                                         />
//                                                     )}
//                                                     {formGroup.type === "file" && (
//                                                         <div className="form-group form-control">
//                                                             <label htmlFor={formGroup.name} className="me-3">
//                                                                 {formGroup.label}
//                                                             </label>
//                                                             <input
//                                                                 type="file"
//                                                                 className="form-control-file"
//                                                                 name={formGroup.name}
//                                                                 id={formGroup.name}
//                                                             />
//                                                         </div>
//                                                     )}
//                                                     {formGroup.type === "textarea" && (
//                                                         <textarea
//                                                             className="form-control"
//                                                             name={formGroup.name}
//                                                             id={formGroup.name}
//                                                             rows="4"
//                                                             placeholder={formGroup.placeholder}
//                                                             value={formData[formGroup.name] || ""}
//                                                             onChange={handleInputChange}
//                                                         ></textarea>
//                                                     )}
//                                                 </div>
//                                             ))}

//                                             <table className="">
//                                                 <tr>
//                                                     <td colspan="2" className="" >
//                                                         Please read the following and check the box before submitting your complaint:
//                                                         <br />
//                                                         <textarea class="form-control form-group mt-3" rows="10" cols="100%" readonly>
//                                                             I do hereby solemnly affirm:

//                                                             (a) That  the facts mentioned in this complaint are correct to the best of my knowledge and belief.

//                                                             (b) That no complaint on this subject has previously been lodged with Provincial Mohtasib (Ombudsman) by me, or on my behalf, in the Head Office or any the Regional Offices.

//                                                             (c) That no suit,appeal,petition or other judicial proceeding in connection with the subject matter of this complaint is pending in any court, tribunal or board.

//                                                             (d) I made a representation to the the senior Officers of the Agency in this connection but have failed to elicit a reply/my representation has been unjustly turned down.
//                                                         </textarea>
//                                                     </td>

//                                                 </tr>

//                                                 <tr >
//                                                     <td>
//                                                         <input type="checkbox" name="vsAffidavit" value="I do affirm the Affidavit" required /> I do affirm the Affidavit.
//                                                     </td>
//                                                     <td>
//                                                         &nbsp;
//                                                     </td>
//                                                 </tr>
//                                             </table>

//                                             <div className="col-md-12 mt-3">
//                                                 <button className="btn btn-success">Send Complaint</button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </BaseLayout>
//     );
// };

// export default MakeAComplaintOnline;
