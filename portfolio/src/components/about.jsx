// Profile image is referenced directly in the JSX as src/assets/profile.jpg

function About() {
  // Theme-aware helpers
  const textSecondary = { color: 'var(--text-secondary)' };
  const glassStyle = {
    background: 'var(--surface-glass)',
    borderColor: 'var(--border-glass)'
  };

  // Cursor spotlight + tilt helpers (no React state needed)
  const handleSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mx', x + 'px');
    e.currentTarget.style.setProperty('--my', y + 'px');
  };

  const handleTiltMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1 .. 1
    const py = (y / rect.height) * 2 - 1; // -1 .. 1
    const maxTilt = 6; // degrees
    e.currentTarget.style.setProperty('--rx', (-py * maxTilt) + 'deg');
    e.currentTarget.style.setProperty('--ry', (px * maxTilt) + 'deg');
    e.currentTarget.style.setProperty('--s', '1.03');
    handleSpotlight(e);
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
    e.currentTarget.style.setProperty('--s', '1');
  };

  // Brand colors for language badges
  const brandColors = {
    Python: '#3776AB',
    JavaScript: '#F7DF1E',
    Java: '#E76F00',
    HTML5: '#E34F26',
    CSS3: '#1572B6'
  };

  const stats = [
    {
      label: 'Current semester',
      value: 'Year 2 · Sem IV',
      blurb: 'Deepening core foundations in algorithms, probability, and data structures at KGISL University.'
    },
    {
      label: 'Lab builds',
      value: '6+ mini apps',
      blurb: 'Class projects covering sentiment analysis, portfolio dashboards, and automation utilities.'
    },
    {
      label: 'Campus involvement',
      value: 'Club facilitator',
      blurb: 'Co-leading AI study circles, organizing weekend code labs, and sharing project retrospectives.'
    }
  ];

  const languages = [
    { 
      name: 'Python', 
  blurb: 'My go-to toolkit for ML experiments, automation scripts, and fast data exploration that unlocks insights quickly.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M11.177,0.022c-1.079,0.1-2.103,0.281-3.007,0.539c-2.667,0.759-3.149,2.348-3.149,4.388v3.213h6.298v0.803h-6.298h-2.356c-2.051,0-3.848,1.209-4.411,3.517c-0.651,2.641-0.651,4.292,0,7.054c0.482,2.056,1.634,3.517,3.684,3.517h2.384v-3.163c0-2.284,2.017-4.305,4.411-4.305h6.29c1.962,0,3.52-1.594,3.52-3.54v-6.648c0-1.889-1.622-3.309-3.52-3.622c-1.2-0.201-2.44-0.292-3.846-0.292zm-3.417,2.583c0.651,0,1.184,0.532,1.184,1.184c0,0.653-0.533,1.177-1.184,1.177c-0.652,0-1.183-0.524-1.183-1.177c0-0.653,0.531-1.184,1.183-1.184z" transform="translate(0 0.5)" />
          <path d="M17.55,8.163v3.076c0,2.382-2.053,4.388-4.412,4.388h-6.29c-1.929,0-3.52,1.622-3.52,3.54v6.647c0,1.889,1.675,3.001,3.52,3.54c2.207,0.646,4.323,0.763,6.29,0c1.308-0.505,3.52-1.52,3.52-3.54v-2.667h-6.29v-0.803h6.29h3.52c2.051,0,2.814-1.405,3.52-3.518c0.733-2.18,0.702-4.269,0-7.054c-0.505-2.019-1.471-3.517-3.52-3.517h-1.628zm-3.539,16.666c0.652,0,1.184,0.531,1.184,1.184c0,0.651-0.532,1.184-1.184,1.184c-0.651,0-1.184-0.533-1.184-1.184c0-0.653,0.533-1.184,1.184-1.184z" fill="var(--accent-primary)" transform="translate(0 0.5)" />
        </svg>
      )
    },
    { 
      name: 'JavaScript', 
  blurb: 'Brings ideas to life on the web—building rich, accessible interfaces and playful interactions with modern tooling.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M0,0h24v24H0V0z" fill="var(--accent-secondary)" />
          <path d="M19.6,19.5c-0.3,1.8-1.8,3.1-4.1,3.1c-2.6,0-4.1-1.3-4.9-3.1l2.7-1.6c0.5,0.9,1,1.6,2.2,1.6c1,0,1.7-0.4,1.7-2V11h-4.3v-2.7h7.1v11.3C19.8,19.6,19.8,19.6,19.6,19.5z M10.5,19.4C9.9,21.5,7.9,22.5,5.5,22.5C2.5,22.5,0,21.1,0,17.5c0-3,1.5-4.9,4.9-5.7l1.6-0.4c2-0.4,2.8-0.8,2.8-2c0-1.3-1.1-1.9-2.5-1.9c-1.8,0-2.8,0.8-3.3,2.1L1,8.2C1.7,5.7,4.3,4.2,7.5,4.2c3.3,0,5.7,1.4,5.7,4.7v10.3c0,0,0,0-0.1,0C12.3,19.2,11.4,19.3,10.5,19.4z M9.3,13.5V12c-0.8,0.3-1,0.4-1.8,0.5c-1.8,0.3-2.5,1-2.5,2.2c0,1.1,0.8,1.8,2.1,1.8C8.5,16.6,9.3,15.5,9.3,13.5z" fill="#fff"/>
        </svg>
      )
    },
    { 
      name: 'Java', 
  blurb: 'Keeps my fundamentals sharp with strong OOP design, data structures, and scalable backend thinking.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M8.851,17.386c0,0-0.936,0.544,0.667,0.729c1.929,0.222,2.915,0.19,5.037-0.213c0,0,0.559,0.35,1.339,0.654c-4.765,2.045-10.78-0.118-7.043-1.17" />
          <path d="M8.276,14.922c0,0-1.05,0.778,0.555,0.943c2.073,0.214,3.712,0.232,6.556-0.316c0,0,0.39,0.394,1.001,0.61c-5.751,1.682-12.156,0.133-8.112-1.237" />
          <path d="M12.514,10.43c1.185,1.362-0.312,2.589-0.312,2.589s3.009-1.554,1.627-3.499c-1.289-1.815-2.277-2.717,3.069-5.827c0,0-8.381,2.09-4.384,6.737" />
          <path d="M18.974,19.654c0,0,0.693,0.572-0.764,1.014c-2.773,0.84-11.547,1.095-13.981,0.034c-0.876-0.383,0.766-0.914,1.282-1.026c0.539-0.116,0.845-0.095,0.845-0.095c-0.973-0.686-6.292,1.347-2.702,1.928c9.775,1.585,17.815-0.713,15.32-1.855" />
          <path d="M9.292,12.14c0,0-4.463,1.061-1.581,1.446c1.217,0.163,3.642,0.126,5.896-0.064c1.845-0.156,3.696-0.488,3.696-0.488s-0.65,0.278-1.122,0.599c-4.526,1.19-13.266,0.636-10.753-0.581c2.133-1.033,3.864-0.912,3.864-0.912" />
          <path d="M16.706,16.659c4.602-2.391,2.478-4.696,0.99-4.39c-0.362,0.074-0.523,0.139-0.523,0.139s0.134-0.211,0.391-0.301c2.921-1.028,5.167,3.054-0.95,4.67c0,0,0.071-0.065,0.092-0.118" />
          <path d="M14.108,0.399c0,0,2.549,2.549-2.418,6.465c-3.984,3.149-0.909,4.942-0.909,4.942s-2.483-1.288-1.756-3.279c1.071-2.93,4.041-4.348,5.083-8.128" />
          <path d="M10.021,20.096c4.416,0.282,11.2-0.157,11.366-2.252c0,0-0.309,0.794-3.651,1.426c-3.771,0.715-8.426,0.631-11.188,0.173c0,0,0.565,0.467,3.473,0.653" fill="var(--accent-primary)" />
        </svg>
      )
    },
    { 
      name: 'HTML5', 
  blurb: 'Lays the foundation for resilient, semantic, and screen-reader-friendly interfaces.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M1.5,0h21l-1.91,21.563L11.977,24l-8.564-2.438L1.5,0z M7.031,9.75l-0.232-2.718l10.059,0.003l0.23-2.622L5.412,4.41L6.051,11.1h8.168l-0.286,3.213l-2.536,0.702l-2.535-0.702l-0.157-1.812H6.385l0.337,3.587l5.258,1.5l5.256-1.5l0.701-7.577H7.031z" fill="var(--accent-secondary)" />
        </svg>
      )
    },
    { 
      name: 'CSS3', 
  blurb: 'Where creativity meets precision—crafting polished, responsive layouts and micro-interactions.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M1.5,0h21l-1.91,21.563L11.977,24l-8.565-2.438L1.5,0z M19.042,4.399l-13.085,0.005l0.258,2.719l10.319-0.002l-0.238,2.622H9.381l0.223,2.729h6.351l-0.253,3.157l-3.302,0.7l-3.297-0.7l-0.242-2.621H6.039l0.244,3.979l5.694,1.611h0.114l5.694-1.611l0.886-10.089z" fill="var(--accent-primary)" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="relative z-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Animated Background Elements */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-gradient-to-br from-[var(--accent-primary)] to-transparent opacity-10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-[var(--accent-secondary)] to-transparent opacity-10 rounded-full blur-3xl -z-10"></div>
        
        {/* Title with Line Effect */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full inline-block" style={glassStyle}>
            About
          </span>
          <h2 className="text-display text-4xl md:text-5xl mt-4 tracking-tight text-glow text-center">About Me</h2>
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Spotlight Bio Section */}
          <div className="relative z-10 glass-surface border rounded-3xl overflow-hidden" style={glassStyle}>
            <div className="grid items-center gap-10 p-8 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)] md:p-12">
              <div className="relative group flex flex-col items-center gap-6">
                <div
                  className="relative h-64 w-64 sm:h-72 sm:w-72"
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                >
                  {/* Neon glow background layers */}
                  <div className="absolute -inset-6 -z-10 rounded-full opacity-70 blur-2xl transition duration-700 group-hover:opacity-100" style={{ background: 'radial-gradient(closest-side, var(--accent-primary) 5%, transparent 60%)' }}></div>
                  <div className="absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl transition duration-700 group-hover:opacity-90" style={{ background: 'radial-gradient(closest-side, var(--accent-secondary) 8%, transparent 65%)' }}></div>
                  <div className="absolute inset-0 rounded-full ring-2 ring-[var(--accent-primary)]/40 shadow-[0_0_80px_-10px_var(--accent-primary)]"></div>
                  {/* Cursor-follow spotlight */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), var(--accent-primary), transparent 60%)'
                    }}
                  />
                  {/* Portrait */}
                  <div
                    className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-[var(--surface-glass)]/60 shadow-[0_32px_60px_-30px_var(--accent-primary)] will-change-transform"
                    style={{ transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(var(--s, 1))', transition: 'transform 150ms ease' }}
                  >
                    <img
                      src= "src/assets/profile.jpg"
                      alt="Portrait of Naveen Kumar G"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex w-full max-w-xs items-center justify-between rounded-full border border-[var(--border-glass)] bg-[var(--surface-glass)] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] shadow-lg backdrop-blur">
                  <span>AI &amp; DS · Year 2</span>
                  <span>Coimbatore</span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] bg-[var(--surface-glass)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent-primary)]"></span>
                    Second-Year B.Tech AI &amp; DS
                  </span>
                  <h3 className="text-3xl md:text-4xl font-semibold text-glow">Learning by building—one experiment at a time.</h3>
                  <p className="text-base md:text-lg leading-relaxed" style={textSecondary}>
                    I’m Naveen Kumar G, a second-year student fascinated by how data, math, and thoughtful UI patterns can unlock better decision-making.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed" style={textSecondary}>
                    My weeks swing between lectures, late-night lab sprints, and community meetups—where I prototype mini apps, practice storytelling with dashboards, and capture what I’m learning so classmates can iterate faster too.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--border-glass)] bg-[var(--surface-glass)]/70 p-4 shadow-[0_20px_45px_-30px_var(--accent-primary)] transition-transform duration-300 hover:-translate-y-1">
                      <div className="text-sm uppercase tracking-widest text-[var(--text-secondary)]">{item.label}</div>
                      <div className="mt-2 text-xl font-semibold text-glow">{item.value}</div>
                      <p className="mt-3 text-sm leading-relaxed" style={textSecondary}>{item.blurb}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  >
                    View Projects
                  </a>
                  <a
                    href="mailto:naveen13524g@gmail.com"
                    className="rounded-full border border-[var(--accent-primary)] px-6 py-3 text-sm font-medium text-[var(--accent-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  >
                    Let’s Collaborate
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-[var(--border-glass)] px-6 py-3 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Languages - Staggered Card Layout */}
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-[var(--accent-primary)]/30"></div>
              <h3 className="text-2xl md:text-3xl font-semibold whitespace-nowrap">Programming Languages</h3>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-[var(--accent-primary)]/30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languages.map((lang, index) => (
                <div 
                  key={lang.name}
                  className="glass-surface relative overflow-hidden border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-[var(--accent-primary)]/60 hover:shadow-[0_0_60px_-10px_var(--accent-primary)] group"
                  style={{
                    ...glassStyle,
                    animationDelay: `${index * 100}ms`,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mx', x + 'px');
                    e.currentTarget.style.setProperty('--my', y + 'px');
                  }}
                >
                  {/* Neon cursor spotlight */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), var(--accent-primary), transparent 60%)'
                    }}
                  />
                  <div className="flex items-center mb-4">
                    <div
                      className="mr-3 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: brandColors[lang.name], boxShadow: `${brandColors[lang.name]}40 0px 0px 24px 0px` }}
                    >
                      {lang.logo ? (
                        <img src={lang.logo} alt={`${lang.name} logo`} className="h-8 w-8 object-contain" loading="lazy" />
                      ) : (
                        lang.icon
                      )}
                    </div>
                    <h4 className="text-xl font-semibold text-glow">{lang.name}</h4>
                  </div>
                  <p className="text-base" style={textSecondary}>{lang.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;