<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-left">
				<div class="footer-name">Curtis Dorrington</div>
				<div class="footer-title">Product Design Engineer</div>
			</div>
			<div class="footer-right">
				<p>&copy; 2026 All rights reserved</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 3rem 2rem;
		background: var(--c-surface);
		border-top: 1px solid var(--c-border);
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer-name {
		font-weight: 700;
		margin-bottom: 0.25rem;
	}

	.footer-title {
		color: var(--c-muted);
		font-size: 0.9rem;
	}

	.footer-right p {
		color: var(--c-muted);
		font-size: 0.85rem;
	}

	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			gap: 1.5rem;
			text-align: center;
		}
	}
</style>
