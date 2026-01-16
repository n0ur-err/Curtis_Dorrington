<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Inventions from '$lib/components/Inventions.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Curtis Dorrington // Product Design Engineer</title>
	<meta name="description" content="Product Design Engineer & Inventor - Turning ideas into real-world innovation" />
</svelte:head>

<Navigation />
<main>
	<Hero />
	<About />
	<Inventions />
	<Contact />
</main>
<Footer />

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
