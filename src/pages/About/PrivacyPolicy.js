import BaseLayout from "@/components/BaseLayout";
import { FaRegFileAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
    return (
        <BaseLayout>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        {/* Box 1: Introduction */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading d-flex">
                                Privacy Policy <FaRegFileAlt className="ms-3" />
                            </h2>
                            <p className="values-system-para2">
                                The website https://mohtasibsindh.gov.pk (“the Site”) is owned and operated by Mohtasib Sindh (Ombudsman Sindh) (“we,” “us,” or “our”). Through this Site, we aim to provide a platform for registering public grievances and accessing information about our services.
                            </p>
                            <p className="values-system-para2">
                                At Mohtasib Sindh, we are committed to protecting your privacy and ensuring the confidentiality of the information you share with us. This Privacy Policy explains how we collect, use, and protect your data. Please read this policy carefully. By using this Site, you consent to the practices described herein.
                            </p>
                        </div>

                        {/* Box 2: Information We Collect */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Information We Collect</h2>
                            <p className="privacy-values-system-para">
                                <strong>1. Personal Data:</strong> When you use our Site to register complaints or contact us, we may collect the following personal information:
                            </p>
                            <ul className="values-system-list">
                                <li className="values-system-para2">Name</li>
                                <li className="values-system-para2">Contact details (email, phone number, address)</li>
                                <li className="values-system-para2">CNIC or identification details (if required)</li>
                                <li className="values-system-para2">Case-related information you provide in your complaint</li>
                            </ul>
                            <p className="privacy-values-system-para ">
                                You are not required to provide personal information to use this Site. However, without certain data, we may be unable to process your complaint or provide specific services.
                            </p>
                            <p className="privacy-values-system-para ">
                                <strong>2. Non-Personal Data:</strong> We may collect non-identifiable data such as:
                            </p>
                            <ul className="values-system-list">
                                <li className="values-system-para2">IP address</li>
                                <li className="values-system-para2">Browser type</li>
                                <li className="values-system-para2">Device information</li>
                                <li className="values-system-para2">Pages visited on our Site</li>
                                <li className="values-system-para2">Date and time of access</li>
                            </ul>
                            <p className="privacy-values-system-para ">
                                This information is used to improve the user experience and monitor website performance.
                            </p>
                        </div>

                        {/* Box 3: How We Use Your Information */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">How We Use Your Information</h2>
                            <ul className="values-system-list">
                                <li className="values-system-para2">Register and Process Complaints: Facilitate grievance redressal effectively.</li>
                                <li className="values-system-para2">Communicate with You: Respond to your inquiries and provide updates regarding your case.</li>
                                <li className="values-system-para2">Improve Services: Enhance the functionality and usability of our Site.</li>
                                <li className="values-system-para2">Legal Compliance: Meet regulatory and legal obligations.</li>
                            </ul>
                        </div>

                        {/* Box 4: Storage and Security of Your Information */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Storage and Security of Your Information</h2>
                            <p className="privacy-values-system-para ">
                                We take reasonable steps to ensure that your data is stored securely and protected against unauthorized access, alteration, or disclosure. Measures include:
                            </p>
                            <ul className="values-system-list">
                                <li className="values-system-para2">Encrypted communication (HTTPS)</li>
                                <li className="values-system-para2">Secure data storage</li>
                                <li className="values-system-para2">Restricted access to authorized personnel only</li>
                            </ul>
                            <p className="privacy-values-system-para ">
                                We retain your personal information as long as necessary to fulfill the purposes outlined in this Privacy Policy or comply with legal requirements.
                            </p>
                        </div>

                        {/* Box 5: Sharing Your Information */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Sharing Your Information</h2>
                            <p className="privacy-values-system-para">
                                We do not sell, rent, or share your personal information with third parties. Your data will not be disclosed to any external entities except:
                            </p>
                            <ul className="values-system-list">
                                <li className="values-system-para2">
                                    <strong>Legal Requirements:</strong> When required by law or regulatory authorities.
                                </li>
                                <li className="values-system-para2">
                                    <strong>Service Providers:</strong> For internal processes such as IT support, bound by strict confidentiality agreements.
                                </li>
                            </ul>
                        </div>

                         {/* Box 6: Cookies */}
                         <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Cookies</h2>
                            <p className="privacy-values-system-para">
                                Our Site may use cookies to enhance your browsing experience. Cookies collect information about your preferences and activities on the Site. You can disable cookies through your browser settings, but this may limit certain features.
                            </p>
                        </div>

                        {/* Box 7: Your Rights */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Your Rights</h2>
                            <ul className="values-system-list">
                                <li className="values-system-para2">Access the personal information we hold about you.</li>
                                <li className="values-system-para2">Request corrections to inaccurate information.</li>
                                <li className="values-system-para2">
                                    Request deletion of your personal data, subject to legal requirements.
                                </li>
                            </ul>
                            <p className="privacy-values-system-para">
                                To exercise these rights, contact us at <a href="mailto:info@mohtasibsindh.gov.pk">info@mohtasibsindh.gov.pk</a>.
                            </p>
                        </div>

                        {/* Box 8: No Third-Party Links */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">No Third-Party Links</h2>
                            <p className="privacy-values-system-para">
                                This Site does not link to any third-party websites. All content, services, and resources are directly provided and managed by Mohtasib Sindh.
                            </p>
                        </div>

                        {/* Box 9: Changes to This Policy */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Changes to This Policy</h2>
                            <p className="privacy-values-system-para">
                                This Privacy Policy may be updated periodically to reflect changes in our practices or applicable laws. Any modifications will be posted on this page with an updated effective date.
                            </p>
                        </div>

                        {/* Box 10: Governing Law */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Governing Law</h2>
                            <p className="privacy-values-system-para">
                                This Privacy Policy and your use of our Site are governed by the law Ombudsman Sindh Act, 1991.
                            </p>
                        </div>

                        {/* Box 11: Contact Us */}
                        <div className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 className="values-system-heading">Contact Us</h2>
                            <p className="privacy-values-system-para ">
                                If you have any questions or concerns regarding this Privacy Policy or how we handle your information, please contact us:
                            </p>
                            <ul className="values-system-list">
                                <li className="values-system-para2">Phone: +92-21-99211026</li>
                                <li className="values-system-para2">Phone: +92-21-99211031, 25, 28</li>
                                <li className="values-system-para2">Email: <a href="mailto:info@mohtasibsindh.gov.pk">info@mohtasibsindh.gov.pk</a></li>
                                <li className="values-system-para2">Location: Karachi, Pakistan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default PrivacyPolicy;
