import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <section className="deneb_cta">
        <div className="container">
          <div className="cta_wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="cta_content">
                  <h3>Have Any Complaint?</h3>
                  <p align="justify">
                    We work towards resolving complaints and delivering relief
                    to the public by conducting objective investigations into
                    the issues raised.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="button_box">
                  <Link
                    href="https://complaints.mohtasibsindh.gov.pk/" target="_blank" rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    Complain Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="deneb_footer">
        <div className="widget_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="widget widegt_about">
                  <div className="widget_title">
                    <img
                      src="assets/images/logo_1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <p align="justify">
                    We address complaints and offer relief to the public by
                    conducting unbiased investigations into grievances
                    concerning maladministration within any government agency in
                    Sindh.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-1">
                <div className="widget widget_link">
                  <div className="widget_title">
                    <h4>Links</h4>
                  </div>
                  <ul>
                    <li>
                      {" "}
                      <Link
                        href="/newsletters/JunkItems.pdf"
                        download
                        className=""
                      >
                        Procurement
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/ChildrenComplaints" className="">
                        Children Complaint Office
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/Affiliations" className="">
                        Affiliations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_contact mt-4">
                  <div className="widget_title">
                    <h4>Get Our App</h4>
                  </div>
                  <div className="contact_info">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.sindh.app.pk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center text-decoration-none text-dark"
                    >
                      <span
                        className="material-icons"
                        style={{
                          fontSize: "36px",
                          marginRight: "10px",
                          color: "white",
                        }}
                      >
                        shop
                      </span>
                      <span style={{ color: "white" }}>Google Play Store</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget widget_contact">
                  <div className="widget_title ms-3">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="contact_info">
                    <div className="single_info">
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="info">
                        <p>
                          <a href="tel:+919246147999">+92-21-99211026</a>
                        </p>
                        <p>
                          <a href="tel:+92-21-99211031,25,28">
                            +92-21-99211031,25,28
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="single_info">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info">
                        <p>
                          <a href="mailto:mohtasibhd@yahoo.com">
                            info@mohtasibsindh.gov.pk
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="single_info">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="info">
                        <p>
                          <span>Karachi</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_area bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright_text">
                  <p className="text-white">
                    Copyright &copy; 2009 Secretariat Provincial Ombudsman
                    (Mohtasib), Sindh – All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
