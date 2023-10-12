import BaseLayout from "@/components/BaseLayout";
import Link from "next/link"
import { TiContacts } from "react-icons/ti";
import { GiPostOffice } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
const Contact = () => {
  return <BaseLayout>

    <div className="container">
      <div className="our-value-system mt-5">
        <div className="row">
          <div className="col-md-12 ms-md-5 pe-5">
            <h2 className="values-system-heading mb-2 d-flex">Contact Us  <TiContacts className=" ms-3" /></h2>

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
              Email: <a href="mailto:mohtasibhd@yahoo.com" className="underline">mohtasibhd@yahoo.com</a>
            </p>
            <p className="values-system-para mt-5">Phone: +92-21-99211031,25,28 (PABX Ext: 200)</p>
            <p className="values-system-para">Phone: +92-21-99211026 (Direct Ombudsmans Office)</p>



            <div className="mt-3">
              <Link className="learn-more mt-2 values-system-para underline text-success" href="/Headquarter">
                Click here for names and contacts of officers in the Provincial Ombudsman Secretariat/Headquarter
              </Link>
            </div>
            <div className="mt-3">
              <Link className="learn-more mt-3 values-system-para underline text-success" href="/About/RegionalOffices">
                Click here for names and contacts of officers in the Provincial Ombudsman Regional Offices
              </Link>
            </div>


          </div>
        </div>
      </div>


    </div>




  </BaseLayout>;
};

export default Contact;

