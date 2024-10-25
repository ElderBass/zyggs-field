<template>
	<button :disabled="disabled" :class="buttonStyle">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: ["buttonStyle", "disabled"],
};
</script>

<style scoped>
button {
	font-family: var(--computer-font);
	background: var(--electric-pink);
	color: var(--abyssal-black);
	border: none;
	padding: 1.2rem 2rem;
	font-size: 1rem;
	border-radius: 3rem;
}

button:hover {
	background: var(--electric-blue);
}

button:disabled {
	background: var(--disabled-gray);
	opacity: 0.5;
}

.link {
	background: none;
	color: var(--electric-pink);
	padding: 0.5rem 1rem;
}
.link:hover {
	color: var(--electric-blue);
	background: none;
}
</style>
