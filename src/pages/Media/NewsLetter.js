import BaseLayout from "@/components/BaseLayout";
import { BiNews } from "react-icons/bi";
const NewsLetter = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex">Newsletter <BiNews className=" ms-3" /></h2>
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/newsletterV1.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-I)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v2.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-II)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v3.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-III)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v4.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-IV)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v5.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-V)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v6.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-VI)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v7.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-VII)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v8.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-VIII)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/newsletters/v9.pdf"
                                    download  // Add the download attribute
                                >
                                    Newsletter (Vol-IX)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default NewsLetter;
