import BaseLayout from "@/components/BaseLayout";
import { BiNews } from "react-icons/bi";

const newsletters = [
  { volume: "I", file: "newsletterV1.pdf" },
  { volume: "II", file: "v2.pdf" },
  { volume: "III", file: "v3.pdf" },
  { volume: "IV", file: "v4.pdf" },
  { volume: "V", file: "v5.pdf" },
  { volume: "VI", file: "v6.pdf" },
  { volume: "VII", file: "v7.pdf" },
  { volume: "VIII", file: "v8.pdf" },
  { volume: "IX", file: "v9.pdf" },
  { volume: "X", file: "v10.pdf" },
  { volume: "XI", file: "v11.pdf" },
  { volume: "XII", file: "v12.pdf" },
  { volume: "XIII", file: "v13.pdf" },
  { volume: "XIV", file: "v14.pdf" },
  { volume: "XV", file: "v15.pdf" },
  { volume: "XVI", file: "v16.pdf" },
];

const NewsLetter = () => {
  return (
    <BaseLayout>
      <section className="newsletter-wrapper">
        <div className="newsletter-container">
          <div className="newsletter-header">
            <BiNews className="newsletter-icon" />
            <div>
              <h1 className="newsletter-title">Newsletter</h1>
              <p className="newsletter-subtitle">
                Browse and download newsletters issued by the Provincial Ombudsman Sindh.
              </p>
            </div>
          </div>

          <ul className="newsletter-list">
            {newsletters.map((item, index) => (
              <li key={index} className="newsletter-item">
                <a
                  href={`/newsletters/${item.file}`}
                  download
                  className="newsletter-link"
                >
                  📄 Newsletter (Vol-{item.volume})
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </BaseLayout>
  );
};

export default NewsLetter;
