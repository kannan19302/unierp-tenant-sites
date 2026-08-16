"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PUBLISHED_TENANT_SITES, PublishedTenantSite } from "../data/site-templates";

export default function SitesRegistryPage() {
  const [sites, setSites] = useState<PublishedTenantSite[]>(PUBLISHED_TENANT_SITES);

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
              <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Active Deployments</span>
            </div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#ffffff" }}>
              Published Tenant Sites Registry
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "0.9375rem" }}>
              Live edge-deployed tenant portals, e-commerce storefronts, and multi-tenant corporate sites.
            </p>
          </div>
          <Link href="/templates" style={{ padding: "0.5rem 1rem", background: "#10b981", borderRadius: "0.5rem", color: "#090d16", textDecoration: "none", fontSize: "0.875rem", fontWeight: 700 }}>
            + Deploy New Site
          </Link>
        </div>

        {/* Sites Table */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Tenant / Organization</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Primary Domain</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Active Template</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Traffic (30d)</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>SSL & Status</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sites.map(site => (
                <tr key={site.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <div style={{ fontWeight: 700, color: "#ffffff" }}>{site.companyName}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>Slug: {site.tenantSlug}</div>
                  </td>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <a href={`https://${site.primaryDomain}`} target="_blank" rel="noreferrer" style={{ color: "#34d399", textDecoration: "none", fontSize: "0.875rem" }}>
                      {site.primaryDomain} ↗
                    </a>
                  </td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.875rem", color: "#d1d5db" }}>
                    {site.templateId}
                  </td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.875rem", color: "#d1d5db" }}>
                    {site.monthlyVisits.toLocaleString()} visits
                  </td>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", background: "rgba(16,185,129,0.15)", color: "#34d399", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      🔒 SSL Active
                    </span>
                  </td>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <Link href={`/domains?site=${site.id}`} style={{ fontSize: "0.8125rem", color: "#9ca3af", textDecoration: "none", marginRight: "1rem" }}>
                      Domains
                    </Link>
                    <a href={`http://localhost:4005?siteId=${site.id}`} style={{ fontSize: "0.8125rem", color: "#10b981", textDecoration: "none", fontWeight: 600 }}>
                      Open Studio ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
