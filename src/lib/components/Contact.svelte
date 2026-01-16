<section id="contact" class="contact">
	<div class="container">
		<h2>Let's Build Something</h2>
		<p class="contact-desc">
			Interested in product design, manufacturing innovation, or collaboration?
		</p>
		<a href="mailto:curtis@dorringtonstudio.com" class="contact-btn">
			<span>Get In Touch</span>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M5 12h14M12 5l7 7-7 7"/>
			</svg>
		</a>
	</div>
</section>

<style>
	.contact {
		padding: 6rem 2rem;
		background: var(--c-bg);
		text-align: center;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	h2 {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 900;
		margin-bottom: 1.5rem;
		letter-spacing: -0.02em;
	}

	.contact-desc {
		font-size: 1.2rem;
		color: var(--c-muted);
		margin-bottom: 3rem;
	}

	.contact-btn {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 1.2rem 3rem;
		background: var(--c-accent);
		color: #000;
		text-decoration: none;
		font-weight: 700;
		font-size: 1.1rem;
		transition: all 0.3s;
	}

	.contact-btn:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 60px rgba(255, 51, 102, 0.4);
	}

	@media (max-width: 768px) {
		.contact {
			padding: 4rem 1.5rem;
		}
	}
</style>
