import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { SidebarContext } from "@/context/SidebarContext";

// Icons from react-icons library
import {
  AiOutlineHome,
  AiOutlineProject,

} from "react-icons/ai";
import { BsSkipStartCircle, BsLink45Deg } from "react-icons/bs";
import { BiPhotoAlbum } from "react-icons/bi";
import { SiOpenapiinitiative } from "react-icons/si";
import { TiContacts } from "react-icons/ti";
import { GrSystem, GrEmptyCircle, } from "react-icons/gr";
import { GiSwordsPower } from "react-icons/gi";
import { FaSitemap } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },

  // {
  //   name: "Our Value System",
  //   href: "/OurValueSystem",
  //   icon: GrSystem,
  // },

  {
    name: "Our Commitment",
    href: "/OurServiceCharter",
    icon: GiSwordsPower,
  },

  // {
  //   name: "What's New",
  //   href: "/WhatsNew",
  //   icon: RiLightbulbFlashLine,
  // },


  // {
  //   name: "Vacancies",
  //   href: "/Vacancies",
  //   icon: GrEmptyCircle,
  // },
  {
    name: "International Ombudsman Institute",
    href: "/InternationalOmbudsman",
    icon: SiOpenapiinitiative,
  },
  {
    name: "Procurement",
    href: "/Tenders",
    icon: AiOutlineProject,
  },
  {
    name: "Links",
    href: "/Links",
    icon: BsLink45Deg,
  },
  {
    name: "Photo Gallery",
    href: "/PhotoGallery",
    icon: BiPhotoAlbum,
  },

  {
    name: "Contact Us",
    href: "/contact",
    icon: TiContacts,
  },
  // {
  //   name: "Site Map",
  //   href: "/SiteMap",
  //   icon: FaSitemap,
  // },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (

    <div className="sidebar__wrapper">
      <button className="sidebar-button" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Link href="/">
            <Image
              width={80}
              height={80}
              className="sidebar__logo"
              src="/logo.png"
              alt="logo"
            />
          </Link>
          <div className="d-flex flex-column ms-3">
            <p className="sidebar__logo-name">Provincial Ombudsman </p>
            <span>(Mohtasib) Sindh</span>
          </div>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""
                    }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>

  );
};

export default Sidebar;