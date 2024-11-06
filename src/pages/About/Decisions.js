import React, { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";

const Decisions = () => {
    // Data for 5 Nov 2024
    const previousData = [
        { title: "140.2023.RM-02.N-05", file: "/pdfs/140.2023.RM-02.N-05.pdf" },
        { title: "3466.2024.N-20", file: "/pdfs/3466.2024.N-20.pdf" },
        { title: "3169.2024.R", file: "/pdfs/3169.2024.R.pdf" },
        { title: "1726.2024.KC.N.2021", file: "/pdfs/1726.2024.KC.N.2021.pdf" },
        { title: "1156.KHE.48.2022", file: "/pdfs/1156.KHE.48.2022.pdf" },
        { title: "462.KE.36.2023", file: "/pdfs/462.KE.36.2023.pdf" },
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDecisions = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <BaseLayout>
            <div className="container mt-5 pb-5"> {/* Added padding-bottom for spacing */}
                {/* Page Heading */}
                <h1 className="text-center text-primary fw-bold mb-4" style={{ fontSize: "2rem" }}>
                    Decisions
                </h1>

                {/* Date Section */}
                <div className="d-flex align-items-center text-secondary mb-3" style={{ fontSize: "1.25rem" }}>
                    <MdDateRange className="me-2" />
                    <span>5 Nov 2024</span>
                </div>

                {/* Collapsible Button */}
                <div 
                    className="p-3 bg-light rounded shadow-sm text-primary fw-bold d-flex align-items-center"
                    onClick={toggleDecisions}
                    style={{
                        cursor: "pointer",
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #dee2e6",
                        fontSize: "1.1rem",
                    }}
                >
                    <MdDateRange className="me-2" />
                    <span>Click to View Decisions</span>
                </div>

                {/* Decisions List */}
                {isExpanded && (
                    <ul className="list-unstyled mt-3 ms-4">
                        {previousData.map((item, index) => (
                            <li key={index} className="d-flex align-items-center mt-2">
                                <AiOutlineFilePdf className="me-2 text-danger" />
                                <a 
                                    href={item.file} 
                                    download 
                                    className="text-decoration-none text-dark fw-medium"
                                    style={{
                                        textDecoration: "none",
                                        fontSize: "1rem",
                                        color: "#dc3545",
                                    }}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </BaseLayout>
    );
};

export default Decisions;
