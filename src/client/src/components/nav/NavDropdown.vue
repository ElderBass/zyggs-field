<template>
	<div class="navDropdown">
		<button
			class="navDropdownButton"
			:class="{ rotated: showDropdown }"
			@click="toggleDropdown"
		>
			<font-awesome-icon :icon="['fab', 'fa-space-awesome']" />
		</button>
		<div v-if="showDropdown" class="navDropdownContent">
			<ul>
				<li v-for="link in links" :key="link.url">
					<nav-link :url="link.url" :text="link.text" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
	components: {
		NavLink,
	},
	props: ["links"],
	data() {
		return {
			showDropdown: false,
		};
	},
	methods: {
		toggleDropdown() {
			this.showDropdown = !this.showDropdown;
		},
	},
	computed: {},
};
</script>

<style scoped>
.navDropdown {
	position: relative;
}

.navDropdownButton {
	color: var(--electric-pink);
	border: none;
	background-color: transparent;
	font-size: 1.5rem;
	transition: transform 0.5s;
}

.navDropdownButton:hover {
	color: var(--electric-blue);
}

.rotated {
	transform: rotate(180deg);
}

.navDropdownContent {
	position: absolute;
	border: solid 2px var(--electric-blue);
	right: 0;
	top: 2.5rem;
	display: flex;
	justify-content: center;
	border-radius: 1.5rem;
}

ul {
	list-style-type: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	margin: 0;
}

li {
	text-align: center;
	border-bottom: solid 1px var(--electric-blue);
	padding: 1rem;
}
li:last-child {
	border-bottom: none;
}
</style>
