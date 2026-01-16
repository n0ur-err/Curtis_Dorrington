<script lang="ts">
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Products', href: '/products' },
		{ label: 'Career', href: '/cv' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<nav class="nav">
	<a href="/" class="logo">Curtis Dorrington</a>
	<ul class="nav-links">
		{#each navItems as item}
			<li><a href={item.href} data-sveltekit-preload-data>{item.label}</a></li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 3rem;
		background: rgba(13, 13, 13, 0.9);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--c-border);
	}

	.logo {
		font-size: 1.2rem;
		font-weight: 800;
		color: var(--c-fg);
		text-decoration: none;
		transition: color 0.3s;
		letter-spacing: -0.02em;
	}

	.logo:hover {
		color: var(--c-accent);
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 2.5rem;
	}

	.nav-links a {
		text-decoration: none;
		color: var(--c-fg);
		font-size: 0.95rem;
		font-weight: 400;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--c-accent);
	}
</style>
