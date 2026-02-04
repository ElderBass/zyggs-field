<template>
	<base-page>
		<h1 class="pageHeader">
			const <span class="pageName">Portfolio</span>: Project<span
				:style="{ color: 'var(--electric-blue)' }"
				>[]</span
			>
		</h1>
		<div class="projects">
			<project-card
				v-for="project in projects"
				:key="project.name"
				:name="project.name"
				:description="project.description"
				:links="project.links"
				:images="project.images"
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
					images: [
						{
							src: require("../../assets/shwordle/shwordle.png"),
							alt: "Shwordle image",
						},
						{
							src: require("../../assets/shwordle/game-end.png"),
							alt: "Shwordle game end image",
						},
						{
							src: require("../../assets/shwordle/shwordle-stats.png"),
							alt: "Shwordle stats image",
						},
					],
					links: {
						github: "https://github.com/ElderBass/shwordle",
						live: "https://elderbass.github.io/shwordle/",
					},
				},
				{
					name: "flip",
					description: "A social flash-card app with live chat",
					images: [
						{
							src: require("../../assets/flip/flip.png"),
							alt: "Flip landing page",
						},
						{
							src: require("../../assets/flip/home.png"),
							alt: "Flip home page",
						},
						{
							src: require("../../assets/flip/edit-deck.png"),
							alt: "Flip edit deck page",
						},
						{
							src: require("../../assets/flip/study-deck.png"),
							alt: "Flip study deck page",
						},
						{
							src: require("../../assets/flip/chat.png"),
							alt: "Flip chat page",
						},
					],
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
	align-items: center;
	gap: 1.5rem;
	height: 100%;
	width: 100%;
}
</style>
