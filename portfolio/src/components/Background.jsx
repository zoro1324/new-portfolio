const ReefSVG = () => (
  <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" className="silhouette reef" aria-hidden="true">
    <path d="M0 180 C 60 150, 90 160, 140 180 C 200 200, 240 170, 300 180 C 360 190, 400 170, 460 180 C 520 190, 560 160, 600 180 L 600 200 L 0 200 Z" />
    <circle cx="90" cy="175" r="10" />
    <circle cx="400" cy="178" r="8" />
    <path d="M220 180 l10 -25 l10 25" />
  </svg>
);

// Ship removed as per request

const ParticleSet = () => (
  <div className="l-particles" aria-hidden="true">
    <span className="particle p1" />
    <span className="particle p2" />
    <span className="particle p3" />
    <span className="particle p4" />
    <span className="particle p5" />
    <span className="particle p6" />
    <span className="particle p7" />
    <span className="particle p8" />
    <span className="particle p9" />
    <span className="particle p10" />
    <span className="particle p11" />
    <span className="particle p12" />
  </div>
);

const Background = () => {
  return (
    <div className="bg-layers" role="presentation" aria-hidden="true">
      {/* L1: Caustics */}
      <div className="l-caustics" />

      {/* L2: Particles */}
      <ParticleSet />

      {/* L3: Organic SVG Waves */}
      <div className="l-waves-svg l-waves-top-svg">
        <div className="wave-wrapper">
          <div className="wave-strip">
            <svg className="wave-svg" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <path d="M0,95 C160,135 300,55 480,85 C660,115 840,45 1020,80 C1140,100 1260,60 1380,85 L1380,160 L0,160 Z" fill="currentColor"/>
              <path d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100 L1380,160 L0,160 Z" fill="var(--wave-highlight)"/>
              <path className="wave-crest" d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100" />
            </svg>
            <svg className="wave-svg" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <path d="M0,95 C160,135 300,55 480,85 C660,115 840,45 1020,80 C1140,100 1260,60 1380,85 L1380,160 L0,160 Z" fill="currentColor"/>
              <path d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100 L1380,160 L0,160 Z" fill="var(--wave-highlight)"/>
              <path className="wave-crest" d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100" />
            </svg>
          </div>
        </div>
        <div className="wave-wrapper slower">
          <div className="wave-strip reverse">
            <svg className="wave-svg" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <path d="M0,105 C170,145 340,65 510,95 C680,125 850,55 1020,90 C1160,115 1300,70 1440,95 L1440,160 L0,160 Z" fill="currentColor"/>
            </svg>
            <svg className="wave-svg" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <path d="M0,105 C170,145 340,65 510,95 C680,125 850,55 1020,90 C1160,115 1300,70 1440,95 L1440,160 L0,160 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="l-waves-svg l-waves-bottom-svg">
        <div className="wave-wrapper fast">
          <div className="wave-strip">
            <svg className="wave-svg" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <path d="M0,95 C160,135 300,55 480,85 C660,115 840,45 1020,80 C1140,100 1260,60 1380,85 L1380,160 L0,160 Z" fill="currentColor"/>
              <path d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100 L1380,160 L0,160 Z" fill="var(--wave-highlight)"/>
              <path className="wave-crest" d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100" />
            </svg>
            <svg className="wave-svg" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <path d="M0,95 C160,135 300,55 480,85 C660,115 840,45 1020,80 C1140,100 1260,60 1380,85 L1380,160 L0,160 Z" fill="currentColor"/>
              <path d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100 L1380,160 L0,160 Z" fill="var(--wave-highlight)"/>
              <path className="wave-crest" d="M0,108 C150,140 320,70 480,100 C640,130 860,60 1020,92 C1140,112 1260,78 1380,100" />
            </svg>
          </div>
        </div>
      </div>

      {/* L4: Silhouettes */}
  <ReefSVG />

      {/* Fish Layer with different species */}
      <div className="l-fish">
        {/* Tuna-like slender fish swimming right */}
  <div className="fish depth-near swim-right swim-fast" style={{ top: '38%', left: '-12%', width: '130px' }}>
          <svg viewBox="0 0 200 60">
            <path d="M10 30 C 40 10, 90 10, 140 30 C 90 50, 40 50, 10 30 Z"/>
            <path className="tail" d="M140 30 L180 20 L175 30 L180 40 Z"/>
            <circle cx="22" cy="28" r="3" />
          </svg>
        </div>

        {/* Angelfish silhouette swimming left */}
  <div className="fish depth-mid swim-left swim-medium" style={{ top: '58%', left: '108%', width: '100px' }}>
          <svg viewBox="0 0 120 120">
            <path d="M60 60 C 40 40, 40 80, 60 60 C 85 35, 95 85, 60 60 Z"/>
            <path className="tail" d="M60 60 L110 50 L100 60 L110 70 Z"/>
            <path className="fin" d="M50 30 L65 45"/>
          </svg>
        </div>

        {/* Manta ray gliding right */}
  <div className="fish depth-far swim-right swim-slow" style={{ top: '72%', left: '-16%', width: '175px', opacity: 0.62 }}>
          <svg viewBox="0 0 220 120">
            <path d="M20 60 C 60 20, 160 20, 200 60 C 160 100, 60 100, 20 60 Z"/>
            <path className="fin" d="M110 60 L120 95"/>
          </svg>
        </div>

        {/* Jellyfish: move near bottom and swim across while bobbing */}
        <div className="fish depth-mid swim-left swim-slow" style={{ top: '82%', width: '72px', opacity: 0.7 }}>
          <span className="bob" style={{ display: 'inline-block' }}>
            <svg viewBox="0 0 80 120">
              <path d="M40 20 C 20 20, 10 40, 10 60 C 40 70, 40 70, 70 60 C 70 40, 60 20, 40 20 Z"/>
              <path d="M20 65 C 20 90, 30 110, 30 115" />
              <path d="M40 68 C 40 95, 45 110, 45 115" />
              <path d="M60 65 C 60 90, 55 110, 55 115" />
            </svg>
          </span>
        </div>

        {/* Small school of fish swimming right */}
  <div className="fish depth-far swim-right swim-medium" style={{ top: '46%', left: '-10%', width: '150px', opacity: 0.6 }}>
          <svg viewBox="0 0 220 80">
            <path d="M10 40 C 25 30, 35 30, 50 40 C 35 50, 25 50, 10 40 Z"/>
            <path d="M60 40 C 75 32, 85 32, 100 40 C 85 48, 75 48, 60 40 Z"/>
            <path d="M110 40 C 125 33, 135 33, 150 40 C 135 47, 125 47, 110 40 Z"/>
            <path d="M160 40 C 175 34, 185 34, 200 40 C 185 46, 175 46, 160 40 Z"/>
          </svg>
        </div>

        {/* Turtle silhouette gliding left near bottom */}
        <div className="fish depth-mid swim-left swim-slow" style={{ top: '80%', left: '118%', width: '110px', opacity: 0.72 }}>
          <svg viewBox="0 0 200 120">
            <ellipse cx="100" cy="60" rx="50" ry="32" />
            <path className="fin" d="M60 60 C 45 50, 35 55, 30 65 C 45 68, 55 66, 60 60 Z" />
            <path className="fin" d="M140 60 C 155 50, 165 55, 170 65 C 155 68, 145 66, 140 60 Z" />
            <path d="M90 45 L80 30" />
            <path d="M110 45 L120 30" />
          </svg>
        </div>

        {/* Shark silhouette far background, subtle */}
        <div className="fish depth-far swim-left swim-slow" style={{ top: '32%', left: '115%', width: '220px', opacity: 0.35 }}>
          <svg viewBox="0 0 300 100">
            <path d="M10 60 C 70 40, 140 40, 200 55 C 230 40, 260 45, 290 55 C 260 60, 230 65, 200 60 C 140 80, 70 80, 10 60 Z" />
            <path className="fin" d="M120 45 L140 15 L150 50 Z" />
            <path className="tail" d="M285 55 L300 40 L298 55 L300 70 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Background;
