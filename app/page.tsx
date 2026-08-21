import Link from "next/link";

export const dynamic = "force-dynamic";

/**
 * P4's root, reached only on a PLATFORM host (localhost, or whatever
 * NEXT_PUBLIC_SITES_HOST names). Every other host is rewritten by
 * `middleware.ts` into `/_sites/<host>/…` and never reaches this page.
 *
 * There is deliberately no dashboard here. This platform used to open on a
 * mock console — a hard-coded list of six template cards and three "published"
 * sites that existed nowhere — while the real, API-backed site management sat
 * in a different app entirely. That console is now one place, in the Developer
 * Platform's Sites pillar, and this page says so rather than pretending to be
 * a second one.
 */
export default function TenantSitesRoot() {
  const studio = process.env.NEXT_PUBLIC_STUDIO_URL || "http://localhost:4008";

  return (
    <main style={{ padding: "var(--space-8, 2rem)", maxWidth: "42rem" }}>
      <h1
        style={{
          fontSize: "var(--text-xl, 1.25rem)",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Tenant Websites
      </h1>
      <p style={{ color: "var(--color-text-muted, #64748b)", lineHeight: 1.6 }}>
        This service serves published tenant websites to the public. It resolves
        a site from the request’s host — either a <code>*.unierp.app</code>{" "}
        subdomain or a custom domain the tenant owns — and requires no sign-in,
        because the people it serves are the tenant’s visitors, not its staff.
      </p>
      <p style={{ color: "var(--color-text-muted, #64748b)", lineHeight: 1.6 }}>
        You are seeing this because you reached it on a platform host rather
        than a tenant’s. To create or edit a site, use the{" "}
        <Link href={`${studio}/builder/sites`}>Developer Platform</Link>.
      </p>
    </main>
  );
}
