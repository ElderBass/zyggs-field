<template>
	<router-link class="nav-link" :class="{ active: isActive }" :to="url">
		{{ text }}
	</router-link>
</template>

<script>
export default {
	props: ["url", "text"],
    computed: {
        isActive() {
            console.log(this.$route.path);
            return this.$route.path === this.url;
        },
    },
};
</script>

<style scoped>
.nav-link {
	color: var(--electric-pink);
    font-size: 1rem;
}

.nav-link:hover {
    color: var(--electric-blue);
}

.active {
	color: var(--electric-blue);
	text-decoration: underline;
}
</style>
