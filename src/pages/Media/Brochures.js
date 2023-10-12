import BaseLayout from "@/components/BaseLayout";
import { BiNews } from "react-icons/bi";


const KnowledgeProduct = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex ">Brochures <BiNews className=" ms-3" /></h2>
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/brochure-1.pdf"
                                    download  // Add the download attribute
                                >
                                    FAQ’S English Version
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/brochure-2.pdf"
                                    download  // Add the download attribute
                                >
                                    FAQ’S Urdu Version
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
