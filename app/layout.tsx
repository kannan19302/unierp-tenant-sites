import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@kannan19302/ui/styles";
import "@kannan19302/ui/styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "UniERP Tenant Websites",
  description:
    "Serves published tenant websites, resolved by host. No sign-in.",
};

/**
 * No `<AuthShell>`, and that absence is the point.
 *
 * P4 is audience PUBLIC in the platform register and serves anonymous
 * visitors; wrapping it in an OIDC shell would bounce a customer reading a
 * tenant's pricing page to a login screen. The authoring surfaces that DID
 * need a session have moved to P8.
 *
 * `data-theme` is not pinned here either: a tenant site's appearance comes
 * from its own theme tokens, applied by `PublicPageRenderer` from the site
 * record. Forcing `data-theme="dark"` — as this file used to — meant every
 * tenant's website inherited the builder's dark chrome regardless of the theme
 * they chose.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
