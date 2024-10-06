<template>
	<button :class="type">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: ["type"],
};
</script>

<style scoped>
button {
	font-family: var(--computer-font);
	background: var(--electric-pink);
	color: var(--abyssal-black);
	border: none;
	padding: 1.5rem 2rem;
	font-size: 1rem;
	border-radius: 3rem;
}

button:hover {
	background: var(--electric-blue);
}

.link {
	background: none;
	color: var(--electric-pink);
	padding: 0.5rem 1rem;
}
</style>
