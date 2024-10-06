<template>
	<the-header />
	<router-view />
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
	components: {
		TheHeader,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap");

:root {
	--pink: #ff2e63;
	--electric-pink: #ff00a8;
	--electric-blue: #00f0ff;
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
	background-color: var(--abyssal-black);
	width: 100vw;
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
</style>
