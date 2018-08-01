<template lang='pug'>
	div.form-input
		input(
			:type="type"
			:value="value"
			:placeholder="placeholder"
			:disabled="disabled"
			@input="$emit('input', $event.target.value); validInput($event.target.value)"
			ref="input"
			@blur="blurred = true")
		transition(name="error")
			template(v-if="blurred == true")
				p(v-if="type == 'name' && !validName(value)") Invalid Name
				p(v-if="type == 'email' && !validEmail(value)") Invalid Email
				p(v-if="type == 'password' && !validPassword(value)") Must contain at least 8 characters and one number
				p(v-if="type == 'phone' && !validPhone(value)") Invalid Phone Number
				p(v-if="type == 'postal' && !validPostal(value)") Invalid postal code
				//- p(v-if="type == 'date' && !validDate(value)") Date format should be MM/DD/YYYY
</template>

<script>
	export default {
		name: 'TextInput',
		props: {
			value: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: false,
				default: 'text'
			},
			placeholder: {
				type: String,
				required: false,
				default: ''
			},
			disabled: {
				type: Boolean,
				required: false,
				default: false
			}
		},
		data: () => ({
			blurred: false
		}),
		mounted() {
			this.validInput(this.value)
		},
		methods: {
			validInput(value) {
				if (this.type == 'text' && this.validText(value))
					this.$emit('validate', true)
				else if (this.type == 'name' && this.validName(value))
					this.$emit('validate', true)
				else if (this.type == 'email' && this.validEmail(value))
					this.$emit('validate', true)
				else if (this.type == 'password' && this.validPassword(value))
					this.$emit('validate', true)
				else if (this.type == 'phone' && this.validPhone(value))
					this.$emit('validate', true)
				else if (this.type == 'postal' && this.validPostal(value))
					this.$emit('validate', true)
				else this.$emit('validate', false)
			},
			validText(text) {
				var re = /./
				return re.test(text)
			},
			validName(name) {
				var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
				return re.test(name)
			},
			validEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				return re.test(email)
			},
			validPassword(password) {
				var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // At least 8 characters and one number
				return re.test(password)
			},
			validPhone(phone) {
				var re = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g // Covers large range of international phone formats
				return re.test(phone)
			},
			validPostal(postal) {
				var re = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/ // Canadian Postal Codes
				return re.test(postal)
			},
			validDate(date) {
				var re = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/ // MM/DD/YYYY formatting
				return re.test(date)
			}
		}
	}
</script>

<style lang="postcss">
	@import 'global/variables';

	.form-input {
		input textarea {
			width: 100%;
			font-family: 'Muli', 'Klinic Slab', sans-serif;
			font-size: 15px/17px;
			padding: 15px 20px;
			color: $gray;
			border: 1px solid;
			border-color: $light-gray;
			&::placeholder {
				color: $light-gray;
			}
		}

		p {
			position: absolute;
			font-weight: bold;
			padding: 5px * * 15px;
			color: $orange;
			max-width: 100%;
		}
	}
</style>
