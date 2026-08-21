import { NextRequest, NextResponse } from "next/server";

/**
 * P4 — Tenant Websites. One job: serve a tenant's PUBLISHED site to anyone,
 * with no session.
 *
 * This host routing used to live in `tenant-apps` (P3), which is the app that
 * requires a login on every route. So the anonymous public internet was being
 * served by the authenticated business application, while P4 — the platform
 * the register calls "Tenant Websites", audience PUBLIC — served nine
 * logged-in authoring pages and no site at all. Moving it here is the point of
 * the split: P3 runs the business, P8 builds it, P4 serves what was published.
 *
 * Two ways a visitor arrives, and both resolve the tenant from the HOST — never
 * from the caller, matching `GET /public/web/site` on the API, which is
 * explicitly `@Public` and host-resolved:
 *
 *   1. `<slug>.unierp.app`   — the subdomain every site gets for free.
 *   2. `www.acme.com`        — a custom apex or CNAME the tenant owns.
 *
 * Both rewrite to `/_sites/<host>/<path>`, so the site is served from "/" with
 * nested paths intact and the renderer never has to care which kind it was.
 */

/**
 * Hosts that are the platform itself rather than a tenant site. A request on
 * one of these is a developer hitting the dev server directly; it falls
 * through to `/[slug]`, which serves the system tenant's own pages.
 */
const PLATFORM_HOSTS = new Set(
  ["localhost", "127.0.0.1", "0.0.0.0", process.env.NEXT_PUBLIC_SITES_HOST]
    .filter(Boolean)
    .map((h) => (h as string).toLowerCase()),
);

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostHeader = req.headers.get("host") || "";
  const hostname = (hostHeader.split(":")[0] || hostHeader).toLowerCase();

  if (PLATFORM_HOSTS.has(hostname)) return NextResponse.next();

  const rewritten = url.clone();
  const suffix = url.pathname === "/" ? "" : url.pathname;
  rewritten.pathname = `/_sites/${hostname}${suffix}`;
  return NextResponse.rewrite(rewritten);
}

export const config = {
  // Skip Next internals, static assets, and the site renderer itself — without
  // the last exclusion the rewrite would loop, since /_sites/... is also "not
  // a platform host path".
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|_sites).*)"],
};
