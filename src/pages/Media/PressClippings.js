import BaseLayout from "@/components/BaseLayout";
import { BiNews, BiDownload, BiLinkExternal } from "react-icons/bi";

const pressItems = [
  { label: "Press Coverage Of Kawish", href: "/press-1.jpg", isExternal: false },
  { label: "Press Coverage Of Express", href: "/press-2.jpg", isExternal: false },
  { label: "Press Coverage Of Jang", href: "/press-3.jpg", isExternal: false },
  { label: "Press Coverage Of Dawn", href: "/press-4.jpg", isExternal: false },
  { label: "Press Coverage Of Tribune", href: "/press-5.jpg", isExternal: false },
  { label: "Press Coverage Of Dunia", href: "/press-6.jpg", isExternal: false },
  { label: "Press Coverage Of Ibrat", href: "/press-7.jpg", isExternal: false },
  { label: "Press Coverage Of Ausaf", href: "/press-8.jpg", isExternal: false },
  { label: "Press Coverage Of Daily SOBH", href: "/press-9.jpg", isExternal: false },
  { label: "Press Coverage Of Awami Awaz", href: "/press-10.jpg", isExternal: false },
  { label: "Press Coverage Of Daily Times Karachi", href: "/press-11.jpg", isExternal: false },
  { label: "Press Coverage Of Daily Pakistan Observer", href: "/press-12.jpg", isExternal: false },
  {
    label: "Tribune News Article (2024 Ombudsman Report)",
    href: "https://tribune.com.pk/story/2555232/top-govt-depts-face-heat-in-ombudsmans-report-2024",
    isExternal: true,
  },
];

const PressClippings = () => {
  return (
    <BaseLayout>
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 d-flex justify-content-center align-items-center gap-2">
            <BiNews size={32} className="text-primary" />
            Press Coverage
          </h2>
          <p className="text-muted">Browse our recent media coverage and press releases.</p>
        </div>

        <div className="row justify-content-center">
          {pressItems.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-dark">{item.label}</h5>
                  <a
                    href={item.href}
                    className="btn btn-outline-success mt-3 d-flex align-items-center justify-content-center gap-2"
                    {...(item.isExternal
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { download: true })}
                  >
                    {item.isExternal ? (
                      <>
                        View Article <BiLinkExternal />
                      </>
                    ) : (
                      <>
                        Download <BiDownload />
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default PressClippings;
