<template>
	<base-page>
		<base-card>
			<h1>function <span class="headerSpan">contactSeth()</span></h1>
			<form @submit.prevent="submitPing">
				<div class="inputField">
					<div class="labelContainer">
						<label for="name"
							>const <span class="label">name</span> =</label
						>
						<p v-if="errors.name" class="error">
							err! {{ errors.name }}
						</p>
					</div>

					<input
						class="input"
						id="name"
						name="name"
						v-model="name"
						@blur="validateString('name')"
					/>
				</div>
				<div class="inputField">
					<div class="labelContainer">
						<label for="email"
							>const <span class="label">email</span> =</label
						>
						<p v-if="errors.email" class="error">
							err! {{ errors.email }}
						</p>
					</div>

					<input
						class="input"
						type="email"
						id="email"
						name="email"
						v-model="email"
						@blur="validateEmail"
					/>
				</div>
				<div class="inputField">
					<div class="labelContainer">
						<label for="message"
							>const <span class="label">message</span> =</label
						>
						<p v-if="errors.message" class="error">
							err! {{ errors.message }}
						</p>
					</div>
					<textarea
						class="input"
						id="message"
						name="message"
						v-model="message"
						@blur="validateString('message')"
					></textarea>
				</div>
				<div v-if="!submitted" class="actions">
					<base-button
						type="button"
						buttonStyle="link"
						@click="goBack"
						>return</base-button
					>
					<base-button type="submit" :disabled="disabled"
						>Submit</base-button
					>
				</div>
				<p v-if="submitting">...</p>
				<div v-if="submitted" class="success">
					<p class="successMessage">
						Message submitted. You may exit this terminal.
					</p>
					<base-button
						type="button"
						buttonStyle="link"
						@click="goBack"
					>
						exit
					</base-button>
				</div>
			</form>
		</base-card>
	</base-page>
</template>

<script>
import { send } from "@emailjs/browser";

export default {
	data() {
		return {
			name: "",
			email: "",
			message: "",
			submitted: false,
			submitting: false,
			errors: {
				name: "",
				email: "",
				message: "",
			},
		};
	},
	methods: {
		async submitPing() {
			try {
				if (!this.validateEmail()) {
					this.errors.email = "invalid email";
					return;
				}
				this.submitting = true;
				await send(
					"service_1gqhxeh", // service ID
					"template_yxhmh65", // template ID
					{
						name: this.name,
						email: this.email,
						message: this.message,
					},
				);

				this.email = "";
				this.name = "";
				this.message = "";
				this.errors = {
					name: "",
					email: "",
					message: "",
					submit: "",
				};
				this.submitted = true;
				this.submitting = false;
			} catch (error) {
				console.error("Error sending email:", error);
				this.submitted = false;
			}
		},
		goBack() {
			this.$router.go(-1);
		},
		validateString(field) {
			if (!this[field]) {
				this.errors[field] = `${field} required`;
			} else {
				this.errors[field] = "";
			}
		},
		validateEmail() {
			if (this.email.includes("@") && this.email.includes(".")) {
				this.errors.email = "";
				return true;
			}
			this.errors.email = "invalid email";
			return false;
		},
	},
	computed: {
		disabled() {
			return !this.name || !this.email || !this.message;
		},
	},
};
</script>

<style scoped>
h1 {
	font-family: var(--computer-font);
	font-size: 1.5rem;
	margin-bottom: 1rem;
	width: 40%;
	padding-left: 1rem;
}

.headerSpan {
	color: var(--electric-blue);
	margin-left: 1rem;
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

.labelContainer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 2rem;
}

label {
	margin-left: 0.5rem;
	font-size: 0.8rem;
}

.label {
	color: var(--electric-blue);
	font-family: var(--computer-font);
	font-size: 0.9rem;
}

.error {
	color: var(--electric-yellow);
	font-size: 12px;
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
	height: 8rem;
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

.success {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.successMessage {
	color: var(--electric-green);
	text-align: center;
	font-size: 1rem;
	font-family: var(--computer-font);
}
</style>
