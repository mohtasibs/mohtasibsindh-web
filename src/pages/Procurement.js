import React from "react";
import BaseLayout from "@/components/BaseLayout";
import { AiOutlineFilePdf } from "react-icons/ai";

const Procurement = () => {
  const procurementData = [
    { title: "Bidding document -Complaint Management System", file: "/pdfs/Bidding document -Complaint Management System.pdf" },
    { title: "Advertisement_CMS", file: "/pdfs/Advertisement_CMS.pdf" },
    { title: "CORRIGENDUM", file: "/CORRIGENDUM.jpg" },
    { title: "Bid Doc_merged", file: "/pdfs/Bid Doc_merged.pdf" },
    { title: "Minutes of Meeting CMS", file: "/pdfs/mm-CMS.pdf" },
    { title: "Bid Evaluation Report", file: "/pdfs/evaluation-report.pdf" },
    { title: "Bid Opening", file: "/pdfs/bid-opening.pdf" },
    { title: "Relocation - Regional Office", file: "/pdfs/CamScanner 04-22-2025 12.05.pdf" },
    { title: "HARDWARE", file: "/pdfs/HARDWARE.pdf" },
    { title: "M&E", file: "/pdfs/M&E.pdf" },
    { title: "DIESEL GENERATOR", file: "/pdfs/DIESEL GENERATOR.pdf" },
    { title: "UNIFORM", file: "/pdfs/UNIFORM.pdf" },
    { title: "FURNITURE", file: "/pdfs/FURNITURE.pdf" },
    { title: "Final", file: "/pdfs/FURNITURE.pdf" },
  ];

  return (
    <BaseLayout>
      <div className="procurement-container my-5 px-3 px-md-5">
        <h2 className="section-title mb-4 ">📁 Procurement Documents</h2>

        <ul className="document-list list-unstyled">
          {procurementData.map((item, index) => (
            <li
              key={index}
              className="document-item d-flex align-items-start p-3 mb-3"
            >
              <AiOutlineFilePdf className="text-danger fs-3 me-3 mt-1" />
              <div>
                <a
                  href={item.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  {item.title}
                </a>
                <div className="doc-sub">
                  {item.file.endsWith(".pdf") ? "PDF Document" : "Image"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .procurement-container {
          background: linear-gradient(to bottom right, #f5fffa, #e8f5e9);
          border: 1px solid #cce5d4;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          max-width: 960px;
          margin: 40px auto;
          padding: 50px 30px;
          backdrop-filter: blur(2px); /* Optional glass effect */
          transition: box-shadow 0.3s ease;
        }

        .procurement-container:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          border-left: 5px solid #0d6efd;
          padding-left: 15px;
        }

        .document-item {
          background-color: #f0f4ff;
          border-left: 4px solid #0d6efd;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .document-item:hover {
          background-color: #E6EEAA;
          transform: translateX(5px);
        }

        .document-link {
          font-size: 1.2rem;
          color: #003366;
          font-weight: 500;
          text-decoration: none;
        }

        .document-link:hover {
          color: #0d6efd;
          text-decoration: underline;
        }

        .doc-sub {
          font-size: 0.875rem;
          color: #6c757d;
        }

        @media (max-width: 576px) {
          .document-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .document-link {
            font-size: 1rem;
          }

          .section-title {
            text-align: center;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </BaseLayout>
  );
};

export default Procurement;
