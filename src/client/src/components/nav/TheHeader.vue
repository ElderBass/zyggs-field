<template>
	<header>
		<router-link class="logo" to="/">zyg</router-link>
		<nav>
			<nav-link
				v-for="link in navLinks"
				:key="link.url"
				:url="link.url"
				:text="link.text"
			/>
		</nav>
	</header>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
	components: {
		NavLink,
	},
	data() {
		return {
			navLinks: [
				{ url: "/who-am-i", text: "whoami" },
				{ url: "/ping-me", text: "ping me" },
				{ url: "/prolixities", text: "prolixities" },
			],
		};
	},
	methods: {},
	computed: {},
};
</script>

<style scoped>
header {
	width: 100%;
	display: flex;
	align-items: flex-end;
    justify-content: space-between;
	padding: 1rem;
}
.logo {
	color: var(--electric-pink);
	font-size: 2rem;
	text-decoration: none;
	text-shadow: -2px -2px 0 #000, 2px -2px 0 var(--electric-blue),
		-2px 2px 0 var(--electric-blue), 2px 2px 0 var(--electric-blue);
}
nav {
	display: flex;
	align-items: center;
	gap: 1rem;
}
</style>
