"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DomainsPage() {
  const [customDomain, setCustomDomain] = useState("");
  const [domainList, setDomainList] = useState([
    { domain: "acme-industrial.com", type: "Apex Domain", status: "Verified & Active", target: "sites.unierp.io", ssl: "Let's Encrypt (Auto-Renew)" },
    { domain: "shop.solaris-fashion.com", type: "CNAME Subdomain", status: "Verified & Active", target: "sites.unierp.io", ssl: "Let's Encrypt (Auto-Renew)" },
    { domain: "apexcloud.io", type: "Apex Domain", status: "Verified & Active", target: "sites.unierp.io", ssl: "Let's Encrypt (Auto-Renew)" },
  ]);

  const handleAddDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDomain) return;
    setDomainList(prev => [
      ...prev,
      {
        domain: customDomain,
        type: customDomain.includes("www.") ? "CNAME Subdomain" : "Apex Domain",
        status: "Verifying DNS...",
        target: "sites.unierp.io",
        ssl: "Provisioning SSL...",
      }
    ]);
    setCustomDomain("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#090d16", color: "#f3f4f6", padding: "2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <Link href="/" style={{ color: "#10b981", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
              ← Tenant Websites Hub
            </Link>
            <span style={{ color: "#4b5563" }}>/</span>
            <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Custom Domains & SSL</span>
          </div>
          <h1 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#ffffff" }}>
            Multi-Tenant Domain Dispatcher
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.9375rem" }}>
            Map apex domains and custom subdomains to any tenant website with zero-downtime automated TLS certificates.
          </p>
        </div>

        {/* Add Domain Card */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
            Attach Custom Domain
          </h3>
          <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "1rem" }}>
            Enter your custom domain name. Point your DNS CNAME or ALIAS record to <code style={{ color: "#34d399", background: "rgba(16,185,129,0.1)", padding: "0.15rem 0.4rem", borderRadius: "0.25rem" }}>sites.unierp.io</code>.
          </p>
          <form onSubmit={handleAddDomain} style={{ display: "flex", gap: "0.75rem", maxWidth: "550px" }}>
            <input
              type="text"
              placeholder="e.g. store.mycompany.com"
              value={customDomain}
              onChange={e => setCustomDomain(e.target.value)}
              style={{ flex: 1, padding: "0.625rem 1rem", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "0.5rem", color: "#ffffff", fontSize: "0.875rem" }}
            />
            <button
              type="submit"
              style={{ padding: "0.625rem 1.25rem", background: "#10b981", color: "#090d16", border: "none", borderRadius: "0.5rem", fontWeight: 700, cursor: "pointer", fontSize: "0.875rem" }}
            >
              Add Domain
            </button>
          </form>
        </div>

        {/* Domains List Table */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Domain</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Record Type</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>DNS Target</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>SSL Status</th>
                <th style={{ padding: "1rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {domainList.map((d, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "1rem 1.25rem", fontWeight: 600, color: "#ffffff" }}>
                    {d.domain}
                  </td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.875rem", color: "#d1d5db" }}>
                    {d.type}
                  </td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.875rem", color: "#34d399", fontFamily: "monospace" }}>
                    {d.target}
                  </td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.875rem", color: "#d1d5db" }}>
                    🔒 {d.ssl}
                  </td>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", background: "rgba(16,185,129,0.15)", color: "#34d399", fontWeight: 600 }}>
                      {d.status}
                    </span>
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
