<section id="about" class="about">
	<div class="container">
		<div class="about-content">
			<h2 class="about-title">Building Real Products</h2>
			<div class="about-text">
				<p class="lead">
					Multi-disciplinary product creator with end-to-end experience taking ideas from concept to market. From CAD to manufacturing, patents to international distribution.
				</p>
				<div class="stats-row">
					<div class="stat">
						<div class="stat-number">20+</div>
						<div class="stat-label">Years Experience</div>
					</div>
					<div class="stat">
						<div class="stat-number">10+</div>
						<div class="stat-label">Products Shipped</div>
					</div>
					<div class="stat">
						<div class="stat-number">Multiple</div>
						<div class="stat-label">Patents</div>
					</div>
				</div>
				<p>
					Currently at <span class="highlight">Airbus UK</span>, previously at <span class="highlight">Rolls Royce</span>. Specialized in taking products from concept through patent, funding, manufacturing, and global distribution.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		padding: 6rem 2rem;
		background: var(--c-surface);
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.about-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 900;
		margin-bottom: 3rem;
		letter-spacing: -0.02em;
	}

	.about-text {
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.lead {
		font-size: 1.3rem !important;
		font-weight: 500;
		margin-bottom: 3rem;
		color: var(--c-muted);
	}

	.stats-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin: 3rem 0;
		padding: 3rem 0;
		border-top: 1px solid var(--c-border);
		border-bottom: 1px solid var(--c-border);
	}

	.stat {
		text-align: center;
	}

	.stat-number {
		font-size: 3rem;
		font-weight: 900;
		color: var(--c-accent);
		margin-bottom: 0.5rem;
		line-height: 1;
	}

	.stat-label {
		font-size: 0.9rem;
		color: var(--c-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.about-text p {
		margin-bottom: 1.5rem;
	}

	.highlight {
		color: var(--c-accent);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.about {
			padding: 4rem 1.5rem;
		}
		.stats-row {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.stat-number {
			font-size: 2.5rem;
		}
	}
</style>
