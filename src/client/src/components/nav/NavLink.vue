<template>
	<router-link
		class="nav-link"
		:class="{ active: isActive, decorated }"
		:to="url"
		@click="handleClick"
	>
		{{ text }}
	</router-link>
</template>

<script>
export default {
	props: ["url", "text", "decorated", "callback"],
	computed: {
		isActive() {
			console.log(this.$route.path);
			return this.$route.path === this.url;
		},
	},
	methods: {
		handleClick() {
			if (this.callback) {
				this.callback();
			}
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
}

.decorated {
	text-decoration: underline;
}
</style>
