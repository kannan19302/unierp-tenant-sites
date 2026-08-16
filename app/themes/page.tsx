"use client";

import React, { useState } from "react";
import Link from "next/link";

const THEMES = [
  { id: "emerald", name: "Emerald Pro", primary: "#10b981", accent: "#34d399", bg: "#061a14", description: "Default UniERP enterprise green palette with high clarity." },
  { id: "sapphire", name: "Sapphire Ocean", primary: "#3b82f6", accent: "#60a5fa", bg: "#081528", description: "Vibrant executive blue designed for tech SaaS and fintech." },
  { id: "violet", name: "Cyber Violet", primary: "#8b5cf6", accent: "#a78bfa", bg: "#130924", description: "Creative futuristic purple theme for digital products." },
  { id: "amber", name: "Warm Amber", primary: "#f59e0b", accent: "#fbbf24", bg: "#1e1304", description: "Warm hospitality and luxury dining design palette." },
  { id: "ruby", name: "Crimson Ruby", primary: "#ef4444", accent: "#f87171", bg: "#1e0707", description: "Dynamic retail sale and high-urgency omnichannel store." },
  { id: "obsidian", name: "Obsidian Dark", primary: "#94a3b8", accent: "#cbd5e1", bg: "#020617", description: "Ultra-clean minimalist deep monochrome dark mode." },
  { id: "slate", name: "Modern Slate", primary: "#64748b", accent: "#94a3b8", bg: "#0f172a", description: "Balanced engineering and documentation theme." },
];

export default function ThemesPage() {
  const [activeTheme, setActiveTheme] = useState<string>("emerald");

  const current = THEMES.find(t => t.id === activeTheme) || THEMES[0];

  return (
    <div style={{ minHeight: "100vh", background: "#090d16", color: "#f3f4f6", padding: "2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
              <Link href="/" style={{ color: "#10b981", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
                ← Tenant Websites Hub
              </Link>
              <span style={{ color: "#4b5563" }}>/</span>
              <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Theme Engine</span>
            </div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#ffffff" }}>
              7 Design Tokens & Theme Palettes
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "0.9375rem" }}>
              Orthogonal design tokens that instantaneously cascade across tenant websites, apps, and forms.
            </p>
          </div>
          <Link href="/templates" style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.5rem", color: "#e5e7eb", textDecoration: "none", fontSize: "0.875rem" }}>
            View Templates Gallery →
          </Link>
        </div>

        {/* Theme Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
          {THEMES.map(theme => (
            <div
              key={theme.id}
              onClick={() => setActiveTheme(theme.id)}
              style={{
                padding: "1.25rem",
                borderRadius: "0.75rem",
                border: activeTheme === theme.id ? `2px solid ${theme.primary}` : "1px solid rgba(255,255,255,0.08)",
                background: activeTheme === theme.id ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: theme.primary }} />
                  <span style={{ fontWeight: 700, color: "#ffffff", fontSize: "1rem" }}>{theme.name}</span>
                </div>
                {activeTheme === theme.id && (
                  <span style={{ fontSize: "0.75rem", color: theme.primary, fontWeight: 700 }}>ACTIVE</span>
                )}
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.8125rem", lineHeight: 1.4, margin: 0 }}>
                {theme.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live Token Preview Card */}
        <div style={{ background: current.bg, border: `1px solid ${current.primary}44`, borderRadius: "1rem", padding: "2rem", boxShadow: `0 20px 40px ${current.primary}11` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.875rem", color: current.primary, fontWeight: 700, textTransform: "uppercase" }}>
              Live Design Token Rendering · {current.name}
            </span>
            <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", background: "rgba(255,255,255,0.1)", color: "#fff" }}>
              Zero Hardcoded Hex
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                Build Your Enterprise Presence
              </h2>
              <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                Seamlessly integrated with UniERP supply chain, finance, and CRM data streams.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button style={{ padding: "0.625rem 1.25rem", background: current.primary, color: "#090d16", border: "none", borderRadius: "0.5rem", fontWeight: 700, cursor: "pointer" }}>
                  Get Started Free
                </button>
                <button style={{ padding: "0.625rem 1.25rem", background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "0.5rem", fontWeight: 600, cursor: "pointer" }}>
                  Schedule Demo
                </button>
              </div>
            </div>

            <div style={{ background: "rgba(0,0,0,0.3)", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.75rem" }}>
                Token Inspector
              </div>
              <div style={{ fontSize: "0.8125rem", fontFamily: "monospace", color: "#d1d5db" }}>
                <div>--theme-primary: <span style={{ color: current.primary }}>{current.primary}</span>;</div>
                <div>--theme-accent: <span style={{ color: current.accent }}>{current.accent}</span>;</div>
                <div>--theme-bg-surface: <span style={{ color: current.bg }}>{current.bg}</span>;</div>
                <div>--theme-radius: 0.5rem;</div>
                <div>--theme-font-sans: 'Inter', sans-serif;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
