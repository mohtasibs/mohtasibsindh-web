import BaseLayout from "@/components/BaseLayout";
import { GiSwordsPower } from "react-icons/gi";

const OurCharter = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="values-system-heading d-flex">Our Charter <GiSwordsPower className=" ms-3" /></h2>
                        <p className="values-system-para mt-2">
                            The Office of Provincial Ombudsman (Mohtasib) Sindh established through Sindh Act No. 1 of 1991 (Establishment of the Office of Ombudsman for the Province of Sindh Act, 1991), which empowers Provincial Ombudsman (Mohtasib) Sindh to diagnose, investigate, redress and rectify any injustice done to a person through mal-administration of an Agency of the Government of Sindh.
                        </p>

                        <p className="values-system-para mt-3">
                            <a className="underline text-success"
                                href="/knowledge/Act1.pdf"
                                download  // Add the download attribute
                            >
                                Ombudsman Sindh Act, 1991
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default OurCharter;
