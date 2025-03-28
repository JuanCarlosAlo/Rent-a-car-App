"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession,  } from "next-auth/react";

import styles from "./Header.module.scss";
import { NAV_ITEMS, NOT_USER_NAV_ITEMS, USER_NAV_ITEMS } from "../../lib/sections/navItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); 
  const {status } = useSession();


  useEffect(() => {
    const isHome = pathname === "/";

    const handleScroll = () => {
      setIsScrolled(isHome ? window.scrollY > 0 : true);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); 
    }

    return () => {
      if (isHome) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pathname]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>Rent A Car</div>
      <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖️" : "☰"}
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                prefetch
              >
                {item.title}
              </Link>
            </li>
          ))}
          {status !== 'authenticated' ? (
            NOT_USER_NAV_ITEMS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                prefetch
              >
                {item.title}
              </Link>
            </li>
          ))

          ):(
            USER_NAV_ITEMS.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  prefetch
                >
                  {item.title}
                </Link>
              </li>
            ))
          )}
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
