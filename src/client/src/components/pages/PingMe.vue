<template>
	<div class="pingMe">
		<base-card>
			<h1>function <span class="headerSpan">contactSeth()</span></h1>
			<form @submit.prevent="submitPing">
				<div class="inputField">
					<label for="name"
						>const <span class="label">name</span> =</label
					>
					<input
						class="input"
						type="text"
						id="name"
						name="name"
						required
					/>
				</div>
				<div class="inputField">
					<label for="email"
						>const <span class="label">email</span> =</label
					>
					<input
						class="input"
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
				<div class="inputField">
					<label for="message"
						>const <span class="label">message</span> =</label
					>
					<textarea
						class="input"
						id="message"
						name="message"
						required
					></textarea>
				</div>
				<div class="actions">
					<base-button type="link">return</base-button>
					<base-button type="submit">Submit</base-button>
				</div>
			</form>
		</base-card>
	</div>
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
	mounted() {
		console.log("PingMe mounted");
	},
};
</script>

<style scoped>
h1 {
	font-family: var(--computer-font);
	font-size: 1.5rem;
	margin-bottom: 1rem;
}

.headerSpan {
	color: var(--electric-blue);
	margin-left: 1rem;
}

.pingMe {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	padding: 3rem 2rem;
	color: var(--electric-pink);
}

form {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1.25rem;
	color: var(--electric-pink);
	padding: 0.5rem;
}

.inputField {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

label {
	margin-left: 1rem;
}

.label {
	color: var(--electric-blue);
	font-family: var(--computer-font);
}

.input {
	padding: 0.5rem;
	background: var(--abyssal-black);
	border: solid 0.8px var(--electric-blue);
	border-bottom-right-radius: 0.33rem;
	border-bottom-left-radius: 0.33rem;
	border-top: none;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	color: var(--electric-blue);
}

textarea {
	height: 10rem;
}

.actions {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	color: var(--electric-blue);
}
.actions:first-child {
	flex: 0 1 25%;
}
</style>
