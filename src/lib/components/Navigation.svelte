<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	
	let menuOpen = $state(false);
</script>

<nav>
	<div class="wrapper">
		<a href="{base}/" class="brand">
			<span class="first">Curtis</span>
			<span class="last">Dorrington</span>
		</a>
		
		<div class="links">
			<a href="{base}/" class:active={$page.url.pathname === `${base}/`}>Home</a>
			<a href="{base}/products" class:active={$page.url.pathname.includes('products')}>Products</a>
			<a href="{base}/cv" class:active={$page.url.pathname.includes('cv')}>Career</a>
			<a href="#contact">Contact</a>
		</div>

		<button class="menu-btn" onclick={() => menuOpen = !menuOpen}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>

	{#if menuOpen}
		<div class="mobile-menu">
			<a href="{base}/" onclick={() => menuOpen = false}>Home</a>
			<a href="{base}/products" onclick={() => menuOpen = false}>Products</a>
			<a href="{base}/cv" onclick={() => menuOpen = false}>Career</a>
			<a href="#contact" onclick={() => menuOpen = false}>Contact</a>
		</div>
	{/if}
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(13, 13, 13, 0.95);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 51, 102, 0.15);
	}

	.wrapper {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 3rem;
	}

	.brand {
		display: flex;
		gap: 0.5rem;
		font-size: 1.25rem;
		font-weight: 700;
		text-decoration: none;
		letter-spacing: -0.02em;
	}

	.first {
		color: #fff;
	}

	.last {
		color: var(--c-accent);
	}

	.links {
		display: flex;
		gap: 2.5rem;
		align-items: center;
	}

	.links a {
		color: rgba(255, 255, 255, 0.65);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		transition: color 0.2s;
		position: relative;
	}

	.links a::before {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 2px;
		background: var(--c-accent);
		transition: width 0.2s;
	}

	.links a:hover,
	.links a.active {
		color: #fff;
	}

	.links a:hover::before,
	.links a.active::before {
		width: 100%;
	}

	.menu-btn {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px;
	}

	.menu-btn span {
		display: block;
		width: 24px;
		height: 2px;
		background: var(--c-accent);
		transition: all 0.3s;
	}

	.mobile-menu {
		display: none;
	}

	@media (max-width: 768px) {
		.wrapper {
			padding: 1.25rem 2rem;
		}

		.brand {
			font-size: 1.1rem;
		}

		.links {
			display: none;
		}

		.menu-btn {
			display: flex;
		}

		.mobile-menu {
			display: flex;
			flex-direction: column;
			padding: 1rem 2rem 2rem;
			gap: 1.5rem;
			background: rgba(13, 13, 13, 0.98);
			border-top: 1px solid rgba(255, 51, 102, 0.1);
		}

		.mobile-menu a {
			color: rgba(255, 255, 255, 0.7);
			text-decoration: none;
			font-size: 1.1rem;
			font-weight: 500;
			padding: 0.5rem 0;
			transition: color 0.2s;
		}

		.mobile-menu a:hover {
			color: var(--c-accent);
		}
	}

	@media (max-width: 600px) {
		.wrapper {
			padding: 1rem 1.5rem;
		}

		.brand {
			font-size: 1rem;
		}
	}
</style>
