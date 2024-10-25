<template>
	<base-page>
		<h1 class="pageHeader">
			class <span class="pageName">Portfolio</span> {}
		</h1>
		<div class="projects">
			<project-card
				v-for="project in projects"
				:key="project.name"
				:name="project.name"
				:description="project.description"
				:links="project.links"
				:imageSrc="project.imageSrc"
			/>
		</div>
	</base-page>
</template>

<script>
import ProjectCard from "../content/ProjectCard.vue";
export default {
	components: {
		ProjectCard,
	},
	data() {
		return {
			projects: [
				{
					name: "shworlde",
					description: "Definitely NOT a Wordle clone...",
					imageSrc: require("../../assets/shwordle.png"),
					links: {
						github: "https://github.com/ElderBass/shwordle",
						live: "https://elderbass.github.io/shwordle/",
					},
				},
				{
					name: "flip",
					description: "A scoial flash-card app with live chat",
					imageSrc: require("../../assets/flip/flip.png"),
					links: {
						github: "",
						live: "",
					},
				},
			],
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
	gap: 1.5rem;
	height: 100%;
	width: 100%;
}
</style>
