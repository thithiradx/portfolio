"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";

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
              <div className="skill-category-icon">{category.icon}</div>
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
