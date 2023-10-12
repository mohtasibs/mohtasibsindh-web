import BaseLayout from "@/components/BaseLayout";
import { FaChild } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GiRocket } from "react-icons/gi";

const ChildrenComplaint = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="values-system-heading d-flex">Children’s Complaints Office of the Provincial Ombudsman Sindh <FaChild className=" ms-3" /></h2>
                        <p className="values-system-para mt-2">
                            The Children’s Complaints Office (CCO) has been established to bridge an existing gap in terms of a Children-specific grievance redressal mechanism in the administrative justice sector in Sindh
                        </p>
                        <p className="values-system-para mt-2">
                            Initially the CCO was collaborated by UNICEF but for last one decade it is being successfully run by POS

                        </p>
                        <p className="values-system-para mt-2">
                            The main objectives for setting up the CCO are:
                        </p>
                        <li className="values-system-para mt-2">
                            To establish a dedicated redress and response system for complaints related to and by Children, against maladministration by any Provincial Agency, institution or public body;
                        </li>
                        <li className="values-system-para mt-2">
                            To provide a platform for addressing Child related issues through research, advocacy and engagement with Children and other stakeholders on Children’s Rights;
                        </li>
                        <li className="values-system-para mt-2">
                            To enable the Provincial Ombudsman Sindh to advise the Provincial Government on systemic issues which impact the Rights of Children and compliance with the CRC (Convention on the Rights of the Child).
                        </li>

                    </div>
                </div>
            </div>

        </div>
    </BaseLayout>;
};

export default ChildrenComplaint;
