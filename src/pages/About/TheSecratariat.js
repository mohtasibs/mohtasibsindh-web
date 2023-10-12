import BaseLayout from "@/components/BaseLayout";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { GiPostOffice } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";

import Link from "next/link"

const TheSecretariat = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">
                        <h2 className="values-system-heading d-flex">The Secretariat <AiTwotoneSecurityScan className=" ms-3" /></h2>
                        <p className="values-system-para mt-2">
                            The Headquarter of Secretariat Provincial Ombudsman (Mohtasib) Sindh is located at Karachi.
                        </p>

                    </div>
                </div>

            </div>
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">

                        <div className="row">
                            <div className=" ">

                                <h2 className="values-system-heading d-flex">HEADQUARTER  <GiPostOffice className=" ms-3" /></h2>
                                <p className="values-system-para mt-2">
                                    Secretariat Provincial Ombudsman , Sindh
                                </p>
                                <p className="values-system-para mt-2">
                                    Shahrah-e-Kamal Ataturk Ombudsman , Sindh Karachi
                                </p>
                                <p className="values-system-para mt-2">
                                    Contact : 021-99211025
                                </p>
                                <p className="values-system-para  mt-3">
                                    <a className="underline text-success"
                                        href="https://www.mohtasibsindh.gov.pk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Website :   http://www.mohtasibsindh.gov.pk</a>
                                </p>
                                <p className="values-system-para mt-2  text-success">
                                    <a href="mailto:mohtasibhd@yahoo.com" className="underline">                                    Email : mohtasibhd@yahoo.com</a>
                                </p>
                                <div className="mt-3">
                                    <Link className="learn-more mt-2 underline text-success values-system-para" href="/Headquarter">
                                        Click here for names and contacts of officers in the Provincial Ombudsman Secretariat/Headquarter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">
                        <h2 className="values-system-heading d-flex">Regional Offices <HiOfficeBuilding className="ms-3 " /></h2>
                        <div className="row">
                            <p className="values-system-para mt-2">
                                To facilitate the citizens, Provincial Ombudsman Sindh (Mohtasib) has set up 19 regional offices
                            </p>

                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <Link className="learn-more mt-3 underline text-success values-system-para" href="/About/RegionalOffices">
                        Click here for names and contacts of officers in the Provincial Ombudsman Regional Offices
                    </Link>
                </div>
            </div>
        </div>


    </BaseLayout>;
};

export default TheSecretariat;
