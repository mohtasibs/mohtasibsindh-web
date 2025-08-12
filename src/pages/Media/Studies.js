import BaseLayout from "@/components/BaseLayout";
import { Gi3DGlasses } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";

const knowledgeItems = [
    {
        title: "Report: Issues of Girls’ Education in Sindh",
        file: "/knowledge/Report.pdf",
    },
    {
        title: "Assessment of Malnutrition (Stunting) in District Tharparkar",
        file: "/knowledge/Report(IOI Study).pdf",
    },
];

const KnowledgeProduct = () => {
    return (
        <BaseLayout>
            <div className="container knowledge-glass mt-5 py-5 px-3 px-md-5">
                <div className="text-center mb-4">
                    <h2 className="display-5 fw-bold text-black d-flex justify-content-center align-items-center">
                        Studies <Gi3DGlasses className="ms-3 icon-3d" />
                    </h2>
                    <p className="text-light">Explore our latest knowledge products and assessments</p>
                </div>
                <div className="row justify-content-center">
                    {knowledgeItems.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-5 mb-4">
                            <div className="download-card p-4">
                                <h5 className="mb-3 text-dark fw-semibold">{item.title}</h5>
                                <a
                                    href={item.file}
                                    download
                                    className="btn btn-success d-flex align-items-center justify-content-center"
                                >
                                    <HiDownload className="me-2" /> Download PDF
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
