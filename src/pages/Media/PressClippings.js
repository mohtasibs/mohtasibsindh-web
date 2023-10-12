import BaseLayout from "@/components/BaseLayout";
import { BiNews } from "react-icons/bi";


const PressClippings = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex ">Press Coverage <BiNews className=" ms-3" /></h2>
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/press-1.jpg"
                                    download  // Add the download attribute
                                >
                                    Press Coverage Of Kawish
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/press-2.jpg"
                                    download  // Add the download attribute
                                >
                                    Press Coverage Of Express
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/press-3.jpg"
                                    download  // Add the download attribute
                                >
                                    Press Coverage Of Jang
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/press-4.jpg"
                                    download  // Add the download attribute
                                >
                                    Press Coverage Of Dawn
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline text-success"
                                    href="/press-5.jpg"
                                    download  // Add the download attribute
                                >
                                    Press Coverage Of Tribune
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default PressClippings;
