"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="#" className="footer-logo">
              {portfolioData.personal.name}
            </a>

            <div className="footer-socials">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                🐙
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} <span>{portfolioData.personal.name}</span>.
              All rights reserved. Built with 💜 using Next.js
            </p>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
