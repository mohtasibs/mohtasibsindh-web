import BaseLayout from "@/components/BaseLayout";
import { HiDocumentReport } from "react-icons/hi";
const KnowledgeProduct = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex">Annual Reports  <HiDocumentReport className=" ms-3" /></h2>
                        <ul className="values-list">
                            {/* <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/knowledge/Act1.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh Act, 1991
                                </a>
                            </li> */}
                            {/* <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/knowledge/Annualreport1.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh Act, 1991
                                </a>
                            </li> */}
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/Annualreport1.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh, Annual Report 2017
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/Annualreport2.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh, Annual Report 2018
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/Annualreport3.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh, Annual Report 2019
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/Annualreport4.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh, Annual Report 2020
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/Annualreport5.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh, Annual Report 2021
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/knowledge/AnnualReport6.pdf"
                                    download  // Add the download attribute
                                >
                                    Ombudsman Sindh, Annual Report 2022
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
