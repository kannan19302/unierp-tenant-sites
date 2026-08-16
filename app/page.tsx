"use client";

import React from "react";
import Link from "next/link";
import { SITE_TEMPLATES, PUBLISHED_TENANT_SITES } from "./data/site-templates";

export default function TenantSitesHomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#090d16", color: "#f3f4f6", display: "flex", flexDirection: "column" }}>
      {/* Navigation Header */}
      <header style={{
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(15,17,23,0.95)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "1.5rem" }}>🌐</span>
          <span style={{
            fontSize: "1.125rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #10b981, #34d399)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            UniERP Tenant Websites
          </span>
          <span style={{ fontSize: "0.75rem", background: "rgba(16,185,129,0.15)", color: "#34d399", padding: "0.15rem 0.5rem", borderRadius: "0.25rem", fontWeight: 700 }}>
            PLANE 3
          </span>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/templates" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
            Templates ({SITE_TEMPLATES.length})
          </Link>
          <Link href="/themes" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
            Themes
          </Link>
          <Link href="/sites" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
            Live Sites ({PUBLISHED_TENANT_SITES.length})
          </Link>
          <Link href="/domains" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
            Domains & SSL
          </Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/login" style={{
            padding: "0.5rem 1rem",
            background: "#10b981",
            color: "#090d16",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700
          }}>
            Webmaster Sign In
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "4rem 2rem", textAlign: "center", background: "radial-gradient(ellipse at top, rgba(16,185,129,0.12) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.85rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2rem", fontSize: "0.8125rem", color: "#34d399", marginBottom: "1.5rem" }}>
            ✨ Multi-Tenant Website & Digital Commerce Engine
          </div>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1rem" }}>
            Enterprise Tenant Sites & Templates
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "2rem" }}>
            Publish high-conversion corporate websites, B2B/B2C storefronts, and client portals with automated ERP synchronization, custom apex domains, and instant TLS.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/templates" style={{ padding: "0.75rem 1.5rem", background: "#10b981", color: "#090d16", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 700, fontSize: "0.9375rem" }}>
              Explore Site Templates →
            </Link>
            <a href="http://localhost:4005" target="_blank" rel="noreferrer" style={{ padding: "0.75rem 1.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 600, fontSize: "0.9375rem" }}>
              Launch Web Studio (Builder) ↗
            </a>
          </div>
        </div>
      </section>

      {/* Featured Templates Grid */}
      <section style={{ padding: "2rem", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>Featured Multi-Tenant Templates</h2>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Pre-configured with ERP schemas, catalog sync, and design token cascades.</p>
          </div>
          <Link href="/templates" style={{ color: "#34d399", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
            View all {SITE_TEMPLATES.length} templates →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "1.5rem" }}>
          {SITE_TEMPLATES.slice(0, 3).map(tpl => (
            <div key={tpl.id} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", padding: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase" }}>{tpl.category}</span>
                {tpl.badge && <span style={{ fontSize: "0.75rem", color: "#34d399", background: "rgba(16,185,129,0.15)", padding: "0.15rem 0.4rem", borderRadius: "0.25rem" }}>{tpl.badge}</span>}
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>{tpl.name}</h3>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.5, marginBottom: "1rem" }}>{tpl.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>{tpl.componentsCount} components</span>
                <Link href="/templates" style={{ color: "#10b981", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Preview →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "auto", padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center", color: "#6b7280", fontSize: "0.8125rem" }}>
        UniERP Multi-Tenant Websites & Templates Engine · Operating on Port 4004 (Plane 3)
      </footer>
    </div>
  );
}
