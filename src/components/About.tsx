"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(easeOut * target);
            setCount(start);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get To Know Me</h2>
          <p className="section-subtitle">
            A passionate developer who loves building things for the web
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper reveal-left">
            <div className="about-image-container">
              <Image
                src="/images/profile.png"
                alt="Thithira Dilmith"
                width={500}
                height={625}
                priority
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="about-image-glow" />
          </div>

          <div className="about-content reveal-right">
            <h3>
              Full Stack Developer from{" "}
              <span style={{ color: "var(--accent-purple-light)" }}>
                Sri Lanka 🇱🇰
              </span>
            </h3>
            <p className="about-text">
              I&apos;m {portfolioData.personal.fullName}, an ICT undergraduate
              at the University of Vavuniya. Most of what I know about
              full-stack development I&apos;ve picked up by building actual
              projects — a MERN e-commerce app, a task management system, a
              React Native expense tracker — rather than just reading about it.
            </p>
            <p className="about-text">
              I&apos;m comfortable moving between the frontend and backend:
              designing a clean UI in React, then wiring it up to a REST API
              and a database on the other end. Right now I&apos;m looking for
              an internship where I can keep learning from developers who&apos;ve
              shipped more than I have.
            </p>

            <div className="about-stats">
              {portfolioData.stats.map((stat, index) => (
                <div key={index} className="stat-card glass-card">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                  />
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
