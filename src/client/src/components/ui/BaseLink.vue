<template>
	<a :href="href" :target="target">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: ["href", "isExternal"],
	methods: {
		target() {
			return this.isExternal ? "_blank" : "_self";
		},
	},
};
</script>

<style scoped>
a {
	background: none;
	color: var(--electric-pink);
}
a:hover {
	color: var(--electric-blue);
	background: none;
}
a:visited {
	color: var(--electric-purple);
}
</style>
