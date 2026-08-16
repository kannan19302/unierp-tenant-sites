"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TenantSitesLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("webmaster@unierp.com");
  const [password, setPassword] = useState("Webmaster@2026!");
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthenticated(true);
      setTimeout(() => {
        router.push("/templates");
      }, 800);
    }, 600);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#090d16",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem",
      color: "#f3f4f6"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px",
        background: "rgba(17, 24, 39, 0.95)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{
            width: "3rem",
            height: "3rem",
            margin: "0 auto 1rem",
            borderRadius: "0.75rem",
            background: "linear-gradient(135deg, #10b981, #059669)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem"
          }}>
            🌐
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
            Webmaster Portal
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginTop: "0.25rem" }}>
            Sign in to manage multi-tenant websites & site templates
          </p>
        </div>

        {/* Demo Credentials Notice */}
        <div style={{
          padding: "0.75rem 1rem",
          background: "rgba(16, 185, 129, 0.1)",
          border: "1px solid rgba(16, 185, 129, 0.25)",
          borderRadius: "0.5rem",
          fontSize: "0.8125rem",
          color: "#34d399",
          marginBottom: "1.5rem"
        }}>
          <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>⚡ Pre-configured Demo Access:</div>
          <div>User: <code style={{ color: "#ffffff" }}>webmaster@unierp.com</code></div>
          <div>Pass: <code style={{ color: "#ffffff" }}>Webmaster@2026!</code></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#d1d5db", marginBottom: "0.375rem" }}>
              Webmaster Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.625rem 0.875rem",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "0.5rem",
                color: "#ffffff",
                fontSize: "0.875rem",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#d1d5db", marginBottom: "0.375rem" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.625rem 0.875rem",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "0.5rem",
                color: "#ffffff",
                fontSize: "0.875rem",
                outline: "none"
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: authenticated ? "#059669" : "#10b981",
              border: "none",
              borderRadius: "0.5rem",
              color: "#090d16",
              fontWeight: 700,
              fontSize: "0.9375rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {loading ? "Authenticating..." : authenticated ? "✓ Access Granted" : "Sign In to Webmaster Portal"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link href="/" style={{ color: "#9ca3af", fontSize: "0.8125rem", textDecoration: "none" }}>
            ← Back to Public Website Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
