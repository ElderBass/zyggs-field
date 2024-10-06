<template>
	<div class="navDropdown">
		<button
			class="navDropdownButton"
			:class="{ rotated: showDropdown }"
			@click="toggleDropdown"
		>
			<font-awesome-icon :icon="['fab', 'fa-space-awesome']" />
		</button>
		<transition name="fade">
			<div v-if="showDropdown" class="navDropdownContent">
				<ul>
					<li v-for="link in links" :key="link.url">
						<nav-link
							:url="link.url"
							:text="link.text"
							:dropdown="true"
							:callback="toggleDropdown"
						/>
					</li>
				</ul>
			</div>
		</transition>
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
	background: var(--abyssal-black);
	font-family: "Fira Code", monospace;
	z-index: 1000;
}

.navDropdownButton {
	color: var(--electric-blue);
	border: none;
	background: inherit;
	font-size: 1.5rem;
	transition: transform 0.5s;
}

.navDropdownButton:hover {
	color: var(--electric-pink);
}

.rotated {
	transform: rotate(180deg);
}

.navDropdownContent {
	position: absolute;
	border: solid 2px var(--electric-blue);
	right: 0;
	display: flex;
	justify-content: center;
	border-radius: 50%;
	width: 180px;
	height: 180px;
	background: var(--abyssal-black);
}

.fade-enter-active {
	animation: fadeIn 0.5s ease-out;
}

.fade-leave-active {
	animation: fadeOut 0.5s ease-out;
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
li:first-child {
	padding-top: 1.5rem;
}
li:last-child {
	border-bottom: none;
	padding-bottom: 1.5rem;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(-3rem) scale(0.8);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fadeOut {
	from {
		opacity: 1;
		transform: translateY(0);
	}
	to {
		opacity: 0;
		transform: translateY(-3rem) scale(0.8);
	}
}
</style>
