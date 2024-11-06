import React, { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";

const Decisions = () => {
    // Data for different dates
    const decisionsData = {
        "5 Nov 2024": [
            { title: "140.2023.RM-02.N-05", file: "/pdfs/140.2023.RM-02.N-05.pdf" },
            { title: "3466.2024.N-20", file: "/pdfs/3466.2024.N-20.pdf" },
            { title: "3169.2024.R", file: "/pdfs/3169.2024.R.pdf" },
            { title: "1726.2024.KC.N.2021", file: "/pdfs/1726.2024.KC.N.2021.pdf" },
            { title: "1156.KHE.48.2022", file: "/pdfs/1156.KHE.48.2022.pdf" },
            { title: "462.KE.36.2023", file: "/pdfs/462.KE.36.2023.pdf" },
            { title: "6519.KE.362.2022", file: "/pdfs/6519.KE.362.2022.pdf" },
            { title: "6884.2023.DG-I", file: "/pdfs/6884.2023.DG-I.pdf" },
            { title: "9484.KE.577.2023", file: "/pdfs/9484.KE.577.2023.pdf" },
            { title: "9999.KE.599.2023", file: "/pdfs/9999.KE.599.2023.pdf" },
            { title: "4652.2021.DG-I", file: "/pdfs/4652.2021.DG-I(2).pdf" },
        ],
        "6 Nov 2024": [
            { title: "7040.2021.HYD.2022.27", file: "/pdfs/7040.2021.HYD.2022.27.pdf" },
            { title: "ROM.93.2024.RM-83", file: "/pdfs/ROM.93.2024.RM-83.pdf" },
            { title: "ROM.120.2024.RM-107", file: "/pdfs/ROM.120.2024.RM-107.pdf" },
            { title: "621.2024.KR-15", file: "/pdfs/621.2024.KR-15.pdf" },
            { title: "2059.2024.RM-66", file: "/pdfs/2059.2024.RM-66.pdf" },
        ],
    };

    const [expandedDate, setExpandedDate] = useState(null);

    const toggleDecisions = (date) => {
        setExpandedDate(expandedDate === date ? null : date);
    };

    return (
        <BaseLayout>
            <div className="container mt-5 pb-5">
                <h1 className="text-center text-primary fw-bold mb-4" style={{ fontSize: "2rem" }}>
                    Decisions
                </h1>

                {Object.keys(decisionsData).map((date) => (
                    <div key={date} className="mb-4">
                        {/* Date Section */}
                        <div className="d-flex align-items-center text-secondary mb-2" style={{ fontSize: "1.25rem" }}>
                            <MdDateRange className="me-2" />
                            <span>{date}</span>
                        </div>

                        {/* Collapsible Button */}
                        <div
                            className="p-3 bg-light rounded shadow-sm text-primary fw-bold d-flex align-items-center justify-content-between"
                            onClick={() => toggleDecisions(date)}
                            style={{
                                cursor: "pointer",
                                backgroundColor: "#f8f9fa",
                                border: "1px solid #dee2e6",
                                fontSize: "1.1rem",
                            }}
                        >
                            <div className="d-flex align-items-center">
                                <MdDateRange className="me-2" />
                                <span>{expandedDate === date ? "Hide Decisions" : "Click to View Decisions"}</span>
                            </div>
                        </div>

                        {/* Decisions List */}
                        {expandedDate === date && (
                            <ul className="list-unstyled mt-3 ms-4">
                                {decisionsData[date].map((item, index) => (
                                    <li key={index} className="d-flex align-items-center mt-2">
                                        <AiOutlineFilePdf className="me-2 text-danger" />
                                        <a
                                            href={item.file}
                                            download
                                            className="text-decoration-none fw-medium"
                                            style={{
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
                ))}
            </div>
        </BaseLayout>
    );
};

export default Decisions;
