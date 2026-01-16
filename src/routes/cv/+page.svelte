<script lang="ts">
	interface Experience {
		id: number;
		company: string;
		role: string;
		period: string;
		responsibilities: string[];
		achievements: string[];
	}

	const experiences: Experience[] = [
		{
			id: 1,
			company: 'Airbus UK',
			role: 'Process Manufacturing Engineer',
			period: '2024 - Present',
			responsibilities: [
				'Process Manufacturing Engineer for A350 Rear Fuselage Frames',
				'SOI creation for new processes',
				'Supervision of Technicians and Operators'
			],
			achievements: [
				'Resolved 5 year FOD problem within the first 3 months',
				'Lead multiple continuous improvement activities'
			]
		},
		{
			id: 2,
			company: 'Rolls Royce',
			role: 'Manufacturing Engineer',
			period: '2017 - 2024',
			responsibilities: [
				'LEAN / 5S / Six Sigma Project Lead',
				'PMA Line Support Engineer',
				'New Product Introduction and Process Development',
				'CAD/CAM Development of CNC programs',
				'Health & Safety SME',
				'Continual Improvement Champion'
			],
			achievements: [
				'SME for Health & Safety',
				'Facilitated £0.5M savings on CNC machine purchase',
				'Multiple Bravo Awards for Innovation and Safety',
				'Delivered 100% of projects on time'
			]
		},
		{
			id: 3,
			company: 'Avalon Plastics',
			role: 'Business Development / NPI Consultant',
			period: '2017 - 2018',
			responsibilities: [
				'New Product Introduction',
				'Process development and optimization',
				'Client relationship management'
			],
			achievements: [
				'Successfully delivered multiple NPI projects',
				'Improved process efficiency across product lines'
			]
		},
		{
			id: 4,
			company: 'Trees Building Contractor',
			role: '3D CAD Specialist',
			period: '2017',
			responsibilities: [
				'3D modeling and visualization',
				'Technical drawing creation',
				'Construction documentation'
			],
			achievements: [
				'Delivered accurate 3D models for complex building projects'
			]
		},
		{
			id: 5,
			company: 'University of Bath / Diversus',
			role: 'NPI, Design & Product Development Consultant',
			period: '2017',
			responsibilities: [
				'New Product Introduction consulting',
				'Design optimization',
				'Product development strategy'
			],
			achievements: [
				'Provided expert consultation on multiple university-industry collaborations'
			]
		},
		{
			id: 6,
			company: 'GKN Aerospace',
			role: 'Inspection & Certification Engineer',
			period: '2013 - 2015',
			responsibilities: [
				'A380 component inspection',
				'Quality certification',
				'Compliance documentation',
				'Non-conformance investigation'
			],
			achievements: [
				'Maintained 100% certification accuracy',
				'Improved inspection process efficiency'
			]
		},
		{
			id: 7,
			company: 'Hewlett Packard',
			role: 'Component Engineering Support',
			period: '2010 - 2013',
			responsibilities: [
				'Component specification and selection',
				'Engineering documentation',
				'Supplier coordination',
				'Technical problem solving'
			],
			achievements: [
				'Successfully managed component lifecycle for multiple product lines'
			]
		},
		{
			id: 8,
			company: 'Airbus Aerospace',
			role: 'Apprentice → Laser Metrology Engineer',
			period: '2002 - 2010',
			responsibilities: [
				'Completed 4-year apprenticeship program',
				'Laser Metrology operations',
				'Precision measurement and quality control',
				'A380 wing assembly metrology'
			],
			achievements: [
				'Promoted from apprentice to qualified engineer',
				'Specialized in cutting-edge laser metrology technology',
				'Contributed to A380 wing assembly quality'
			]
		}
	];
</script>

<svelte:head>
	<title>CV - Curtis Dorrington</title>
</svelte:head>

<div class="cv-page">
	<div class="cv-container">
		<header class="cv-header">
			<h1>Professional Experience</h1>
			<p class="subtitle">20+ Years in Aerospace & Product Engineering</p>
		</header>

		<div class="timeline">
			{#each experiences as exp}
				<article class="experience-card">
					<div class="exp-header">
						<div class="exp-left">
							<h2>{exp.company}</h2>
							<h3>{exp.role}</h3>
						</div>
						<div class="exp-period">{exp.period}</div>
					</div>

					<div class="exp-content">
						<div class="exp-section">
							<h4>Responsibilities</h4>
							<ul>
								{#each exp.responsibilities as responsibility}
									<li>{responsibility}</li>
								{/each}
							</ul>
						</div>

						<div class="exp-section">
							<h4>Key Achievements</h4>
							<ul class="achievements">
								{#each exp.achievements as achievement}
									<li>{achievement}</li>
								{/each}
							</ul>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<footer class="cv-footer">
			<a href="/" class="back-button">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				Back to Portfolio
			</a>
		</footer>
	</div>
</div>

<style>
	.cv-page {
		min-height: 100vh;
		background: var(--c-bg);
		padding: 8rem 2rem 4rem;
	}

	.cv-container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.cv-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.cv-header h1 {
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

	.timeline {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 2px;
		background: linear-gradient(to bottom, 
			var(--c-accent) 0%, 
			var(--c-accent-2) 100%);
	}

	.experience-card {
		background: var(--c-surface);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 2rem;
		margin-left: 3rem;
		position: relative;
		transition: all 0.3s;
	}

	.experience-card::before {
		content: '';
		position: absolute;
		left: -3rem;
		top: 2rem;
		width: 1rem;
		height: 1rem;
		background: var(--c-accent);
		border-radius: 50%;
		box-shadow: 0 0 0 4px var(--c-bg), 0 0 20px var(--c-accent);
	}

	.experience-card:hover {
		border-color: var(--c-accent);
		box-shadow: 0 8px 32px rgba(255, 51, 102, 0.2);
		transform: translateX(4px);
	}

	.exp-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.5rem;
		gap: 2rem;
	}

	.exp-left h2 {
		font-size: 1.8rem;
		font-weight: 700;
		margin: 0 0 0.5rem;
		color: var(--c-text);
	}

	.exp-left h3 {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0;
		color: var(--c-accent);
	}

	.exp-period {
		font-size: 1rem;
		font-weight: 600;
		color: var(--c-accent-2);
		white-space: nowrap;
		padding: 0.5rem 1rem;
		background: rgba(0, 217, 255, 0.1);
		border-radius: 6px;
	}

	.exp-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.exp-section h4 {
		font-size: 1rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin: 0 0 0.75rem;
		color: var(--c-text-secondary);
	}

	.exp-section ul {
		margin: 0;
		padding-left: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.exp-section li {
		color: var(--c-text);
		line-height: 1.6;
		font-size: 1rem;
	}

	.achievements li {
		color: var(--c-accent-2);
		font-weight: 500;
	}

	.cv-footer {
		margin-top: 4rem;
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

	@media (max-width: 768px) {
		.cv-page {
			padding: 6rem 1rem 2rem;
		}

		.cv-header h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.2rem;
		}

		.timeline::before {
			display: none;
		}

		.experience-card {
			margin-left: 0;
		}

		.experience-card::before {
			display: none;
		}

		.exp-header {
			flex-direction: column;
			gap: 1rem;
		}

		.exp-period {
			align-self: flex-start;
		}

		.exp-left h2 {
			font-size: 1.5rem;
		}

		.exp-left h3 {
			font-size: 1.1rem;
		}
	}
</style>
