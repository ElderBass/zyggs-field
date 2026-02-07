<template>
	<div class="carouselContainer">
		<transition v-for="(image, i) in images" v-show="i === imageIndex" :key="image.src" mode="out-in"
			name="carousel" @before-enter="beforeEnter" @enter="enter" @leave="leave">
			<img :src="image.src" :alt="image.alt" />
		</transition>
	</div>
</template>

<script>
import { getProjectCarouselInterval } from '@/utils/getProjectCarouselInterval';

export default {
	props: ["images"],
	data() {
		return {
			imageIndex: 0,
			transitionDuration: 1000,
		};
	},
	computed: {
		interval() {
			return getProjectCarouselInterval();
		},
	},
	methods: {
		nextImage() {
			if (this.imageIndex === this.images.length - 1) {
				this.imageIndex = 0;
			} else {
				this.imageIndex++;
			}
		},
		previousImage() {
			if (this.imageIndex === 0) {
				this.imageIndex = this.images.length - 1;
			} else {
				this.imageIndex--;
			}
		},
		beforeEnter(el) {
			el.style.opacity = 0;
		},
		enter(el, done) {
			setTimeout(() => {
				el.style.transition = "opacity 1s";
				el.style.opacity = 1;
				done();
			}, this.transitionDuration); // Delay to ensure the outgoing image fully fades out
		},
		leave(el, done) {
			el.style.transition = "opacity 1s";
			el.style.opacity = 0;
			setTimeout(done, this.transitionDuration); // Duration of the fade-out transition
		},
	},
	created() {
		setInterval(() => {
			this.nextImage();
		}, this.interval);
	},
};
</script>

<style scoped>
.carouselContainer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	flex: 1 0 50%;
	position: relative;
}

img {
	max-width: 90%;
	max-height: 10rem;
	border: solid 1px var(--electric-blue);
	border-radius: 1rem;
	position: absolute;
	margin: auto;
}

.carousel-enter,
.carousel-leave-to {
	opacity: 0;
}

.carousel-enter-active,
.carousel-leave-active {
	transition: opacity 0.33s ease-out;
}
</style>
