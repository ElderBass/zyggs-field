<template>
	<base-card>
		<div class="projectContainer">
			<image-carousel v-if="showCarousel" :images="images" />
			<img v-else :src="images[0].src" :alt="images[0].alt" />
			<div class="content">
				<h1>{{ name }}</h1>
				<p class="description">{{ description }}</p>
				<div class="links">
					<base-link v-for="(value, key) in links" :key="key" :href="value" :isExternal="true">
						{{ capitalizeFirstLetter(key) }}
					</base-link>
				</div>
			</div>
		</div>
	</base-card>
</template>

<script>
import ImageCarousel from "./ImageCarousel.vue";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default {
	components: {
		ImageCarousel,
	},
	props: ["project"],
	data() {
		return {
			name: this.project.name,
			images: this.project.images,
			description: this.project.description,
			links: this.project.links,
		};
	},
	methods: {
		getAltTag() {
			return this.name + " Image";
		},
		capitalizeFirstLetter,
	},
	computed: {
		showCarousel() {
			return this.images.length > 1;
		},
	},
};
</script>

<style scoped>
.projectContainer {
	display: flex;
	align-items: center;
	min-height: 12rem;
	gap: 1rem;
}

img {
	max-width: 50%;
	border: solid 1px var(--electric-blue);
	border-radius: 1rem;
}

.content {
	display: flex;
	flex-direction: column;
	text-align: right;
	flex: 1 0 50%;
	padding-right: 1rem;
}

h1 {
	color: var(--electric-blue);
	font-family: var(--computer-font);
	font-size: 1.5rem;
}

.description {
	font-size: 1rem;
	color: var(--electric-yellow);
}

.links {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	text-decoration: underline;
}
</style>
