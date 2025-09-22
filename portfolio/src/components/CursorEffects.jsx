import React, { useCallback, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

// Global water ripple and diffusion effect (blue only, no lens)
const CursorEffects = () => {
	const { isDark } = useTheme();
	const canvasRef = useRef(null);
	const rafRef = useRef(null);
	const particlesRef = useRef([]);
	const ripplesRef = useRef([]);
	const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
	const lastSpawnRef = useRef(0);

	// Config: blue water only
		const cfgRef = useRef({
			particleRadius: [10, 28],
			particleLife: [900, 1500],
			particleSpeed: [0.02, 0.08],
			particleDrag: 0.985,
			particlesPerMove: [2, 4],
			// Ripples (smaller, slower, more transparent, single ring)
			rippleMaxRadius: 48,
			rippleLineWidth: 2.2,
			rippleDuration: 950,
			composite: 'screen',
		});

	const rand = useCallback((min, max) => Math.random() * (max - min) + min, []);
	const easeOutCubic = useCallback((t) => 1 - Math.pow(1 - t, 3), []);

	// Only blue for all particles
		const spawnParticles = useCallback((x, y, burst = false) => {
			const now = performance.now();
			const [minP, maxP] = cfgRef.current.particlesPerMove;
			if (!burst && now - lastSpawnRef.current < 12) return;
			lastSpawnRef.current = now;
			const count = burst ? Math.floor((maxP + 4) * 2) : Math.floor(rand(minP, maxP));
			const particles = particlesRef.current;
			// Improved theme match: modern blue for light, light blue for dark
			const hue = isDark ? 195 : 206;
			for (let i = 0; i < count; i++) {
				const angle = rand(0, Math.PI * 2);
				const speed = rand(cfgRef.current.particleSpeed[0], cfgRef.current.particleSpeed[1]);
				particles.push({
					x,
					y,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					r: rand(cfgRef.current.particleRadius[0], cfgRef.current.particleRadius[1]),
					life: rand(cfgRef.current.particleLife[0], cfgRef.current.particleLife[1]),
					born: now,
					hue,
				});
			}
		}, [rand, isDark]);

	// Only blue for all ripples
			const createRipple = useCallback((x, y) => {
				const now = performance.now();
				// Improved theme match: modern blue for light, light blue for dark
				const hue = isDark ? 195 : 206;
				ripplesRef.current.push({ x, y, start: now, hue });
			}, [isDark]);

	const draw = useCallback((ctx, dt) => {
		const { composite, rippleDuration, rippleLineWidth, rippleMaxRadius, particleDrag } = cfgRef.current;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.save();
		ctx.globalCompositeOperation = composite;

		const now = performance.now();
		// Blue diffusion blobs
		const particles = particlesRef.current;
				for (let i = particles.length - 1; i >= 0; i--) {
					const p = particles[i];
					const age = now - p.born;
					if (age > p.life) { particles.splice(i, 1); continue; }
					// Swirl turbulence
					const swirl = Math.sin((p.x + p.y + now) * 0.002) * 0.06;
					const c = Math.cos(swirl); const s = Math.sin(swirl);
					const vx = p.vx * c - p.vy * s; const vy = p.vx * s + p.vy * c;
					p.vx = vx * particleDrag; p.vy = vy * particleDrag;
					p.x += p.vx * dt; p.y += p.vy * dt;
					const tnorm = age / p.life; const alpha = 1 - tnorm;
					const r = p.r * (1 + tnorm * 0.3);
					// Stronger darkness for light theme, more glow for both
					const baseLight = isDark ? 70 : 32;
					const hue = p.hue;
					const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
					grad.addColorStop(0, `hsla(${hue}, 100%, ${baseLight + 18}%, ${0.18 * alpha})`);
					grad.addColorStop(0.4, `hsla(${hue + 6}, 90%, ${baseLight + 8}%, ${0.13 * alpha})`);
					grad.addColorStop(0.8, `hsla(${hue + 12}, 80%, ${baseLight}%, ${0.09 * alpha})`);
					grad.addColorStop(1, `hsla(${hue + 18}, 80%, ${baseLight - 10}%, 0)`);
					ctx.save();
					ctx.shadowColor = `hsla(${hue}, 100%, 60%, ${isDark ? 0.18 : 0.32})`;
					ctx.shadowBlur = isDark ? 16 : 28;
					ctx.fillStyle = grad;
					ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
					ctx.restore();
				}

			// Blue ripples (single, soft, realistic)
			const ripples = ripplesRef.current;
			for (let i = ripples.length - 1; i >= 0; i--) {
				const rp = ripples[i];
				const t = (now - rp.start) / rippleDuration;
				if (t >= 1) { ripples.splice(i, 1); continue; }
				const baseRadius = easeOutCubic(t) * rippleMaxRadius;
				const alpha = 0.18 * (1 - t) * (1 - t); // fade out more naturally
				const hue = rp.hue;
				ctx.save();
				ctx.globalAlpha = alpha;
				ctx.strokeStyle = `hsla(${hue}, 80%, ${isDark ? 80 : 28}%, 1)`;
				ctx.lineWidth = rippleLineWidth;
				ctx.shadowColor = `hsla(${hue}, 100%, 60%, ${isDark ? 0.18 : 0.38})`;
				ctx.shadowBlur = isDark ? 18 : 36;
				ctx.beginPath();
				ctx.arc(rp.x, rp.y, baseRadius, 0, Math.PI * 2);
				ctx.stroke();
				ctx.restore();
			}

		ctx.restore();
	}, [easeOutCubic, isDark]);

	useEffect(() => {
		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const canvas = canvasRef.current;
		if (!canvas || prefersReduced) return;
		const ctx = canvas.getContext('2d');
		let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
		const resize = () => {
			dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
			canvas.width = Math.floor(window.innerWidth * dpr);
			canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		const onMove = (e) => {
			const x = e.clientX; const y = e.clientY;
			mouseRef.current.x = x; mouseRef.current.y = y;
			spawnParticles(x, y);
		};
		const onTouch = (e) => {
			if (e.touches && e.touches[0]) { const t = e.touches[0]; onMove({ clientX: t.clientX, clientY: t.clientY }); }
		};
			const onClick = (e) => {
				const x = e.clientX; const y = e.clientY;
				createRipple(x, y);
				spawnParticles(x, y, true);
				// If animation frame was stopped for any reason, restart it
				if (!rafRef.current) {
					let lastTime = performance.now();
					const ctx = canvas.getContext('2d');
					const loop = (t) => {
						const dt = Math.min(50, t - lastTime); lastTime = t;
						draw(ctx, dt);
						rafRef.current = requestAnimationFrame(loop);
					};
					rafRef.current = requestAnimationFrame(loop);
				}
			};
		window.addEventListener('mousemove', onMove, { passive: true });
		window.addEventListener('touchmove', onTouch, { passive: true });
		window.addEventListener('click', onClick, { passive: true });
		window.addEventListener('resize', resize);
		let lastTime = performance.now();
		const loop = (t) => {
			const dt = Math.min(50, t - lastTime); lastTime = t;
			draw(ctx, dt);
			rafRef.current = requestAnimationFrame(loop);
		};
		rafRef.current = requestAnimationFrame(loop);
		// Pause when tab is hidden
		const onVis = () => {
			if (document.hidden && rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
			else if (!document.hidden && !rafRef.current) { lastTime = performance.now(); rafRef.current = requestAnimationFrame(loop); }
		};
		document.addEventListener('visibilitychange', onVis);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('touchmove', onTouch);
			window.removeEventListener('click', onClick);
			window.removeEventListener('resize', resize);
			document.removeEventListener('visibilitychange', onVis);
			particlesRef.current = []; ripplesRef.current = [];
		};
	}, [createRipple, draw, spawnParticles]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 998 }}
		/>
	);
};

export default CursorEffects;
