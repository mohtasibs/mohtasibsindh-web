import BaseLayout from "@/components/BaseLayout";
import { BiNews } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { useState } from "react";

const seminarData = [
    {
        title: "Seminar 1",
        file: "/seminar-1.jpg",
    },
    {
        title: "Seminar 2",
        file: "/seminar-2.jpg",
    },
];

const KnowledgeProduct = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => setModalImage(src);
    const closeModal = () => setModalImage(null);

    return (
        <BaseLayout>
            <div className="container seminar-glass mt-5 py-5 px-3 px-md-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-black d-flex justify-content-center align-items-center">
                        Seminar <BiNews className="ms-3 news-icon" />
                    </h2>
                    <p className="text-light">Download or preview moments from our seminars</p>
                </div>

                <div className="row justify-content-center">
                    {seminarData.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="seminar-card p-3 text-center">
                                <img
                                    src={item.file}
                                    alt={item.title}
                                    className="img-fluid seminar-thumbnail mb-3"
                                    onClick={() => openModal(item.file)}
                                />
                                <h5 className="mb-3 text-dark fw-semibold">{item.title}</h5>
                                <a
                                    href={item.file}
                                    download
                                    className="btn btn-success d-flex align-items-center justify-content-center"
                                >
                                    <HiDownload className="me-2" /> Download Image
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {modalImage && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content">
                            <img src={modalImage} alt="Preview" className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
        </BaseLayout>
    );
};

export default KnowledgeProduct;
