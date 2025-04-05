"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    subMenus: [
      { id: 101, name: "Home 01", path: "/home-01" },
      { id: 102, name: "Home 02", path: "/home-02" },
      { id: 103, name: "Home 03", path: "/home-03" },
      { id: 104, name: "Home 04", path: "/home-04" },
      { id: 105, name: "Home 05", path: "/home-05" },
    ],
  },
  { id: 2, name: "About", path: "/about", subMenus: [] },
  {
    id: 3,
    name: "Services",
    path: "/services",
    subMenus: [
      { id: 201, name: "Service 01", path: "/service-01" },
      { id: 202, name: "Service 02", path: "/service-02" },
    ],
  },
  { id: 4, name: "Blog", path: "/blog", subMenus: [] },
  { id: 5, name: "Contact", path: "/contact", subMenus: [] },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Cenvi Logo"
            width={175}
            className="logo"
            height={30}
            priority
          />
        </Link>
        <div className={styles.menuIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <span>a</span> : <span>b</span>}
        </div>
        <ul
          className={`${styles.navMenu} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          {routes.map((route) => (
            <li
              key={route.id}
              className={styles.navItem}
              onMouseEnter={() =>
                route.subMenus.length > 0 && handleMouseEnter(route.name)
              }
              onMouseLeave={handleMouseLeave}
            >
              {route.subMenus.length > 0 ? (
                <span className={styles.navLink}>{route.name} +</span>
              ) : (
                <Link href={route.path} className={styles.navLink}>
                  {route.name}
                </Link>
              )}
              {openDropdown === route.name && route.subMenus.length > 0 && (
                <ul className={styles.dropdownMenu}>
                  {route.subMenus.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.path}>{subMenu.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
