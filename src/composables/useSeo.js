/**
 * useSeo — composable do zarządzania meta tagami w Vue 3 + Vite (SPA)
 *
 * Użycie:
 *   import { useSeo } from '@/composables/useSeo'
 *   useSeo({ title: 'Strona', description: 'Opis...' })
 */

const SITE_NAME = "Dawid Kula - Frontend Developer, Vue 3, Tester";
const SITE_URL = "https://twoja-domena.pl"; // ← zmień na swoją domenę
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`; // ← 1200x630px, wgraj do /public
const DEFAULT_DESCRIPTION =
  "Tworzę nowoczesne aplikacje webowe i mobilne — Vue, Nuxt, Node.js. Sprawdź moje portfolio.";
const TWITTER_HANDLE = "@twoj_twitter"; // ← lub usuń jeśli nie masz

/**
 * @param {Object} options
 * @param {string}  options.title        - Tytuł strony (bez nazwy serwisu, dodawana automatycznie)
 * @param {string}  options.description  - Opis strony (max ~155 znaków)
 * @param {string}  [options.ogImage]    - URL obrazka OG (1200x630)
 * @param {string}  [options.ogType]     - 'website' | 'article' | 'profile'  (default: 'website')
 * @param {string}  [options.canonical]  - Kanoniczny URL strony
 * @param {boolean} [options.noIndex]    - true = noindex, nofollow
 * @param {Object}  [options.schema]     - Obiekt JSON-LD (nadpisuje domyślny)
 */
export function useSeo(options = {}) {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    canonical,
    noIndex = false,
    schema = null,
  } = options;

  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = canonical || window.location.href;

  // ── Tytuł ──────────────────────────────────────────────────────────────────
  document.title = fullTitle;

  // ── Helpery ────────────────────────────────────────────────────────────────
  const setMeta = (selector, attr, value) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      const [attrName, attrValue] = selector
        .match(/\[(.+?)="(.+?)"\]/)
        .slice(1);
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  const setLink = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  };

  const setJsonLd = (data) => {
    let el = document.querySelector(
      'script[type="application/ld+json"]#seo-schema',
    );
    if (!el) {
      el = document.createElement("script");
      el.setAttribute("type", "application/ld+json");
      el.setAttribute("id", "seo-schema");
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  };

  // ── Basic meta ─────────────────────────────────────────────────────────────
  setMeta('meta[name="description"]', "content", description);
  setMeta(
    'meta[name="robots"]',
    "content",
    noIndex
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large",
  );

  // ── Canonical ──────────────────────────────────────────────────────────────
  setLink("canonical", canonicalUrl);

  // ── Open Graph ─────────────────────────────────────────────────────────────
  setMeta('meta[property="og:title"]', "content", fullTitle);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:type"]', "content", ogType);
  setMeta('meta[property="og:url"]', "content", canonicalUrl);
  setMeta('meta[property="og:image"]', "content", ogImage);
  setMeta('meta[property="og:image:width"]', "content", "1200");
  setMeta('meta[property="og:image:height"]', "content", "630");
  setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
  setMeta('meta[property="og:locale"]', "content", "pl_PL");

  // ── Twitter Card ───────────────────────────────────────────────────────────
  setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
  setMeta('meta[name="twitter:title"]', "content", fullTitle);
  setMeta('meta[name="twitter:description"]', "content", description);
  setMeta('meta[name="twitter:image"]', "content", ogImage);
  if (TWITTER_HANDLE) {
    setMeta('meta[name="twitter:site"]', "content", TWITTER_HANDLE);
  }

  // ── JSON-LD Schema ─────────────────────────────────────────────────────────
  if (schema) {
    setJsonLd(schema);
  }
}

// ── Gotowe schematy JSON-LD ────────────────────────────────────────────────

/**
 * Schema dla strony osoby / portfolio
 */
export function usePersonSchema({ name, jobTitle, url, image, sameAs = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url: url || SITE_URL,
    image,
    sameAs, // np. ['https://github.com/...', 'https://linkedin.com/in/...']
  };
}

/**
 * Schema dla projektu / case study (CreativeWork)
 */
export function useProjectSchema({
  name,
  description,
  url,
  image,
  author,
  dateCreated,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    image,
    dateCreated,
    author: {
      "@type": "Person",
      name: author,
    },
  };
}

/**
 * Schema dla strony głównej (WebSite + potencjalny Sitelinks Searchbox)
 */
export function useWebsiteSchema({ name, url, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name || SITE_NAME,
    url: url || SITE_URL,
    description,
    inLanguage: "pl",
  };
}
