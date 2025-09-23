import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

// Pirate-themed loader component with variants
// Default: Pirate Ship bobbing on waves (SVG)
// Variants: 'ship' | 'compass' | 'skull' (simple)
// - Switch variant by <Loader variant="compass" />
// - Colors are theme-aware: dark theme -> light blue accents; light theme -> dark blue accents

const Loader = ({ variant = 'ship', svgUrl, svgWidth = 164, svgHeight = 120 }) => {
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Mark global pause so site animations wait for 5s
    const root = document.documentElement;
    root.setAttribute('data-animations-paused', 'true');
    const t = setTimeout(() => {
      root.setAttribute('data-animations-paused', 'false');
      setVisible(false);
    }, 5000);
    return () => { clearTimeout(t); root.setAttribute('data-animations-paused', 'false'); };
  }, []);

  if (!visible) return null;

  const accent = isDark ? '#7ec8ff' : '#174a8b'; // light blue on dark, dark blue on light
  const water = isDark ? 'rgba(126,200,255,0.25)' : 'rgba(23,74,139,0.25)';
  // Use light text on both themes since light theme bg is now dark
  const text = '#bcdfff';

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      data-loader="true"
      style={{
        position: 'fixed', inset: 0, display: 'grid', placeItems: 'center',
        background: isDark ? '#000814' : 'linear-gradient(180deg, #0f2f5c 0%, #174a8b 100%)',
        zIndex: 9999, pointerEvents: 'auto'
      }}
    >
      {/* Inline keyframes for bobbing/rocking */}
      <style>{`
        @keyframes bob {
          0% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(2px) rotate(0.4deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-1px) rotate(-0.3deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
      {variant === 'ship' && (
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <svg width="164" height="120" viewBox="0 0 164 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Waves */}
            <g>
              <path fill={water} d="M0 95 Q20 90 40 95 T80 95 T120 95 T160 95 V120 H0 Z">
                <animate attributeName="d" dur="2.4s" repeatCount="indefinite"
                  values="M0 95 Q20 90 40 95 T80 95 T120 95 T160 95 V120 H0 Z;
                          M0 95 Q20 100 40 95 T80 95 T120 95 T160 95 V120 H0 Z;
                          M0 95 Q20 90 40 95 T80 95 T120 95 T160 95 V120 H0 Z" />
              </path>
            </g>
            {/* Simplified ship (bobbing) */}
            <g>
              <g>
                <g>
                  {/* Group all ship parts inside this animated group */}
                  <g>
                    <animateTransform attributeName="transform" type="translate" dur="2.2s" repeatCount="indefinite"
                      values="0,0; 0,2; 0,0; 0,-1; 0,0" />
                    {/* Hull */}
                    <path d="M42 78 L122 78 L108 96 H56 Z" fill={accent} opacity="0.9" />
                    {/* Mast */}
                    <rect x="81" y="38" width="2.5" height="32" fill={accent} />
                    {/* Sail */}
                    <path d="M82 40 C108 46, 110 58, 82 62 Z" fill={accent} opacity="0.75" />
                    {/* Flag */}
                    <path d="M84 38 L96 34 L84 30 Z" fill={accent} />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div style={{ color: text, marginTop: 2, fontSize: 20, fontWeight: 600, opacity: 0.95 }}>Setting sail…</div>
        </div>
      )}

      {variant === 'custom' && svgUrl && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', animation: 'bob 2.2s ease-in-out infinite' }}>
            <img
              src={svgUrl}
              alt="Loading ship"
              width={svgWidth}
              height={svgHeight}
              style={{ filter: isDark ? 'drop-shadow(0 2px 8px rgba(126,200,255,0.4))' : 'drop-shadow(0 2px 10px rgba(23,74,139,0.35))' }}
            />
          </div>
          <div style={{ color: text, marginTop: 2, fontSize: 20, fontWeight: 600, opacity: 0.95 }}>Setting sail…</div>
        </div>
      )}

      {variant === 'compass' && (
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <svg width="92" height="92" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg">
            <circle cx="46" cy="46" r="40" stroke={accent} strokeWidth="2" fill="none" opacity="0.7" />
            <g transform="translate(46,46)">
              <polygon points="0,-28 6,0 0,28 -6,0" fill={accent} opacity="0.85">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2s" repeatCount="indefinite" />
              </polygon>
            </g>
          </svg>
          <div style={{ color: text, marginTop: 8, fontSize: 14, opacity: 0.85 }}>Charting course…</div>
        </div>
      )}

      {variant === 'skull' && (
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(50,50)">
              <circle cx="0" cy="-4" r="22" stroke={accent} strokeWidth="2" fill="none" />
              <circle cx="-7" cy="-8" r="3" fill={accent} />
              <circle cx="7" cy="-8" r="3" fill={accent} />
              <rect x="-10" y="6" width="20" height="6" rx="3" fill={accent} />
            </g>
            <g>
              <path d="M20 80 L40 68" stroke={accent} strokeWidth="2" />
              <path d="M80 80 L60 68" stroke={accent} strokeWidth="2" />
            </g>
            <circle cx="50" cy="50" r="42" stroke={accent} strokeOpacity="0.28" fill="none">
              <animate attributeName="r" values="38;44;38" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
          <div style={{ color: text, marginTop: 8, fontSize: 14, opacity: 0.85 }}>Hoisting the colors…</div>
        </div>
      )}
    </div>
  );
};

export default Loader;
