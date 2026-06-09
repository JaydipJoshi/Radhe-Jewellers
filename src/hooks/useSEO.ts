import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  /** Optional: override og:type, default is "website" */
  type?: string;
  /** Optional: structured data (JSON-LD) for this page */
  jsonLd?: Record<string, unknown>;
}

const BASE_TITLE = "Radhe Jewellers | Jewellery Shop in Ahmedabad";
const OG_IMAGE = "https://radhejewellers.in/og-image.jpg";
const OG_IMAGE_ALT = "Radhe Jewellers – Fine Gold & Silver Jewellery in Ahmedabad";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  const script = document.getElementById(id);
  if (script) script.remove();
}

export function useSEO({ title, description, canonical, type = "website", jsonLd }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description & keywords
    setMeta("description", description);

    // Robots — ensure pages are indexable
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta("og:type", type, "property");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", OG_IMAGE, "property");
    setMeta("og:image:alt", OG_IMAGE_ALT, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:locale", "en_IN", "property");
    setMeta("og:site_name", "Radhe Jewellers", "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", OG_IMAGE);
    setMeta("twitter:image:alt", OG_IMAGE_ALT);
    setMeta("twitter:site", "@radhejewellers");

    // Page-specific JSON-LD
    const PAGE_LD_ID = "page-jsonld";
    if (jsonLd) {
      setJsonLd(PAGE_LD_ID, jsonLd);
    } else {
      removeJsonLd(PAGE_LD_ID);
    }

    // Cleanup: restore base title when component unmounts
    return () => {
      document.title = BASE_TITLE;
      removeJsonLd(PAGE_LD_ID);
    };
  }, [title, description, canonical, type, jsonLd]);
}
