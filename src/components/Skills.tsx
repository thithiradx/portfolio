"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";

const skillIcons: Record<string, React.ReactNode> = {
  mobile: (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  frontend: (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  backend: (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
};

export default function Skills() {
  const skillBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar-fill");
            bars.forEach((bar) => {
              const el = bar as HTMLElement;
              const level = el.getAttribute("data-level");
              if (level) {
                el.style.width = `${level}%`;
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillBarsRef.current) {
      observer.observe(skillBarsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid reveal" ref={skillBarsRef}>
          {portfolioData.skills.map((category, index) => (
            <div
              key={index}
              className="skill-category glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-category-icon">
                {skillIcons[category.icon]}
              </div>
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-tags reveal">
          {portfolioData.skillTags.map((tag, index) => (
            <span
              key={index}
              className="skill-tag"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}