<template>
	<form @submit.prevent="submitPing">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" required />
		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required />
		<label for="message">Message:</label>
		<textarea id="message" name="message" required></textarea>
		<button type="submit">Submit</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			email: "",
			message: "",
		};
	},
	methods: {
        submitPing() {
            console.log("submitPing");
        },
    },
	computed: {},
};
</script>

<style scoped></style>
