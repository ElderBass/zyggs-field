<template>
	<the-header />
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
:root {
	--pink: #ff2e63;
	--electric-pink: #ff00a8;
	--electric-blue: #00f0ff;
}

* {
	box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	margin: 0;
	background-color: black;
	width: 100vw;
	height: 100vh;
}

a {
	text-decoration: none;
}
</style>
