"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Youtube, Menu, X } from "lucide-react";
import { Drawer, Button } from "antd";
import styles from "../Nav/Nav.module.scss";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Book<span>y</span>
      </div>

      {isMobile ? (
        <>
          <Button
            type="text"
            icon={isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <Drawer
            placement="top"
            closable={false}
            onClose={() => setIsMenuOpen(false)}
            open={isMenuOpen}
            height="100vh"
            className={styles.Drawer}
            getContainer={false}
          >
            <div className={styles.drawerContent}>
              <button
                className={styles.closeBtn}
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={28} />
              </button>

              <ul className={styles.navLinksMob}>
                <li onClick={() => setIsMenuOpen(false)}>New Arrivals</li>
                <li onClick={() => setIsMenuOpen(false)}>Trending Now</li>
                <li onClick={() => setIsMenuOpen(false)} href="/About">
                  About Us
                </li>
                <li onClick={() => setIsMenuOpen(false)}>Contacts</li>
              </ul>

              <ul className={styles.navSocialMob}>
                <li>
                  <Instagram className={styles.icon} strokeWidth={3} />
                </li>
                <li>
                  <Youtube className={styles.icon} strokeWidth={3} />
                </li>
                <li>
                  <Twitter className={styles.icon} strokeWidth={3} />
                </li>
                <li>
                  <Facebook className={styles.icon} strokeWidth={3} />
                </li>
              </ul>
            </div>
          </Drawer>
        </>
      ) : (
        <>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">New Arrivals</Link>
            </li>
            <li>
              <Link href="/">Trending Now</Link>
            </li>
            <li>
              <Link href="/About">About Us</Link>
            </li>
            <li>
              <Link href="/">Contacts</Link>
            </li>
          </ul>

          <ul className={styles.navSocial}>
            <li>
              <Instagram className={styles.icon} strokeWidth={3} />
            </li>
            <li>
              <Youtube className={styles.icon} strokeWidth={3} />
            </li>
            <li>
              <Twitter className={styles.icon} strokeWidth={3} />
            </li>
            <li>
              <Facebook className={styles.icon} strokeWidth={3} />
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}
