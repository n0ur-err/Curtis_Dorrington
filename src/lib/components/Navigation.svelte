<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	
	let mobileMenuOpen = $state(false);
	
	const navItems = [
		{ label: 'Home', href: `${base}/`, icon: '🏠' },
		{ label: 'Products', href: `${base}/products`, icon: '🚀' },
		{ label: 'Career', href: `${base}/cv`, icon: '💼' },
		{ label: 'Contact', href: '#contact', icon: '📧' }
	];

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="nav">
	<div class="nav-container">
		<a href="{base}/" class="logo">
			<span class="logo-text">Curtis</span>
			<span class="logo-accent">Dorrington</span>
			<span class="logo-subtitle">Product Design Engineer</span>
		</a>
		
		<ul class="nav-links">
			{#each navItems as item, index}
				<li style="--index: {index}">
					<a href={item.href} class="nav-link" data-text={item.label}>
						<span class="link-icon">{item.icon}</span>
						<span class="link-text">{item.label}</span>
					</a>
				</li>
			{/each}
		</ul>

		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle menu">
			<span class="hamburger" class:active={mobileMenuOpen}></span>
		</button>
	</div>

	{#if mobileMenuOpen}
		<div class="mobile-menu" onclick={closeMenu}>
			<ul class="mobile-links">
				{#each navItems as item}
					<li>
						<a href={item.href}>
							<span class="mobile-icon">{item.icon}</span>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(13, 13, 13, 0.95);
		backdrop-filter: blur(30px);
		border-bottom: 1px solid rgba(255, 51, 102, 0.1);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
	}

	.nav::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, 
			transparent 0%, 
			var(--c-accent) 50%, 
			transparent 100%);
		opacity: 0.3;
	}

	.nav-container {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 3rem;
	}

	.logo {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		text-decoration: none;
		position: relative;
	}

	.logo-text {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--c-text);
		letter-spacing: -0.03em;
		line-height: 1;
		transition: transform 0.3s;
	}

	.logo-accent {
		font-size: 1.5rem;
		font-weight: 900;
		background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-2) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: -0.03em;
		line-height: 1;
		transition: transform 0.3s;
	}

	.logo-subtitle {
		font-size: 0.65rem;
		color: var(--c-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-weight: 600;
		margin-top: 0.25rem;
	}

	.logo:hover .logo-text {
		transform: translateX(-2px);
	}

	.logo:hover .logo-accent {
		transform: translateX(2px);
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.nav-links li {
		animation: slideDown 0.4s ease-out backwards;
		animation-delay: calc(var(--index) * 0.1s);
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.25rem;
		text-decoration: none;
		color: var(--c-text);
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 8px;
		position: relative;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.nav-link::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-2) 100%);
		opacity: 0;
		transition: opacity 0.3s;
	}

	.nav-link::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		right: 0;
		bottom: -2px;
		font-size: 0.7rem;
		font-weight: 700;
		text-align: center;
		color: var(--c-accent);
		opacity: 0;
		transform: translateY(10px);
		transition: all 0.3s;
	}

	.nav-link:hover::before {
		opacity: 0.1;
	}

	.nav-link:hover {
		transform: translateY(-2px);
		color: var(--c-accent);
	}

	.link-icon {
		font-size: 1.1rem;
		transition: transform 0.3s;
	}

	.nav-link:hover .link-icon {
		transform: scale(1.2) rotate(5deg);
	}

	.link-text {
		position: relative;
		z-index: 1;
	}

	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 1001;
	}

	.hamburger {
		display: block;
		width: 30px;
		height: 2px;
		background: var(--c-accent);
		position: relative;
		transition: all 0.3s;
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		width: 30px;
		height: 2px;
		background: var(--c-accent);
		transition: all 0.3s;
	}

	.hamburger::before {
		top: -8px;
	}

	.hamburger::after {
		bottom: -8px;
	}

	.hamburger.active {
		background: transparent;
	}

	.hamburger.active::before {
		top: 0;
		transform: rotate(45deg);
	}

	.hamburger.active::after {
		bottom: 0;
		transform: rotate(-45deg);
	}

	.mobile-menu {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(13, 13, 13, 0.98);
		backdrop-filter: blur(20px);
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeIn 0.3s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.mobile-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		text-align: center;
	}

	.mobile-links a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		font-size: 2rem;
		font-weight: 700;
		color: var(--c-text);
		text-decoration: none;
		transition: all 0.3s;
	}

	.mobile-links a:hover {
		color: var(--c-accent);
		transform: translateX(10px);
	}

	.mobile-icon {
		font-size: 2.5rem;
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem 1.5rem;
		}

		.logo-text,
		.logo-accent {
			font-size: 1.2rem;
		}

		.logo-subtitle {
			font-size: 0.55rem;
		}

		.nav-links {
			display: none;
		}

		.mobile-toggle {
			display: block;
		}
	}
</style>
