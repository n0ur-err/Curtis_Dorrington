<section id="home" class="hero">
	<div class="hero-bg"></div>
	<div class="hero-content">
		<div class="hero-label">Product Design Engineer</div>
		<h1 class="hero-title">
			Curtis<br/>
			<span class="gradient-text">Dorrington</span>
		</h1>
		<p class="hero-desc">Transforming concepts into manufactured reality. From patent to production.</p>
		<a href="#work" class="scroll-cta">
			<span>Explore Work</span>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
			</svg>
		</a>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 2rem;
		position: relative;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background: 
			radial-gradient(circle at 20% 50%, rgba(255, 51, 102, 0.15) 0%, transparent 50%),
			radial-gradient(circle at 80% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%);
		z-index: 0;
	}

	.hero-content {
		text-align: center;
		position: relative;
		z-index: 1;
		max-width: 1000px;
	}

	.hero-label {
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.3em;
		color: var(--c-accent);
		margin-bottom: 2rem;
	}

	.hero-title {
		font-size: clamp(4rem, 12vw, 9rem);
		font-weight: 900;
		line-height: 0.95;
		margin-bottom: 2rem;
		letter-spacing: -0.02em;
	}

	.gradient-text {
		background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-2) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-desc {
		font-size: clamp(1.1rem, 2vw, 1.4rem);
		color: var(--c-muted);
		margin-bottom: 4rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		font-weight: 400;
	}

	.scroll-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--c-fg);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		padding: 1rem 2rem;
		border: 1px solid var(--c-border);
		transition: all 0.3s;
		background: rgba(255,255,255,0.02);
	}

	.scroll-cta:hover {
		border-color: var(--c-accent);
		background: rgba(255, 51, 102, 0.1);
		transform: translateY(-2px);
	}

	.scroll-cta svg {
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(5px); }
	}

	@media (max-width: 768px) {
		.hero {
			min-height: 90vh;
		}
		.hero-title {
			line-height: 1;
		}
	}
</style>
