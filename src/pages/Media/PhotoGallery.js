import BaseLayout from "@/components/BaseLayout";
import Image from "next/image";
import nyc1 from "/public/nyc-1.jpg"
import nyc2 from "/public/nyc-2.jpg"
import nyc3 from "/public/nyc-3.jpg"
import baku1 from "/public/baku-1.jpg"
import baku2 from "/public/baku-2.jpg"
import baku3 from "/public/baku-3.jpg"
import thai1 from "/public/thai1.jpeg"
import thai2 from "/public/thai-2.jpeg"
import thai3 from "/public/thai-3.jpeg"
import cm1 from "/public/cm-1.png"
import cm2 from "/public/cm-2.png"
import cm3 from "/public/cm-3.png"
import gov1 from "/public/gov-1.jpg"
import gov2 from "/public/gov-2.jpg"
import gov3 from "/public/gov-3.jpg"
import wel1 from "/public/wel-1.png"
import wel2 from "/public/wel-2.png"
import wel3 from "/public/wel-3.png"
const PhotoGallery = () => {
    return <BaseLayout>
        <div className="container text-center mt-5 mb-3">
            <h1 className="h1">New York</h1>
            <div className="row">
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={nyc1}
                        alt="slider1img"
                        width={450}
                        height={450}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={nyc2}
                        alt=""
                        width={450}
                        height={450}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={nyc3}
                        alt=""
                        width={450}
                        height={450}
                    />
                </div>
            </div>
            <h1 className="h1 mt-5 mb-3">Baku </h1>
            <div className="row">
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={baku1}
                        alt="slider1img"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={baku2}
                        alt=""
                        width={250}
                        height={250}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={baku3}
                        alt=""
                        width={250}
                        height={250}
                    />
                </div>
            </div>
            <h1 className="h1 mt-5 mb-3">Thailand </h1>
            <div className="row">
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={thai1}
                        alt="slider1img"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={thai2}
                        alt=""
                        width={250}
                        height={250}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={thai3}
                        alt=""
                        width={250}
                        height={250}
                    />
                </div>
            </div>
            <h1 className="h1 mt-5 mb-3">Visit Of IOI President</h1>
            <div className="row">
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={wel1}
                        alt="slider1img"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={wel2}
                        alt=""
                        width={450}
                        height={450}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={wel3}
                        alt=""
                        width={350}
                        height={350}
                    />
                </div>
            </div>
            <h1 className="h1 mt-5 mb-3">CM House </h1>
            <div className="row">
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={cm1}
                        alt="slider1img"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={cm2}
                        alt=""
                        width={350}
                        height={350}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={cm3}
                        alt=""
                        width={350}
                        height={350}
                    />
                </div>
            </div>
            <h1 className="h1 mt-5 mb-3">Governor House </h1>
            <div className="row">
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={gov1}
                        alt="slider1img"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={gov2}
                        alt=""
                        width={350}
                        height={350}
                    />
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <Image
                        className="photo-img"
                        src={gov3}
                        alt=""
                        width={350}
                        height={350}
                    />
                </div>
            </div>

        </div>


    </BaseLayout>;
};

export default PhotoGallery;
