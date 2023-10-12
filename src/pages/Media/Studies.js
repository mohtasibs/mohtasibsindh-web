import BaseLayout from "@/components/BaseLayout";
import { Gi3DGlasses } from "react-icons/gi";
const KnowledgeProduct = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex ">Studies <Gi3DGlasses className=" ms-3" /></h2>
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/Report.pdf"
                                    download  // Add the download attribute
                                >
                                    Report Issues of Girls Education in Sindh
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/Report(IOI Study).pdf"
                                    download  // Add the download attribute
                                >
                                    Assessment of Malnutrition (Stunting) in District Tharparkar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default KnowledgeProduct;
