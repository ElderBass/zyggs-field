<template>
	<div class="baseCard">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.baseCard {
	background-color: var(--abyssal-black);
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 8px var(--electric-pink);
	width: 100%;
	max-width: 600px;
}
</style>
