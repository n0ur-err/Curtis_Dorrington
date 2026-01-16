<script lang="ts">
	interface Product {
		id: number;
		title: string;
		category: string;
		shortDesc: string;
		fullDesc: string;
		year: string;
		tags: string[];
		image: string;
		stats?: {
			label: string;
			value: string;
		}[];
	}

	let expandedId = $state<number | null>(null);

	const products: Product[] = [
		{
			id: 1,
			title: 'Quick Caps',
			category: 'Bicycle Wheel Security',
			shortDesc: 'International patent. Dragons Den funded. Worldwide sales.',
			fullDesc: 'Self drafted granted international patent. Dragons Den Type Investment Funded. Crowd Funded Via Kickstarter. UK and International manufacturing & assembly. Die Casting, Extruding, CNC machining. Design to Manufacture - Worldwide sales and distribution.',
			year: '2015',
			tags: ['Patent', 'Dragons Den', 'Kickstarter', 'Manufacturing'],
			image: '/src/img/Quick_Caps_Aldridge.webp',
			stats: [
				{ label: 'Funding', value: 'Dragons Den + Kickstarter' },
				{ label: 'Distribution', value: 'Worldwide' },
				{ label: 'Status', value: 'Patent Granted' }
			]
		},
		{
			id: 2,
			title: 'Vape Any Wear',
			category: 'For vaping respectfully',
			shortDesc: 'Material sciences innovation. Investment funded. UK manufacturing.',
			fullDesc: 'Investment Funded. UK manufacturing & assembly. Material Sciences, Principles of material attraction, and filtration. Design to Manufacture - Worldwide sales and distribution.',
			year: '2017',
			tags: ['Investment Funded', 'Materials', 'UK Manufacturing', 'Filtration'],
			image: '/src/img/Vape_Any_Wear.webp',
			stats: [
				{ label: 'Technology', value: 'Material Sciences' },
				{ label: 'Manufacturing', value: 'UK Assembly' },
				{ label: 'Distribution', value: 'Worldwide' }
			]
		},
		{
			id: 3,
			title: 'ADDSTRAP',
			category: 'Healthcare Device',
			shortDesc: 'Modular diabetes medicine carrier. Healthcare-specific solution.',
			fullDesc: 'Modular carry solution for temp controlled medicines. Self Funded. UK manufacturing & assembly. Health Care Specific to Diabetes. Design to Manufacture.',
			year: '2018',
			tags: ['Healthcare', 'Diabetes', 'Self Funded', 'Modular'],
			image: '/src/img/ADDSTRAP.webp',
			stats: [
				{ label: 'Market', value: 'Healthcare / Diabetes' },
				{ label: 'Funding', value: 'Self Funded' },
				{ label: 'Type', value: 'Temperature Controlled' }
			]
		},
		{
			id: 4,
			title: 'Flava Tips',
			category: 'Consumer Innovation',
			shortDesc: 'World\'s first flavour-enhancing vape mouthpiece. Scent infusion technology.',
			fullDesc: 'Worlds first flavour enhancing vape mouth piece. Investment Funded. UK manufacturing & assembly. Injection Moulding, Scent Infusion. Partnered with largest UK Aroma Company. Design to Manufacture. UK Distribution.',
			year: '2016',
			tags: ['World First', 'Partnership', 'Scent Tech', 'Injection Moulding'],
			image: '/src/img/Flava_Tips.webp',
			stats: [
				{ label: 'Innovation', value: 'World First' },
				{ label: 'Partnership', value: 'UK Largest Aroma Co.' },
				{ label: 'Technology', value: 'Scent Infusion' }
			]
		},
		{
			id: 5,
			title: 'T-ShirtPrinter.com',
			category: 'E-Commerce Platform',
			shortDesc: 'Custom clothing platform. High-end print on demand solution.',
			fullDesc: 'Fully customer focused for print on demand products. Self Funded. UK manufacturing & assembly. High end Custom Clothing. Design to Manufacture.',
			year: '2019',
			tags: ['E-Commerce', 'Platform', 'Print', 'Custom Clothing'],
			image: '/src/img/T-Shirt_Printer.webp',
			stats: [
				{ label: 'Type', value: 'E-Commerce Platform' },
				{ label: 'Focus', value: 'Customer-Centric' },
				{ label: 'Market', value: 'High-End Custom' }
			]
		},
		{
			id: 6,
			title: 'Impervious Drip Tips',
			category: 'Vape Accessory',
			shortDesc: 'Certified anti-microbial vape accessory with thermal dispersion.',
			fullDesc: 'Certified anti-microbial, hot liquid dispersing vape accessory. Investment Funded. UK manufacturing & assembly. Injection Moulding. Design to Manufacture. UK Distribution.',
			year: '2016',
			tags: ['Certified', 'Anti-Microbial', 'Innovation', 'Thermal'],
			image: '/src/img/Impervious_Drip_tips.webp',
			stats: [
				{ label: 'Certification', value: 'Anti-Microbial' },
				{ label: 'Technology', value: 'Thermal Dispersion' },
				{ label: 'Funding', value: 'Investment Backed' }
			]
		}
	];

	function toggleExpand(id: number) {
		expandedId = expandedId === id ? null : id;
	}
</script>

<svelte:head>
	<title>Products - Curtis Dorrington</title>
</svelte:head>

