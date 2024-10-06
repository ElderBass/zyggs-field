<template>
	<router-link
		class="nav-link"
		:class="{ active: isActive, dropdown }"
		:to="url"
		@click="handleClick"
	>
		{{ text }}
	</router-link>
</template>

<script>
export default {
	props: ["url", "text", "dropdown", "callback"],
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
	text-decoration: underline;
}

.dropdown {
	font-size: 14px;
	text-decoration: none;
}

.nav-link:hover {
	color: var(--electric-blue);
}

.active {
	color: var(--electric-blue);
}
</style>
