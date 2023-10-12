

import BaseLayout from "@/components/BaseLayout";
import { AiFillQuestionCircle } from "react-icons/ai";

const ComplainAboutUs = () => {
    return <BaseLayout><div className="container">
        <div className="our-value-system mt-5">
            <div className="row">
                <div className="col-md-12 ms-md-5 pe-5">
                    <h2 className="values-system-heading mb-2 ">
                        <b className="d-flex">Complain About Us <AiFillQuestionCircle className="ms-3" /> </b> </h2>

                    <p className="values-system-para">If you are not satisfied or unhappy about the behaviour of any officer / office , you may send your complaint directly to Hon’ble Ombudsman Sindh or through email : <a href="mailto:mohtasibhd@yahoo.com" className="underline text-success">mohtasibhd@yahoo.com</a></p>

                    <div className="mt-4">

                    </div>
                </div>
            </div>
        </div>
    </div></BaseLayout>;
};

export default ComplainAboutUs;
