"use client";

import { useState, FormEvent } from "react";
import { portfolioData } from "@/data/portfolio-data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I&apos;d love to hear
            from you!
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info reveal-left">
            <h3>Let&apos;s Connect</h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach out
              through any of these channels.
            </p>

            <div className="contact-links">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="contact-link-item"
              >
                <div className="contact-link-icon">✉️</div>
                <div className="contact-link-text">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </a>

              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-link-icon">🐙</div>
                <div className="contact-link-text">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">
                    @{portfolioData.personal.github}
                  </span>
                </div>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-link-icon">💼</div>
                <div className="contact-link-text">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">
                    Thithira Dilmith
                  </span>
                </div>
              </a>
            </div>
          </div>

          <form
            className="contact-form glass-card reveal-right"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="contact-name"
                className="form-input"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="contact-email"
                className="form-input"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Your Message
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={status === "sending"}
            >
              <span className="btn-shine" />
              {status === "idle" && "Send Message ✨"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent! ✅"}
              {status === "error" && "Error. Try Again ❌"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
