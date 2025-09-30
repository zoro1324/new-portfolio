import React from 'react';

function SocialIcon({ type, href, label }) {
    // Add ring and color on hover for all icons
    const common = 'inline-flex items-center justify-center w-10 h-10 rounded-full glass-surface transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] hover:ring-2 hover:ring-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)]';
    return (
        <a className={common} href={href} aria-label={label} target="_blank" rel="noreferrer noopener">
            {type === 'github' && (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12.4c0 5.26 3.42 9.72 8.17 11.3.6.12.83-.26.83-.58 0-.28-.01-1.03-.02-2.02-3.32.74-4.02-1.64-4.02-1.64-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.77-1.66-2.65-.31-5.44-1.36-5.44-6.06 0-1.34.47-2.43 1.24-3.28-.12-.31-.54-1.57.12-3.26 0 0 1.01-.33 3.32 1.25.96-.27 1.98-.4 3-.41 1.02 0 2.04.14 3 .41 2.3-1.58 3.31-1.25 3.31-1.25.67 1.69.25 2.95.12 3.26.77.85 1.24 1.94 1.24 3.28 0 4.72-2.79 5.74-5.45 6.05.43.37.82 1.1.82 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.7.84.58A11.52 11.52 0 0 0 23.5 12.4 11.5 11.5 0 0 0 12 .5Z" />
                </svg>
            )}
            {type === 'linkedin' && (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.9h-4v15.6zM8.5 7.9h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.1v9.6h-4v-8.5c0-2 0-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3v8.7h-4V7.9z" />
                </svg>
            )}
            {type === 'mail' && (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M2 5h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 8 9-6H3l9 6zm-2-1-8 5h20l-8-5-2 1-2-1z" />
                </svg>
            )}
        </a>
    );
}

function Stat({ value, label, index }) {
    // Add animation delay based on index for staggered effect, add hover effect
    return (
        <div
            className="glass-surface rounded-xl px-5 py-4 text-left animate-fadeinup transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            style={{
                animationDelay: `${0.1 + (index || 0) * 0.12}s`,
                animationFillMode: 'both',
            }}
        >
            <div className="text-2xl font-semibold text-glow" style={{ color: 'var(--accent-primary)' }}>{value}</div>
            <div className="text-sm opacity-80">{label}</div>
        </div>
    );
}

function Chip({ children, index }) {
    // Add animation delay based on index for staggered effect, add hover effect
    return (
        <span
            className="px-3 py-1 rounded-full text-sm glass-surface border border-[var(--border-glass)] animate-fadeinup transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            style={{
                animationDelay: `${0.3 + (index || 0) * 0.07}s`,
                animationFillMode: 'both',
            }}
        >
            {children}
        </span>
    );
}

function Home() {
    // Professional, concise details - hero section focused
    const details = {
        name: 'Naveen Kumar G',
        role: 'B.Tech AI & DS Student · Full‑Stack & Data Science Enthusiast',
        tagline: 'Bringing ideas to life through code and data analysis',
        location: 'Coimbatore',
        projects: '10+',
        email: 'naveen13524g@gmail.com',
        resumeUrl: '#', // Add your actual resume URL here
        socials: {
            github: 'https://github.com/zoro1324',
            linkedin: 'https://www.linkedin.com/in/your-username/'
        },
        // Core tech stack - just highlight main technologies
        stack: ['React', 'Python', 'JavaScript', 'Data Science', 'Machine Learning'],
        moreStack: 3 // Indicating there are more technologies
    };

    return (
        <section id="home" className="relative z-10 pt-24 md:pt-32 pb-12">
            {/* Hero Background with animated gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="w-full h-full bg-white/60 dark:bg-[#0a0a1a]/60 backdrop-blur-[2px]" />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-[var(--accent-secondary)]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-0 flex flex-col items-center text-center">
                {/* Animated welcome banner */}
                <div className="mb-4 px-4 py-1 rounded-full glass-surface animate-fadeinslow border border-[var(--border-glass)]">
                    <span className="text-xs tracking-widest uppercase opacity-80">Welcome to my portfolio</span>
                </div>
                <h1 className="text-display text-5xl md:text-6xl font-bold leading-tight mb-2 flex flex-wrap items-center justify-center" style = {{color:'white'}}>
                    <span>Hi, I’m&nbsp;</span>
                    <span
                        className="text-glow typewriter"
                        style={{ color: 'var(--accent-primary)', whiteSpace: 'nowrap', display: 'inline-block' }}
                    >
                        {details.name}
                    </span>
                </h1>
                {/* Role title with subtle animation */}
                <h2 className="mt-1 text-xl md:text-2xl font-medium opacity-90 mb-3 animate-fadeinup" style={{animationDelay: '0.6s'}}>
                    {details.role}
                </h2>
                {/* Tagline - short description */}
                <p className="mt-2 text-base md:text-lg opacity-80 max-w-lg mx-auto mb-6 animate-fadeinup" 
                   style={{ 
                       lineHeight: 1.7, 
                       color: 'var(--text-primary)',
                       animationDelay: '0.8s' 
                   }}>
                    {details.tagline}
                </p>
                {/* Primary Call-to-Actions */}
                <div className="mt-4 flex items-center justify-center gap-3 flex-wrap animate-fadeinup" style={{animationDelay: '1s'}}>
                    <a
                        href="#about"
                        className="px-6 py-3 rounded-full font-medium bg-[var(--accent-primary)] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                    >
                        About Me
                    </a>
                    <a
                        href={details.resumeUrl}
                        className="px-6 py-3 rounded-full font-medium border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-transparent shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[var(--accent-primary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                        target={details.resumeUrl?.startsWith('http') ? '_blank' : undefined}
                        rel={details.resumeUrl?.startsWith('http') ? 'noreferrer noopener' : undefined}
                    >
                        Download CV
                    </a>
                </div>
                
                {/* Social links */}
                <div className="mt-6 animate-fadeinup" style={{animationDelay: '1.2s'}}>
                    <div className="flex items-center justify-center gap-3">
                        <SocialIcon type="github" href={details.socials.github} label="GitHub" />
                        <SocialIcon type="linkedin" href={details.socials.linkedin} label="LinkedIn" />
                        <SocialIcon type="mail" href={`mailto:${details.email}`} label="Send email" />
                    </div>
                </div>
                {/* Quick highlight stats */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-sm mx-auto">
                    <Stat value={details.projects} label="Projects" index={0} />
                    <Stat value={details.location} label="Location" index={1} />
                </div>
                {/* Scroll down indicator */}
                <div className="mt-12 animate-bounce opacity-70">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5v14m0 0l-4-4m4 4l4-4"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Home;