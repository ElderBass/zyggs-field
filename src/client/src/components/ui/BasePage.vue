<template>
	<div class="page">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.page {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100%;
	padding: 3rem 2rem;
	color: var(--electric-pink);
}
</style>
