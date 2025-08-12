import BaseLayout from "@/components/BaseLayout";
import { HiDocumentReport } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const reports = [
  { year: 2017, file: "Annualreport1.pdf" },
  { year: 2018, file: "Annualreport2.pdf" },
  { year: 2019, file: "Annualreport3.pdf" },
  { year: 2020, file: "Annualreport4.pdf" },
  { year: 2021, file: "Annualreport5.pdf" },
  { year: 2022, file: "Annualreport6.pdf" },
  { year: 2023, file: "Annualreport7.pdf" },
  { year: 2024, file: "Annualreport8.pdf" },
];

const KnowledgeProduct = () => {
  return (
    <BaseLayout>
      <div className="knowledge-container">
        <div className="title-section">
          <h2>Ombudsman Sindh - Annual Reports</h2>
          <p className="subtitle">Explore and Download Annual Reports from 2017 to 2024</p>
        </div>

        <div className="reports-grid">
          {reports.map((report) => (
            <div className="report-card" key={report.year}>
              <div className="report-icon">
                <HiDocumentReport />
              </div>
              <div className="report-content">
                <h5>Annual Report {report.year}</h5>
                <a
                  href={`/knowledge/${report.file}`}
                  download
                  className="download-button"
                  title={`Download Annual Report ${report.year}`}
                >
                  <FaDownload className="me-1" />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default KnowledgeProduct;
