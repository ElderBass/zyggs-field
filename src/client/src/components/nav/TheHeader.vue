<template>
	<header>
		<router-link class="logo" to="/">zyg</router-link>
		<nav-dropdown v-if="isSmallview" :links="navLinks" />
		<nav v-else>
			<nav-link
				v-for="link in navLinks"
				:key="link.url"
				:url="link.url"
				:text="link.text"
				:decorated="true"
			/>
		</nav>
	</header>
</template>

<script>
import NavLink from "./NavLink.vue";
import NavDropdown from "./NavDropdown.vue";

export default {
	components: {
		NavLink,
		NavDropdown,
	},
	data() {
		return {
			navLinks: [
				{ url: "/who-am-i", text: "whoami" },
				{ url: "/ping-me", text: "ping me" },
				{ url: "/prolixities", text: "prolixities" },
			],
			width: window.innerWidth,
		};
	},
	methods: {
		resizeHandler() {
			this.width = window.innerWidth;
		},
	},
	computed: {
		isSmallview() {
			return this.width < 768;
		},
	},
	mounted() {
		window.addEventListener("resize", this.resizeHandler);
	},
	beforeUnmount() {
		window.removeEventListener("resize", this.resizeHandler);
	},
};
</script>

<style scoped>
header {
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding: 1rem;
	height: 4rem;
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
