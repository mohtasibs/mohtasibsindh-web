import React, { useState, useContext } from "react";
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
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { GiSwordsPower } from "react-icons/gi";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Our Commitment",
    href: "/OurServiceCharter",
    icon: GiSwordsPower,
  },
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
  {
    name: "About",
    icon: BsSkipStartCircle,
    dropdown: [
      { name: "Our Value System", href: "/OurValueSystem" },
      { name: "What's New", href: "/WhatsNew" },
      { name: "Vacancies", href: "/Vacancies" },
      { name: "Decisions", href: "/Decisions" }, // Added "Decisions" under "About"
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

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
            <p className="sidebar__logo-name">Provincial Ombudsman</p>
            <span>(Mohtasib) Sindh</span>
          </div>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon, dropdown }) => {
            return dropdown ? (
              <li className="sidebar__item" key={name}>
                <div
                  className="sidebar__link d-flex align-items-center"
                  onClick={toggleAboutDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                  <MdKeyboardArrowDown
                    className={`ms-auto ${aboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>
                {aboutDropdownOpen && (
                  <ul className="sidebar__dropdown ms-4">
                    {dropdown.map((item) => (
                      <li key={item.name} className="sidebar__dropdown-item">
                        <Link
                          className={`sidebar__link ${router.pathname === item.href ? "sidebar__link--active" : ""}`}
                          href={item.href}
                        >
                          <span className="sidebar__name">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""}`}
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
