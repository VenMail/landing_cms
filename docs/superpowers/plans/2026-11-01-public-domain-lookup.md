# Public domain lookup implementation plan

**Goal:** Publish a free domain lookup that uses Venmail's existing WHOIS backend without changing its onboarding behavior.

**Architecture:** A static landing page calls a same-origin Worker endpoint. The Worker validates the domain, obtains a separate anonymous CSRF session from the fixed Venmail origin, submits the existing lookup, and returns a small allowlisted result. It applies short-lived caching and best-effort per-isolate request limiting; upstream errors remain errors, never domain-availability claims.

**Tech stack:** Next.js static export, Cloudflare Workers, Node's test runner.

- [ ] Test valid and invalid domains, safe output, upstream failures, and request limits before implementing the endpoint.
- [ ] Implement the lookup and reusable domain-validation logic, with timeouts and no arbitrary upstream URLs.
- [ ] Add a responsive, accessible public page with precise scope and missing-data messaging; add it to the sitemap and link from the existing free tool.
- [ ] Run targeted tests, content/tool suites, build, export checks, and an end-to-end lookup after deployment.
