=== Calcvora SEO Manager ===
Contributors: hsdigisolutions
Tags: seo, headless, wpgraphql, rankmath, calculators
Requires at least: 6.2
Tested up to: 6.6
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Manage SEO for every Calcvora calculator page from WordPress — RankMath meta, index toggle, editable Spanish content, JSON-LD, and an optimization tracker — exposed to the Next.js front end over WPGraphQL.

== Description ==

Calcvora SEO Manager gives SEO experts a no-code dashboard to control every calculator page on the headless Next.js site:

* Edit SEO title / meta description / canonical via RankMath (per page).
* Toggle index / noindex with one click (applies to both language versions of the page).
* Edit page content — intro, explanation, worked example, FAQs (Spanish).
* Override the JSON-LD schema per page.
* Track SEO status (pending / in progress / done), RankMath score, word count, priority and assignee.
* Dashboard progress widget: % indexed, % with content, % done.
* Export all pages + status to CSV for reporting.

It registers a private `calculator_page` custom post type (no WordPress front-end URL — the Next.js app owns the URLs), exposes everything over WPGraphQL, and pings the Next.js ISR revalidation endpoint on save so changes go live immediately.

== Installation ==

1. Upload the `calcvora-seo-manager` folder to `/wp-content/plugins/`, or install the ZIP via Plugins → Add New → Upload.
2. Activate. On activation the plugin seeds a background job that creates one entry per calculator (~475), 50 at a time — no timeout. Watch the progress notice, or run Calculator Pages → Settings → "Sync / Repair".
3. In RankMath → Titles & Meta, enable RankMath for the "Calculator Pages" post type so its GraphQL `seo` field resolves.
4. In Calculator Pages → Settings, set the Next.js site URL and a Revalidate secret (must equal `REVALIDATE_SECRET` in the Next.js environment).

== Requirements ==

* WPGraphQL 2.x
* RankMath SEO + WPGraphQL for RankMath (for the SEO meta fields over GraphQL)

== Frequently Asked Questions ==

= Does this create public WordPress pages? =
No. The CPT is `public:false`. URLs are owned by the Next.js app; WordPress is a headless editing surface only.

= What happens if the CMS is down? =
The Next.js front end fails soft — pages render from their built-in JSON data. A page only becomes noindex if a WordPress entry explicitly sets it; a missing entry or an error leaves the page indexed.

== Changelog ==

= 1.1.0 =
* REST endpoint aligned to /wp-json/wp/v2/calculator_page for the content seeder.
* RankMath auto-enabled on the Calculator Pages CPT (title-setting toggle + filters).
* Word count now recomputes when content is written via REST/GraphQL, not just the editor form.

= 1.0.0 =
* Initial release: CPT, taxonomy, meta fields, background creation, admin list/filters/bulk actions, dashboard widget, content-quality checks, CSV export, WPGraphQL exposure, ISR revalidation webhook.
