"use client";

import { portfolioData } from "@/data/portfolio-data";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title">My Academic Journey</h2>
          <p className="section-subtitle">
            The foundation of my knowledge and skills
          </p>
        </div>

        <div className="education-grid reveal">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="education-card glass-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="education-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
