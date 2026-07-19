"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const langColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${portfolioData.personal.github}/repos?sort=updated&per_page=10`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter out forks and repositories that are already featured
          const featuredNames = portfolioData.projects.map(p => p.title.toLowerCase().replace(/\s+/g, '-'));
          const filtered = data.filter(
            (repo: any) => 
              !repo.fork && 
              !featuredNames.some(name => repo.name.toLowerCase().includes(name) || name.includes(repo.name.toLowerCase()))
          );
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">My Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Real projects built using modern tech stacks, fully verified from local files.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="projects-grid" style={{ marginBottom: "64px" }}>
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-btn primary"
                  >
                    View Code
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-btn secondary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-info" style={{ display: "flex", flexDirection: "column", height: "calc(100% - 220px)", justifyContent: "space-between" }}>
                <div>
                  <h3 className="project-title" style={{ marginTop: "10px", fontSize: "1.3rem" }}>{project.title}</h3>
                  <p className="project-description" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "12px 0" }}>
                    {project.description}
                  </p>
                  
                  {project.features && (
                    <ul style={{ fontSize: "0.85rem", color: "var(--text-muted)", listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ marginBottom: "4px" }}>{feat}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="project-tags" style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag" style={{ fontSize: "0.72rem" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live GitHub Repos Section */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)" }}>
            Loading other repositories...
          </div>
        ) : repos.length > 0 ? (
          <div className="github-repos reveal">
            <h3 style={{ fontSize: "1.4rem", textAlign: "center", marginBottom: "32px", fontFamily: "var(--font-heading)" }}>
              📦 More Projects on GitHub
            </h3>
            <div className="repos-grid">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-card glass-card"
                  style={{ display: "block" }}
                >
                  <div className="repo-card-header">
                    <span className="repo-icon">📂</span>
                    <span className="repo-name">{repo.name}</span>
                  </div>
                  <p className="repo-description">
                    {repo.description || "A clean repository containing code and configuration files."}
                  </p>
                  <div className="repo-meta">
                    {repo.language && (
                      <span className="repo-meta-item">
                        <span
                          className="repo-lang-dot"
                          style={{
                            backgroundColor: langColors[repo.language] || "#888",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="repo-meta-item">⭐ {repo.stargazers_count}</span>
                    <span className="repo-meta-item">🍴 {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
