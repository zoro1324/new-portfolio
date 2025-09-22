import React from 'react';

function Footer() {
    return (
        <footer id="footer" className="relative z-10 mt-16 px-4 md:px-6 py-10">
            <div className="max-w-5xl mx-auto glass-surface rounded-2xl p-6 md:p-8">
                <h3 className="text-display text-2xl mb-2">Let’s build something great</h3>
                <p className="opacity-85">I’m open to opportunities, collaborations, and interesting problems.</p>
                <div className="mt-4 flex flex-wrap gap-3 items-center">
                    <a href="mailto:you@example.com" className="px-4 py-2 rounded-full font-semibold bg-[var(--accent-primary)] text-[var(--color-ink,#0f1a2a)] hover:opacity-90 transition-opacity">Email me</a>
                    <a href="#home" className="px-4 py-2 rounded-full font-semibold glass-surface hover:opacity-90 transition-opacity">Back to top</a>
                </div>
                <p className="text-sm opacity-70 mt-6">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;