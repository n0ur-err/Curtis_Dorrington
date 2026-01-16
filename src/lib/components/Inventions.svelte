<script lang="ts">
	import { base } from '$app/paths';

	interface Product {
		id: number;
		title: string;
		category: string;
		desc: string;
		year: string;
		tags: string[];
		size: 'large' | 'medium';
		image: string;
	}

	const products: Product[] = [
		{
			id: 1,
			title: 'Quick Caps',
			category: 'Bicycle Wheel Security',
			desc: 'Self drafted granted international patent. Dragons Den Type Investment Funded. Crowd Funded Via Kickstarter. UK and International manufacturing & assembly. Die Casting, Extruding, CNC machining. Design to Manufacture - Worldwide sales and distribution.',
			year: '2015',
			tags: ['Patent', 'Dragons Den', 'Kickstarter'],
			size: 'large',
			image: `${base}/img/Quick_Caps_Aldridge.webp`
		},
		{
			id: 2,
			title: 'Vape Any Wear',
			category: 'For vaping respectfully',
			desc: 'Investment Funded. UK manufacturing & assembly. Material Sciences, Principles of material attraction, and filtration. Design to Manufacture - Worldwide sales and distribution.',
			year: '2017',
			tags: ['Investment Funded', 'Materials', 'UK Manufacturing'],
			size: 'large',
			image: `${base}/img/Vape_Any_Wear.webp`
		},
		{
			id: 3,
			title: 'ADDSTRAP',
			category: 'Healthcare Device',
			desc: 'Modular carry solution for temp controlled medicines. Self Funded. UK manufacturing & assembly. Health Care Specific to Diabetes. Design to Manufacture.',
			year: '2018',
			tags: ['Healthcare', 'Diabetes', 'Self Funded'],
			size: 'medium',
			image: `${base}/img/ADDSTRAP.webp`
		},
		{
			id: 4,
			title: 'Flava Tips',
			category: 'Consumer Innovation',
			desc: 'Worlds first flavour enhancing vape mouth piece. Investment Funded. UK manufacturing & assembly. Injection Moulding, Scent Infusion. Partnered with largest UK Aroma Company. Design to Manufacture. UK Distribution.',
			year: '2016',
			tags: ['World First', 'Partnership', 'Scent Tech'],
			size: 'medium',
			image: `${base}/img/Flava_Tips.webp`
		},
		{
			id: 5,
			title: 'T-ShirtPrinter.com',
			category: 'E-Commerce Platform',
			desc: 'Fully customer focused for print on demand products. Self Funded. UK manufacturing & assembly. High end Custom Clothing. Design to Manufacture.',
			year: '2019',
			tags: ['E-Commerce', 'Platform', 'Print'],
			size: 'medium',
			image: `${base}/img/T-Shirt_Printer.webp`
		},
		{
			id: 6,
			title: 'Impervious Drip Tips',
			category: 'Vape Accessory',
			desc: 'Certified anti-microbial, hot liquid dispersing vape accessory. Investment Funded. UK manufacturing & assembly. Injection Moulding. Design to Manufacture. UK Distribution.',
			year: '2016',
			tags: ['Certified', 'Anti-Microbial', 'Innovation'],
			size: 'medium',
			image: `${base}/img/Impervious_Drip_tips.webp`
		}
	];
</script>

<section id="work" class="work">
	<div class="container">
		<div class="section-header">
			<h2>Selected Projects</h2>
			<p>From patent to production — real products that ship</p>
		</div>

		<div class="bento-grid">
			{#each products as product}
				<article class="project-card {product.size}" data-id={product.id}>
					<div class="card-image">
						<img src="{product.image}" alt="{product.title}" />
						<div class="image-gradient"></div>
						<div class="card-year">{product.year}</div>
					</div>
					<div class="card-content">
						<div class="card-category">{product.category}</div>
						<h3 class="card-title">{product.title}</h3>
						<p class="card-desc">{product.desc}</p>
						<div class="card-tags">
							{#each product.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.work {
		padding: 6rem 2rem;
		background: var(--c-bg);
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.section-header {
		margin-bottom: 4rem;
	}

	.section-header h2 {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 900;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.section-header p {
		font-size: 1.2rem;
		color: var(--c-muted);
	}

	.bento-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		grid-auto-rows: 400px;
	}

	.project-card {
		background: var(--c-surface);
		border: 1px solid var(--c-border);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
	}

	.project-card.large {
		grid-column: span 2;
		grid-row: span 2;
	}

	.project-card:hover {
		transform: translateY(-8px);
		border-color: var(--c-accent);
		box-shadow: 0 20px 60px rgba(255, 51, 102, 0.2);
	}

	.card-image {
		position: relative;
		flex: 1;
		background: #1a1a1a;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s;
	}

	.project-card:hover .card-image img {
		transform: scale(1.05);
	}

	.image-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, 
			rgba(0, 0, 0, 0) 0%, 
			rgba(0, 0, 0, 0.3) 50%,
			rgba(0, 0, 0, 0.8) 100%);
		z-index: 1;
	}

	.card-year {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		font-size: 5rem;
		font-weight: 900;
		color: rgba(255,255,255,0.1);
		line-height: 1;
		z-index: 2;
		text-shadow: 0 2px 10px rgba(0,0,0,0.5);
	}

	.card-content {
		padding: 2rem;
		background: var(--c-surface);
	}

	.card-category {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--c-accent);
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.card-title {
		font-size: 1.8rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.card-desc {
		color: var(--c-muted);
		line-height: 1.6;
		margin-bottom: 1.25rem;
		font-size: 0.95rem;
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		padding: 0.3rem 0.75rem;
		font-size: 0.7rem;
		background: rgba(255, 51, 102, 0.1);
		border: 1px solid rgba(255, 51, 102, 0.2);
		color: var(--c-accent);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	@media (max-width: 1024px) {
		.bento-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		.project-card.large {
			grid-column: span 2;
			grid-row: span 1;
		}
	}

	@media (max-width: 768px) {
		.work {
			padding: 4rem 1.5rem;
		}
		.bento-grid {
			grid-template-columns: 1fr;
			grid-auto-rows: 350px;
		}
		.project-card.large {
			grid-column: span 1;
			grid-row: span 1;
		}
	}
</style>
