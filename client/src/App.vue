<template>
	<the-header />
	<router-view v-slot="slotProps">
		<transition name="pageChange" mode="out-in">
			<component :is="slotProps.Component" :key="slotProps.Component" />
		</transition>
	</router-view>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
import { init } from "@emailjs/browser";

export default {
	components: {
		TheHeader,
	},
	mounted() {
		init({
			publicKey: "TgN0KvdoTkCYEQ2uD",
			blockHeadless: true,
		});
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap");

:root {
	--deep-pink: #ff1493;
	--disabled-gray: #808080;
	--electric-pink: #ff00a8;
	--electric-blue: #00f0ff;
	--electric-green: #00ff00;
	--electric-yellow: #ffff00;
	--electric-purple: #8000ff;
	--abyssal-pink: #1c1c1c;
	--abyssal-black: #130d11;
	--main-font: "Quicksand", sans-serif;
	--computer-font: "Fira Code", monospace;
}

* {
	box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	margin: 0;
	background: black;
	height: 100vh;
	font-family: var(--main-font);
	color: var(--electric-blue);
}

a {
	text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}

.pageHeader {
	color: var(--electric-pink);
	font-family: var(--computer-font);
	font-size: 1.25rem;
	margin-bottom: 2rem;
}

.pageName {
	color: var(--electric-blue);
	font-size: 1.5rem;
}

.pageChange-enter-active {
	animation: fadeIn 0.33s ease-out;
}

.pageChange-leave-active {
	animation: fadeOut 0.33s ease-out;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fadeOut {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>