<div class="products-page">
	<div class="products-container">
		<header class="products-header">
			<h1>Product Portfolio</h1>
			<p class="subtitle">Innovative Solutions from Concept to Market</p>
		</header>

		<div class="products-grid">
			{#each products as product}
				<article 
					class="product-card" 
					class:expanded={expandedId === product.id}
					onclick={() => toggleExpand(product.id)}
				>
					<div class="card-inner">
						<div class="card-front">
							<div class="product-image">
								<img src="{product.image}" alt="{product.title}" />
								<div class="image-overlay"></div>
								<div class="product-year">{product.year}</div>
							</div>
							
							<div class="product-info">
								<div class="product-category">{product.category}</div>
								<h2 class="product-title">{product.title}</h2>
								<p class="product-short-desc">{product.shortDesc}</p>
								
								<div class="product-tags">
									{#each product.tags as tag}
										<span class="tag">{tag}</span>
									{/each}
								</div>

								<button class="expand-btn">
									{expandedId === product.id ? 'Show Less' : 'View Details'}
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</button>
							</div>
						</div>

						{#if expandedId === product.id}
							<div class="card-expanded">
								<div class="expanded-content">
									<h3>Full Description</h3>
									<p class="full-description">{product.fullDesc}</p>

									{#if product.stats}
										<div class="product-stats">
											{#each product.stats as stat}
												<div class="stat-item">
													<div class="stat-label">{stat.label}</div>
													<div class="stat-value">{stat.value}</div>
												</div>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						{/if}
					</div>
				</article>
			{/each}
		</div>

		<footer class="products-footer">
			<a href="/" class="back-button">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				Back to Home
			</a>
		</footer>
	</div>
</div>

<style>
	.products-page {
		min-height: 100vh;
		background: var(--c-bg);
		padding: 8rem 2rem 4rem;
	}

	.products-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.products-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.products-header h1 {
		font-size: 4rem;
		font-weight: 900;
		margin: 0 0 1rem;
		background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-2) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.5rem;
		color: var(--c-text-secondary);
		font-weight: 300;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.product-card {
		background: var(--c-surface);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		overflow: hidden;
		cursor: pointer;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.product-card:hover {
		border-color: var(--c-accent);
		box-shadow: 0 12px 40px rgba(255, 51, 102, 0.3);
		transform: translateY(-4px);
	}

	.product-card.expanded {
		grid-column: span 2;
		transform: scale(1);
	}

	.product-card.expanded:hover {
		transform: scale(1);
	}

	.card-inner {
		display: flex;
		flex-direction: column;
	}

	.card-front {
		display: flex;
		flex-direction: column;
	}

	.product-image {
		position: relative;
		height: 300px;
		overflow: hidden;
	}

	.product-card.expanded .product-image {
		height: 400px;
	}

	.product-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s;
	}

	.product-card:hover .product-image img {
		transform: scale(1.05);
	}

	.image-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, 
			rgba(0, 0, 0, 0) 0%, 
			rgba(0, 0, 0, 0.5) 70%,
			rgba(0, 0, 0, 0.9) 100%);
	}

	.product-year {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		font-size: 3rem;
		font-weight: 900;
		color: rgba(255,255,255,0.2);
		line-height: 1;
		z-index: 2;
		text-shadow: 0 2px 10px rgba(0,0,0,0.5);
	}

	.product-info {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.product-category {
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--c-accent);
		font-weight: 600;
	}

	.product-title {
		font-size: 2rem;
		font-weight: 700;
		margin: 0;
		color: var(--c-text);
	}

	.product-short-desc {
		font-size: 1.1rem;
		color: var(--c-text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.product-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.tag {
		padding: 0.4rem 0.8rem;
		background: rgba(255, 51, 102, 0.1);
		border: 1px solid rgba(255, 51, 102, 0.3);
		border-radius: 6px;
		font-size: 0.85rem;
		color: var(--c-accent);
		font-weight: 500;
	}

	.expand-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--c-accent);
		color: var(--c-bg);
		border: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s;
		margin-top: 0.5rem;
		align-self: flex-start;
	}

	.expand-btn:hover {
		background: var(--c-accent-2);
		transform: translateX(4px);
	}

	.expand-btn svg {
		transition: transform 0.3s;
	}

	.product-card.expanded .expand-btn svg {
		transform: rotate(180deg);
	}

	.card-expanded {
		padding: 2rem;
		background: rgba(255, 51, 102, 0.05);
		border-top: 2px solid rgba(255, 51, 102, 0.2);
		animation: expandIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	@keyframes expandIn {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 1000px;
		}
	}

	.expanded-content h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: var(--c-accent);
	}

	.full-description {
		font-size: 1.1rem;
		color: var(--c-text);
		line-height: 1.8;
		margin: 0 0 2rem;
	}

	.product-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
	}

	.stat-item {
		padding: 1.5rem;
		background: var(--c-surface);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
	}

	.stat-label {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--c-text-secondary);
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.stat-value {
		font-size: 1.1rem;
		color: var(--c-accent-2);
		font-weight: 600;
	}

	.products-footer {
		text-align: center;
		padding: 2rem 0;
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		background: var(--c-surface);
		border: 2px solid var(--c-accent);
		border-radius: 8px;
		color: var(--c-accent);
		font-weight: 600;
		font-size: 1.1rem;
		text-decoration: none;
		transition: all 0.3s;
	}

	.back-button:hover {
		background: var(--c-accent);
		color: var(--c-bg);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(255, 51, 102, 0.4);
	}

	.back-button svg {
		transition: transform 0.3s;
	}

	.back-button:hover svg {
		transform: translateX(-4px);
	}

	@media (max-width: 1200px) {
		.product-card.expanded {
			grid-column: span 1;
		}
	}

	@media (max-width: 768px) {
		.products-page {
			padding: 6rem 1rem 2rem;
		}

		.products-header h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.2rem;
		}

		.products-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.product-card.expanded {
			grid-column: span 1;
		}

		.product-image {
			height: 250px;
		}

		.product-card.expanded .product-image {
			height: 300px;
		}

		.product-title {
			font-size: 1.5rem;
		}

		.product-stats {
			grid-template-columns: 1fr;
		}
	}
</style>
