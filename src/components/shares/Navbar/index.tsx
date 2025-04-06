// app/components/Navbar/Navbar.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import styles from "./styles.module.scss";

const navItems = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Giới thiệu",
    submenu: [{ title: "Về chúng tôi", href: "/gioi-thieu/ve-chung-toi" }],
  },
  {
    title: "Dịch vụ",
    submenu: [
      { title: "Kế toán thuế", href: "/dich-vu/ke-toan-thue" },
      {
        title: "Thiết kế & xây dựng website",
        href: "/dich-vu/thiet-ke-website",
      },
      { title: "Thiết kế logo", href: "/dich-vu/thiet-ke-logo" },
      { title: "Dịch vụ marketing", href: "/dich-vu/marketing" },
    ],
  },
  {
    title: "Tin tức",
    submenu: [{ title: "Bài viết mới", href: "/tin-tuc/bai-viet-moi" }],
  },
  {
    title: "Cộng tác viên",
    href: "/cong-tac-vien",
  },
  {
    title: "Liên hệ",
    href: "/lien-he",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (title: string) => {
    if (openSubmenus.includes(title)) {
      setOpenSubmenus(openSubmenus.filter((item) => item !== title));
    } else {
      setOpenSubmenus([...openSubmenus, title]);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Cenvi Logo"
            width={125}
            className="logo"
            height={32}
            priority
          />
        </Link>
        <nav className={styles.navDesktop}>
          {navItems.map((item) => (
            <div key={item.title} className={styles.navItem}>
              {item.href ? (
                <Link href={item.href}>{item.title}</Link>
              ) : (
                <div className={styles.hasSubmenu}>
                  {item.title} <ChevronDown size={20} color="#667085" />
                  <div className={styles.submenu}>
                    {item.submenu?.map((sub) => (
                      <Link key={sub.href} href={sub.href}>
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.buttons}>
          <Button
            variant="outline"
            className="bg-white text-[hsl(var(--text-primary))] border border-border"
          >
            Đăng nhập
          </Button>

          {/* Button 2: nền primary, chữ trắng */}
          <Button className="bg-primary text-primary-foreground">
            Bắt đầu ngay!
          </Button>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X color="#667085" size={24} style={{ cursor: "pointer" }} />
          ) : (
            <Menu color="#344054" size={24} style={{ cursor: "pointer" }} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <div key={item.title} className={styles.mobileItem}>
              {item.href ? (
                <Link href={item.href}>{item.title}</Link>
              ) : (
                <div
                  onClick={() => toggleSubmenu(item.title)}
                  className={styles.mobileDropdown}
                >
                  <div className={styles.dropdownTitle}>
                    <span>{item.title}</span>
                    {openSubmenus.includes(item.title) ? (
                      <ChevronUp size={24} color="#fff" />
                    ) : (
                      <ChevronDown size={24} color="#fff" />
                    )}
                  </div>
                  {openSubmenus.includes(item.title) && (
                    <div className={styles.mobileSubmenu}>
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={styles.mobileSubmenuItem}
                        >
                          <div className={styles.subItemTitle}>{sub.title}</div>
                          <div className={styles.subItemDesc}>
                            Đây là text bổ trợ để khách hàng hiểu khái quát dịch
                            vụ này là gì
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className={styles.listButtonForMobile}>
            <Button
              variant="outline"
              className="bg-white text-[hsl(var(--text-primary))] border border-border w-full"
            >
              Đăng nhập
            </Button>

            {/* Button 2: nền primary, chữ trắng */}
            <Button className="bg-primary text-primary-foreground w-full">
              Bắt đầu ngay!
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
