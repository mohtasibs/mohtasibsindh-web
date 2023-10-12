import BaseLayout from "@/components/BaseLayout";
import { AiOutlineProject } from "react-icons/ai";
const Tenders = () => {
    return <BaseLayout>


        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex">Procurement <AiOutlineProject className=" ms-3" /></h2>
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/Full page photo.pdf"
                                    download  // Add the download attribute
                                >
                                    PROCUREMENT OF HARDWARE ASSETS, MACHINERY & EQUIPMENT’S AND FURNITURE & FIXTURE DURING THE FINANCIAL YEAR 2021-2022
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/TN.pdf"
                                    download

                                >
                                    TENDER NOTICE & BIDDING DOCUMENTS OF FURNITURE & FIXTURE ITEMS (2021-2022)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/TD  Complete.pdf"
                                    download
                                >
                                    TENDER NOTICE & BIDDING DOCUMENTS OF HARDWARE ASSISTS AND MACHINERY & EQUIPMENTS (2021-2022)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/8 x 10 in.pdf"
                                    download
                                >
                                    BID EVALUATION REPORT FOR PROCUREMENT OF FURNITURE & FIXTURE ITEMS (2021-2022)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/Machinery & Equip.pdf"
                                    download
                                >
                                    BID EVALUATION REPORT FOR PROCUREMENT OF MACHINERY & EQUIPMENTS ITEMS
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/Hardware Assets.pdf"
                                    download
                                >
                                    BID EVALUATION REPORT FOR PROCUREMENT OF HARDWARE ASSETS ITEMS
                                </a>
                            </li>

                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/f&f.pdf"
                                    download
                                >
                                    AWARD OF CONTRACT OF PROCUREMENT OF FURNITURE & FIXTURE ITEMS
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/Machinery & Equipments.pdf"
                                    download
                                >
                                    AWARD OF CONTRACT OF PROCUREMENT OF MACHINERY & EQUIPMENTS ITEMS
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/pdfs/Hardware Assets (1).pdf"
                                    download
                                >
                                    AWARD OF CONTRACT OF PROCUREMENT OF HARDWARE ASSETS ITEMS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>;
    </BaseLayout>;
};

export default Tenders;
