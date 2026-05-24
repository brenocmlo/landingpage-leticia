"use client";

import { useState, useEffect } from "react";
import { clinicConfig } from "@/config/clinic";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Top Contact Bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarContent}`}>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <i className="fa-solid fa-phone"></i>
              <span>{clinicConfig.phone}</span>
            </li>
            <li className={styles.infoItem}>
              <i className="fa-solid fa-location-dot"></i>
              <span>{clinicConfig.address.split(" - ")[0]}</span>
            </li>
            <li className={styles.infoItem}>
              <i className="fa-solid fa-clock"></i>
              <span>{clinicConfig.hours.split(" | ")[0]}</span>
            </li>
          </ul>
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <a href={clinicConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`container ${styles.navbar}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoTitle}>{clinicConfig.name}</span>
          <span className={styles.logoSubtitle}>{clinicConfig.title}</span>
        </a>

        {/* Desktop Menu */}
        <nav>
          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksActive : ""}`}>
            <li>
              <a href="#" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                Início
              </a>
            </li>
            <li>
              <a href="#procedimentos" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                Procedimentos
              </a>
            </li>
            <li>
              <a href="#tecnologia" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                Tecnologia
              </a>
            </li>
            <li>
              <a href="#sobre" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                Sobre Leticia
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.navCta}>
          <a href={clinicConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className={`btn ${styles.navCtaButton}`}>
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button className={styles.menuToggle} onClick={toggleMobileMenu} aria-label="Menu principal">
          {isMobileMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>
    </header>
  );
}
