import BaseLayout from "@/components/BaseLayout";
import { GoDesktopDownload } from "react-icons/go";
const DownloadForm = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex">Download Affidavit <GoDesktopDownload className=" ms-3" /></h2>
                        <p className="values-system-para">Affidavit on form A
                        </p>

                        <div className="col-md-12 ">
                            <ul className="values-list">
                                <li className="values-system-para mt-3">
                                    <a className="underline text-success"
                                        href="/Form A (English Version).docx"
                                        download  // Add the download attribute
                                    >
                                        Form A (English Version)
                                    </a>
                                </li>
                                <li className="values-system-para mt-3">
                                    <a className="underline text-success"
                                        href="/Form A (Urdu Version).docx"
                                        download  // Add the download attribute
                                    >
                                        Form A (Urdu Version)
                                    </a>
                                </li>
                                <li className="values-system-para mt-3">
                                    <a className="underline text-success"
                                        href="/Form A (Sindhi Version).docx"
                                        download  // Add the download attribute
                                    >
                                        Form A (Sindhi Version)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/forms
                                    /Form A (Eng).pdf"
                                    download  // Add the download attribute
                                >
                                    Form A (English Version)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/forms
                                    /Form A (Urdu).pdf"
                                    download  // Add the download attribute
                                >
                                    Form A (Urdu Version)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/forms
                                    /Form A (Sindhi).pdf"
                                    download  // Add the download attribute
                                >
                                    Form A (Sindhi Version)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

        </div>
    </BaseLayout>;
};

export default DownloadForm;
