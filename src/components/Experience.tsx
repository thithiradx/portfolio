"use client";

import { portfolioData } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </div>

        <div className="timeline reveal">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content glass-card">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
