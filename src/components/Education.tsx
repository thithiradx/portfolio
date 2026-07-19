"use client";
import { portfolioData } from "@/data/portfolio-data";

const educationIcons: Record<string, React.ReactNode> = {
  degree: (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  school: (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
};

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
              <div className="education-icon">
                {educationIcons[edu.icon]}
              </div>
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