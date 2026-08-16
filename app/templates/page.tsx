"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_TEMPLATES, SiteTemplate } from "../data/site-templates";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTemplate, setSelectedTemplate] = useState<SiteTemplate | null>(null);

  const categories = [
    { id: "all", label: "All Templates", count: SITE_TEMPLATES.length },
    { id: "corporate", label: "Corporate Enterprise", count: SITE_TEMPLATES.filter(t => t.category === "corporate").length },
    { id: "ecommerce", label: "Omnichannel Commerce", count: SITE_TEMPLATES.filter(t => t.category === "ecommerce").length },
    { id: "saas", label: "SaaS & Product", count: SITE_TEMPLATES.filter(t => t.category === "saas").length },
    { id: "hospitality", label: "Hospitality & Dining", count: SITE_TEMPLATES.filter(t => t.category === "hospitality").length },
    { id: "healthcare", label: "Healthcare & Clinic", count: SITE_TEMPLATES.filter(t => t.category === "healthcare").length },
    { id: "docs", label: "Developer & Docs", count: SITE_TEMPLATES.filter(t => t.category === "docs").length },
    { id: "blog", label: "Editorial & Blog", count: SITE_TEMPLATES.filter(t => t.category === "blog").length },
  ];

  const filtered = selectedCategory === "all"
    ? SITE_TEMPLATES
    : SITE_TEMPLATES.filter(t => t.category === selectedCategory);

  return (
    <div style={{ minHeight: "100vh", background: "#090d16", color: "#f3f4f6", padding: "2rem" }}>
      {/* Navigation Header */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <Link href="/" style={{ color: "#10b981", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
              ← Tenant Websites Hub
            </Link>
            <span style={{ color: "#4b5563" }}>/</span>
            <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Templates Directory</span>
          </div>
          <h1 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
            Site Templates Library
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.9375rem" }}>
            Production-ready, ERP-synchronized website templates built with design tokens and high-conversion UX.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Link href="/themes" style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.5rem", color: "#e5e7eb", textDecoration: "none", fontSize: "0.875rem" }}>
            🎨 Theme Styler
          </Link>
          <Link href="/sites" style={{ padding: "0.5rem 1rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "0.5rem", color: "#34d399", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
            🌐 Live Sites Registry
          </Link>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: selectedCategory === cat.id ? "1px solid #10b981" : "1px solid rgba(255,255,255,0.08)",
              background: selectedCategory === cat.id ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.03)",
              color: selectedCategory === cat.id ? "#34d399" : "#9ca3af",
              fontSize: "0.875rem",
              fontWeight: selectedCategory === cat.id ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.15s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <span>{cat.label}</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.7, background: "rgba(255,255,255,0.08)", padding: "0.1rem 0.4rem", borderRadius: "0.25rem" }}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.5rem" }}>
        {filtered.map(template => (
          <div
            key={template.id}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "0.75rem",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.15s ease, border-color 0.15s ease",
            }}
          >
            {/* Header Banner */}
            <div style={{ padding: "1.25rem 1.25rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#10b981", fontWeight: 700 }}>
                  {template.category}
                </span>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
                  {template.name}
                </h3>
              </div>
              {template.badge && (
                <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", borderRadius: "0.375rem", background: "rgba(16,185,129,0.2)", color: "#34d399", fontWeight: 600 }}>
                  {template.badge}
                </span>
              )}
            </div>

            {/* Content Body */}
            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                {template.description}
              </p>

              <div style={{ marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Key Capabilities
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {template.features.map((feat, i) => (
                    <li key={i} style={{ fontSize: "0.8125rem", color: "#d1d5db", marginBottom: "0.35rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "#10b981" }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs & Themes */}
              <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                  {template.componentsCount} Components · {template.layoutsCount} Layouts
                </div>
                <div style={{ display: "flex", gap: "0.25rem" }}>
                  {template.supportedThemes.map(th => (
                    <span key={th} style={{ width: "12px", height: "12px", borderRadius: "50%", background: th === "emerald" ? "#10b981" : th === "sapphire" ? "#3b82f6" : th === "violet" ? "#8b5cf6" : th === "amber" ? "#f59e0b" : "#64748b" }} title={th} />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div style={{ padding: "1rem 1.25rem", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "0.75rem" }}>
              <button
                onClick={() => setSelectedTemplate(template)}
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  background: "#10b981",
                  border: "none",
                  borderRadius: "0.375rem",
                  color: "#090d16",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  cursor: "pointer"
                }}
              >
                Preview Template
              </button>
              <a
                href={`http://localhost:4005?template=${template.id}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "0.5rem 0.75rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.375rem",
                  color: "#f3f4f6",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                Edit in Web Studio ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Template Detail Modal */}
      {selectedTemplate && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "1rem" }}>
          <div style={{ width: "100%", maxWidth: "650px", background: "#111827", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "1rem", padding: "2rem", color: "#f3f4f6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "#10b981", textTransform: "uppercase", fontWeight: 700 }}>
                  {selectedTemplate.category} Template
                </span>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginTop: "0.25rem" }}>
                  {selectedTemplate.name}
                </h2>
              </div>
              <button onClick={() => setSelectedTemplate(null)} style={{ background: "transparent", border: "none", color: "#9ca3af", fontSize: "1.5rem", cursor: "pointer" }}>
                ✕
              </button>
            </div>

            <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              {selectedTemplate.description}
            </p>

            <div style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                Included Layouts & Integrations:
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {selectedTemplate.features.map((f, idx) => (
                  <div key={idx} style={{ fontSize: "0.8125rem", color: "#d1d5db" }}>
                    • {f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
              <button onClick={() => setSelectedTemplate(null)} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "0.375rem", color: "#f3f4f6", cursor: "pointer" }}>
                Close
              </button>
              <a
                href={`http://localhost:4005?template=${selectedTemplate.id}`}
                style={{ padding: "0.5rem 1.25rem", background: "#10b981", border: "none", borderRadius: "0.375rem", color: "#090d16", fontWeight: 700, textDecoration: "none", display: "inline-block" }}
              >
                Launch in Web Studio →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
