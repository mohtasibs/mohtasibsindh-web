import BaseLayout from "@/components/BaseLayout";
import { BsLink45Deg } from "react-icons/bs";
import { SiOpenapiinitiative } from "react-icons/si";

const Links = () => {
    return (
        <BaseLayout>
            <div className="links-container">
                <section className="link-section">
                    <h2 className="section-heading">
                        Ombudsmen of Pakistan Links
                        <BsLink45Deg className="icon" />
                    </h2>
                    <ul className="link-list">
                        <li><a href="https://www.mohtasibsindh.gov.pk/" target="_blank" rel="noopener noreferrer">Provincial Ombudsman (Mohtasib) Sindh</a></li>
                        <li><a href="https://www.bankingmohtasib.gov.pk/Website/Index.aspx" target="_blank" rel="noopener noreferrer">Pakistan Banking Ombudsman</a></li>
                        <li><a href="https://victimservicedirectory.org/directory/details/378" target="_blank" rel="noopener noreferrer">Ombudsperson Sindh for Protection Against Sexual Harassment</a></li>
                        <li><a href="https://fio.gov.pk/" target="_blank" rel="noopener noreferrer">Federal Insurance Ombudsman Pakistan</a></li>
                        <li><a href="https://ombudsmanpunjab.gov.pk/" target="_blank" rel="noopener noreferrer">Ombudsman of Punjab</a></li>
                        <li><a href="https://www.ombudsmankp.gov.pk/" target="_blank" rel="noopener noreferrer">Ombudsman Khyber Pakhtunkhwa</a></li>
                        <li><a href="http://www.ombudsmanbalochistan.gov.pk/index.php/en/" target="_blank" rel="noopener noreferrer">Ombudsman Balochistan</a></li>
                        <li><a href="https://mohtasib.ajk.gov.pk/" target="_blank" rel="noopener noreferrer">Ombudsman AJK</a></li>
                        <li><a href="https://mohtasib.gov.pk/" target="_blank" rel="noopener noreferrer">Wafaqi Mohtasib (Ombudsman) Secretariat</a></li>
                        <li><a href="https://www.fospah.gov.pk/" target="_blank" rel="noopener noreferrer">Federal Ombudsman for Harassment (FOSPAH)</a></li>
                        <li><a href="https://fto.gov.pk/#openModal" target="_blank" rel="noopener noreferrer">Federal Tax Ombudsman</a></li>
                    </ul>
                </section>

                <section className="link-section">
                    <h2 className="section-heading">
                        International, Regional & National Ombudsmen Institutes
                        <SiOpenapiinitiative className="icon" />
                    </h2>

                    <ul className="link-list">
                        <li><a href="https://www.theioi.org/" target="_blank" rel="noopener noreferrer">IOI | International Ombudsman Institute</a></li>
                    </ul>
                    <p className="membership">Director IOI Asia Region</p>

                    <ul className="link-list">
                        <li><a href="http://203.99.61.173/demos/wordpress/" target="_blank" rel="noopener noreferrer">AOA | Asian Ombudsman Association</a></li>
                    </ul>
                    <p className="membership">Member</p>

                    <ul className="link-list">
                        <li><a href="http://www.oicoa.org/" target="_blank" rel="noopener noreferrer">OICOA | Organization of Islamic Countries Ombudsmen Association</a></li>
                    </ul>
                    <p className="membership">Member</p>

                    <ul className="link-list">
                        <li><a href="https://fpo.org.pk/" target="_blank" rel="noopener noreferrer">FOP | Forum of Pakistan</a></li>
                    </ul>
                    <p className="membership">Member</p>
                </section>
            </div>
        </BaseLayout>
    );
};

export default Links;
