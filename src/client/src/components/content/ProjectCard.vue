<template>
	<base-card>
		<div class="projectContainer">
			<img :src="imageSrc" :alt="getAltTag()" />
			<div class="content">
				<h1>{{ name }}</h1>
				<p>{{ description }}</p>
				<div class="links">
					<base-link
						v-for="(value, key) in links"
						:key="key"
						:href="value"
						:isExternal="true"
					>
						{{ capitalizeFirstLetter(key) }}
					</base-link>
				</div>
			</div>
		</div>
	</base-card>
</template>

<script>
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default {
	props: ["name", "imageSrc", "description", "links"],
	methods: {
		getAltTag() {
			return this.name + " Image";
		},
		capitalizeFirstLetter,
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
}
h1 {
	color: var(--electric-blue);
	font-family: var(--computer-font);
	font-size: 1.5rem;
}
.links {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
