import BaseLayout from "@/components/BaseLayout";
import Link from "next/link"
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdModeEditOutline, MdSpeakerNotes } from "react-icons/md";

const MakingAComplaint = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex">Who Can Lodge a Complaint<AiFillQuestionCircle className="ms-3 " /></h2>
                        <p className="values-system-para">Any person aggrieved by the following actions of any functionary of the Department / Commission / Corporation of the Government of Sindh or Institution established or controlled by the Government of Sindh:</p>
                        <p className="values-system-para">a decision, process, recommendation, act of omission or commission which: </p>
                        <div className="container">
                            <li className="values-system-para">is contrary to law, rules or regulations or is a departure from established practice or procedure, unless it is bona fide and for valid reasons; or</li>
                            <li className="values-system-para">is perverse, arbitrary or unreasonable, unjust, biased, oppressive, or discriminatory; or</li>
                            <li className="values-system-para">is based on irrelevant grounds; or</li>
                            <li className="values-system-para">involves the exercise of powers or the failure or refusal to do so, for corrupt or improper motives, such as, bribery jobbery, favouritism, nepotism and administrative excesses; and</li>
                            <li className="values-system-para">neglect, inattention, delay, incompetence, inefficiency and ineptitude, in the administration or discharge of duties and responsibilities.</li>
                        </div>
                    </div>
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex mt-3">Mode Of Complaint  <MdModeEditOutline className="ms-3 " /></h2>
                        <p className="values-system-para"> A complaint written in English Urdu or Sindhi may be lodged with the Head Office or any of the Regional Offices (whose addresses appear at the Home Page) on Form A or by any of the following means :-</p>
                        <div className="container">
                            <li className="values-system-para">By email (mohtasibhd@yahoo.com)</li>
                            <li className="values-system-para">Online through our website</li>
                            <li className="values-system-para">Via postal mail
                            </li>
                            <li className="values-system-para">In-person
                            </li>

                        </div>
                        <p className="values-system-para"> Prior to filing a complaint with the Provincial Ombudsman (Mohtasib) Sindh, attempt to resolve the issue by first approaching the concerned higher authorities. Attach relevant documents, including recent correspondence with the Agency and a copy of your National Identity Card, to your complaint.</p>
                    </div>
                </div>
            </div>

            <div className="text-align-center align-items-center justify-content-center d-flex">
                <Link href="/MakeAComplaint/MakeAComplaintOnline"><button className="btn btn-dark mb-5 ">Register A Complaint</button> </Link>
            </div>

        </div>

    </BaseLayout>;
};

export default MakingAComplaint;
