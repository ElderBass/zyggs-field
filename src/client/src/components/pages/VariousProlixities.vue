<template>
	<base-page>
		<h1>class <span class="pageName">Prolixities</span></h1>

		<base-card>
			<h3>Something idk</h3>
			<p>
				I'm (not) a prolific writer. I write about software engineering,
				programming, and technology. I'm always looking for new
				opportunities to write. If you have a writing opportunity for
				me, please don't hesitate to contact me.
			</p>
		</base-card>
	</base-page>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
	computed: {},
};
</script>

<style scoped>
.prolixities {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	height: 100%;
	width: 100%;
	padding: 3rem 2rem;
}

h1 {
	color: var(--electric-pink);
	font-family: var(--computer-font);
	margin-bottom: 2rem;
}

.pageName {
	color: var(--electric-blue);
}
</style>
