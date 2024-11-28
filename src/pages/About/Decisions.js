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
        "7 Nov 2024": [
            { title: "3382.ROK-65.(Khp).2022", file: "/pdfs/382.ROK-65.(Khp).2022.pdf" },
            { title: "3116.2022.NFZ-25", file: "/pdfs/3116.2022.NFZ-25.pdf" },
            { title: "2893.23.NFZ-31", file: "/pdfs/2893.23.NFZ-31.pdf" },
            { title: "2161.ROK-35.(Khp).2022", file: "/pdfs/2161.ROK-35.(Khp).2022.pdf" },
        ],
        "8 Nov 2024": [
            { title: "2378.2022.KC", file: "/pdfs/2378.2022.KC.pdf" },
            { title: "249.2024.KC", file: "/pdfs/249.2024.KC (2).pdf" },
            { title: "9924.2023.KC", file: "/pdfs/9924.2023.KC.pdf" },
            { title: "8816.RL-370(LKA).2023", file: "/pdfs/8816.RL-370(LKA).2023.pdf" },
            { title: "5268.2022.HYD.345", file: "/pdfs/5268.2022.HYD.345.pdf" },
        ],
        "11 Nov 2024": [
            { title: "POS.849.SKK-08.2022", file: "/pdfs/POS.849.SKK-08.2022.pdf" },
            { title: "POS.9011.SKK-169.2023", file: "/pdfs/POS.9011.SKK-169.2023.pdf" },
        ],
        "12 Nov 2024": [
            { title: "POS.5348.2023.HYD.324", file: "/pdfs/POS.5348.2023.HYD.324.pdf" },
            { title: "POS.2042.2023.HYD.173", file: "/pdfs/POS.2042.2023.HYD.173.pdf" },
            { title: "POS.660.GTK-30.2024", file: "/pdfs/POS.660.GTK-30.2024.pdf" },
        ],
        "18 Nov 2024": [
            { title: "POS.RL-321(LKA)2024", file: "/pdfs/POS.RL-321(LKA)2024.pdf" },
            { title: "POS.CH.7015.2021", file: "/pdfs/POS.CH.7015.2021.pdf" },
            { title: "POS.CH.5447.2020.RM-54", file: "/pdfs/POS.CH.5447.2020.RM-54.pdf" },
            { title: "POS.9088.2023.RM-229", file: "/pdfs/POS.9088.2023.RM-229.pdf" },
            { title: "POS.7023.RL-287(LKA)2023", file: "/pdfs/POS.7023.RL-287(LKA)2023.pdf" },
            { title: "POS.4255.KE-312.2023", file: "/pdfs/POS.4255.KE-312.2023.pdf" },
            { title: "POS.3789.2024.RM-119", file: "/pdfs/POS.3789.2024.RM-119.pdf" },
            { title: "POS.1899.RL.69.(LKA)2024", file: "/pdfs/POS.1899.RL.69.(LKA)2024.pdf" },
        ],
        "21 Nov 2024": [
            { title: "POS.3789.2024.RM-119", file: "/pdfs/POS.3789.2024.RM-119.pdf" },
            { title: "POS.3763.KE-292.2024", file: "/pdfs/POS.3763.KE-292.2024.pdf" },
            { title: "POS.3220.KE-198.2023", file: "/pdfs/POS.3220.KE-198.2023.pdf" },
            { title: "POS.3197.2024.KC.F-174", file: "/pdfs/POS.3197.2024.KC.F-174.pdf" },
            { title: "POS.2234.KE.87.2021 (30 CASES)", file: "/pdfs/POS.2234.KE.87.2021 (30 CASES).pdf" },
            { title: "POS.1899.RL-69(LKA)2023", file: "/pdfs/POS.1899.RL-69(LKA)2023.pdf" },
            { title: "POS.1793.ROJ-72(JBD).2023", file: "/pdfs/POS.1793.ROJ-72(JBD).2023.pdf" },
            { title: "POS.1669.KE.111.2024", file: "/pdfs/POS.1669.KE.111.2024.pdf" },
            { title: "POS.1617.2023.NWS-19", file: "/pdfs/POS.1617.2023.NWS-19.pdf" },
            { title: "POS.38.2024.KM.KW", file: "/pdfs/POS.38.2024.KM.KW.pdf" },

            { title: "POS.RL-321(LKA)2024", file: "/pdfs/POS.RL-321(LKA)2024.pdf" },
            { title: "POS.CH-8231.KHE-468.2022.KR", file: "/pdfs/POS.CH-8231.KHE-468.2022.KR.pdf" },
            { title: "POS.CH.7015.2021", file: "/pdfs/POS.CH.7015.2021.pdf" },
            { title: "POS.CH.5447.20.RM-54", file: "/pdfs/POS.CH.5447.20.RM-54.pdf" },
            { title: "POS.9128.2023.SGR-114", file: "/pdfs/POS.9128.2023.SGR-114.pdf" },

            { title: "POS.8485.KE.510.2023", file: "/pdfs/POS.8485.KE.510.2023.pdf" },
            { title: "POS.7483.2023.KW.KM", file: "/pdfs/POS.7483.2023.KW.KM.pdf" },
            { title: "POS.7401.2022.B-82.J", file: "/pdfs/POS.7401.2022.B-82.J.pdf" },
            { title: "POS.7121.KE-397.2022", file: "/pdfs/POS.7121.KE-397.2022.pdf" },
            { title: "POS.7023.RL-287(LKA)2023", file: "/pdfs/POS.7023.RL-287(LKA)2023.pdf" },

            { title: "POS.6002.KE-335.2022", file: "/pdfs/POS.6002.KE-335.2022.pdf" },
            { title: "POS.4255.KE-312.2023", file: "/pdfs/POS.38.2024.KM.KW.pdf" },
            { title: "POS.9088.2023.RM-229", file: "/pdfs/POS.9088.2023.RM-229.pdf" },
            { title: "POS.5376.GTK-119.2023", file: "/pdfs/POS.5376.GTK-119.2023.pdf" },
            { title: "POS.3920.KE.306.2024", file: "/pdfs/POS.3920.KE.306.2024.pdf" },
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
                    <div key={date} className="decision-section">
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
                                marginBottom: "15px",
                                padding: "15px 20px",
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
                                            className="text-decoration-none text-dark fw-medium"
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

            <style jsx>{`
                .decision-section {
                    padding-top: 15px;
                }
            `}</style>
        </BaseLayout>
    );
};

export default Decisions;
