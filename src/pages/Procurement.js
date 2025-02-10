import React from "react";
import BaseLayout from "@/components/BaseLayout";
import { AiOutlineFilePdf } from "react-icons/ai";

const Procurement = () => {
    // Data for Procurement PDFs
    const procurementData = [
        { title: "Bidding document -Complaint Management System", file: "/pdfs/Bidding document -Complaint Management System.pdf" },
        { title: "Advertisement_CMS", file: "/pdfs/Advertisement_CMS.pdf" },
        { title: "CORRIGENDUM", file: "/CORRIGENDUM.jpg" },
        { title: "Bid Doc_merged", file: "/pdfs/Bid Doc_merged.pdf" },
    ];

    return (
        <BaseLayout>
            <div className="container my-5 pb-5">
                <h2 className="fw-bold mb-4" style={{ fontSize: "1.75rem" }}>
                    Procurement Documents
                </h2>

                <ul className="list-unstyled">
                    {procurementData.map((item, index) => (
                        <li key={index} className="d-flex align-items-center my-3">
                            <AiOutlineFilePdf className="me-2 text-danger" style={{ fontSize: "1.5rem" }} />
                            <a
                                href={item.file}
                                download
                                className="text-decoration-none"
                                style={{
                                    color: "#0d6efd", // Blue link color
                                    fontSize: "1.25rem",
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            <style jsx>{`
                .container {
                    max-width: 700px;
                    background-color: #f8f9fa; // Light background for card-style look
                    padding: 20px;
                    padding-bottom: 50px; // Extra bottom padding for footer spacing
                    border-radius: 5px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                .complaint-box {
                    background-color: #333; // Dark background for complaint section
                    border-radius: 5px;
                    margin-bottom: 20px; // Margin at the bottom for spacing
                }
            `}</style>
        </BaseLayout>
    );
};

export default Procurement;
