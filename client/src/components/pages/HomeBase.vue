<template>
	<base-page>
		<h1 class="pageHeader">
			const <span class="pageName">Portfolio</span>: Project<span
				:style="{ color: 'var(--electric-blue)' }">[]</span>
		</h1>
		<div class="projects">
			<project-card v-for="project in projects" :key="project.name" :project="project" />
		</div>
	</base-page>
</template>

<script>
import ProjectCard from "../content/ProjectCard.vue";
import { projects } from "@/constants";

export default {
	components: {
		ProjectCard,
	},
	data() {
		return {
			projects,
		};
	},
	methods: {},
	computed: {},
};
</script>

<style scoped>
.projects {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	height: 100%;
	width: 100%;
}
</style>
