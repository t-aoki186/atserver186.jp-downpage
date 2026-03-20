<script lang="ts">
	import './layout.css';
	import './custom-tailwind.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="/fontawesome/css/all.min.css" />
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
