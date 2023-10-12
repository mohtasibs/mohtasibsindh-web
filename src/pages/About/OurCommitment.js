import BaseLayout from "@/components/BaseLayout";
import { GiArchiveRegister } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";

const OurServiceCharter = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="values-system-heading d-flex">Our Commitment<FaHandshake className="ms-3 " />  </h2>
                        <p className="values-system-para mt-2">
                            We are committed to redress of public grievances in an efficient, effective and transparent manner. We constantly strive to improve our level of responsiveness to the public.

                        </p>
                    </div>
                </div>
            </div>



            <div className="our-value-system ">
                <div className="">
                    <div className="col-md-12">
                        <h2 className="values-system-heading d-flex"> Timeline For  Registration Of The Complaints<GiArchiveRegister class="ms-3" />   </h2>

                        <p className="values-system-para mt-2">
                            A decision to either admit or reject a complaint shall be made within 15 days of its receipt
                        </p>
                        <p className="values-system-para mt-2">
                            A complaint that has been admitted shall be forwarded to the concerned Investigating Officer within 15 days of its admission.
                        </p>
                        <p className="values-system-para mt-2">
                            Acknowledgement or a letter of regret to the complainant shall be sent within 15 days of the decision to admit or reject the complaint.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </BaseLayout>;
};

export default OurServiceCharter;
