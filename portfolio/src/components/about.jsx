function About() {
  // Theme-aware helpers
  const textSecondary = { color: 'var(--text-secondary)' };
  const glassStyle = {
    background: 'var(--surface-glass)',
    borderColor: 'var(--border-glass)'
  };
  const primaryButtonStyle = {
    background: 'var(--accent-primary)',
    color: '#061018',
    boxShadow: 'var(--glow-primary)'
  };

  // Programming languages data
  const languages = [
    { name: 'Python', blurb: 'My go-to for AI, ML, and automation. Clean, powerful, and versatile.' },
    { name: 'JavaScript', blurb: 'Essential for interactive web apps and modern frontend development.' },
    { name: 'Java', blurb: 'Solid OOP foundation, used for academic projects and Android basics.' },
    { name: 'HTML5', blurb: 'Semantic, accessible markup for robust and modern web pages.' },
    { name: 'CSS3', blurb: 'Styling and layout for beautiful, responsive user interfaces.' },
  ];

  return (
    <section id="about" className="relative z-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="mb-8 md:mb-10">
          <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full inline-block" style={glassStyle}>
            About
          </span>
          <h2 className="text-display text-3xl md:text-5xl mt-3 tracking-tight text-glow">About Me</h2>
        </header>

        {/* Card: avatar + provided short bio */}
        <div className="glass-surface border rounded-2xl p-6 md:p-8" style={glassStyle}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile picture */}
            <div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border shadow-sm flex-shrink-0"
              style={{ borderColor: 'var(--border-glass)' }}
            >
              <img
                src="/profile.jpg"
                alt="Naveen Kumar G profile picture"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if profile.jpg isn't present yet
                  e.currentTarget.src = '/vite.svg';
                  e.currentTarget.onerror = null;
                }}
              />
            </div>

            {/* Short bio */}
            <div className="text-center md:text-left max-w-3xl">
              <p className="text-lg leading-relaxed" style={textSecondary}>
                Hi, I&apos;m <strong className="text-glow">Naveen Kumar G</strong>, a B.Tech student in Artificial Intelligence &amp; Data Science at KGISL University. I am passionate about technology, innovation, and solving real-world problems through teamwork, rapid prototyping, and automation. I enjoy building scalable web apps, experimenting with AI/ML, and automating tasks to make life easier.
              </p>

              <div className="mt-6">
                <a
                  href="#footer"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2"
                  style={primaryButtonStyle}
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mt-10 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Programming Languages</h3>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="glass-surface border rounded-2xl p-5" style={glassStyle}>
                <div className="text-xl font-semibold text-glow">{lang.name}</div>
                <p className="mt-2 text-sm md:text-base" style={textSecondary}>{lang.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;