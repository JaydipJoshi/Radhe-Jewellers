import { useEffect, useState } from "react";
import "./PageLoader.css";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Start fade after a brief moment so the animation is always seen
      const delay = setTimeout(() => {
        setFading(true);
        const remove = setTimeout(() => setVisible(false), 700);
        return () => clearTimeout(remove);
      }, 1800);
      return () => clearTimeout(delay);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={`rj-loader-overlay${fading ? " rj-loader-fade-out" : ""}`} aria-label="Loading Radhe Jewellers" role="status">
      <div className="rj-loader-stage">

        {/* Slow outer orbital ring */}
        <div className="rj-orbit-outer" />

        {/* Travelling dot on orbit */}
        <div className="rj-orbit-dot-track">
          <span className="rj-orbit-dot" />
        </div>

        {/* Inner pulse circle */}
        <div className="rj-pulse-ring" />

        {/* Logo / monogram card */}
        <div className="rj-logo-card">
          <svg
            className="rj-diamond-icon"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Diamond facet shape */}
            <polygon points="24,4 44,18 24,44 4,18" stroke="#5C6B73" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
            <polygon points="24,4 44,18 24,26 4,18" stroke="#5C6B73" strokeWidth="0.8" fill="none" opacity="0.45" strokeLinejoin="round" />
            <line x1="4" y1="18" x2="44" y2="18" stroke="#5C6B73" strokeWidth="0.8" opacity="0.35" />
            <line x1="24" y1="4" x2="24" y2="44" stroke="#5C6B73" strokeWidth="0.6" opacity="0.25" />
          </svg>

          <span className="rj-monogram">RJ</span>
        </div>

        {/* Brand name & tagline */}
        <div className="rj-brand-text">
          <p className="rj-brand-name">Radhe Jewellers</p>
          <p className="rj-brand-tagline">Crafting timeless elegance</p>
        </div>

        {/* Loading dots */}
        <div className="rj-loading-dots" aria-hidden="true">
          <span /><span /><span />
        </div>

      </div>
    </div>
  );
};

export default PageLoader;
