<template>
	<modal ref="modal">
		<form class="app-form">
			<div class="form-control">
				<label class="label">Title</label>
				<input 
					v-model="form.title"
					class="form-input" type="text">
			</div>
			<div class="form-control from-control-last">
				<label class="label">Description</label>
				<textarea 
					v-model="form.description"
					cols="30"
					rows="5"
					class="form-input">
						
				</textarea>
				<div class="app-error">
					<div lass="form-error">
						{{ formError }}
					</div>
				</div>
			</div>
			<button 
				@click="submitForm"
				type="button" 
				class="app-button is-primary" >Confirm</button>
      	</form>
	</modal>
</template>

<script>
	/* eslint-disable */ 
	import Modal from '@/components/Modal'

	export default {
		components: {
			Modal
		},
		data() {
			return {
				form: {
					title: '',
					description: ''
				},
				formError: ''
			}
		},
		computed: {
			isFormValid() {
				return this.form.title.length > 8 && 
					   this.form.description.length > 10 ? true : false
			},
			modal() {
				return this.$refs.modal
			}
		},
		methods: {
			submitForm() {
				if(this.isFormValid){
					this.formError = ''
					this.$emit('formSubmitted', {...this.form}) // new copy of the object
					this.modal.close() //this.$refs.modal.close()=> 
					// but having modal() make it shorter calling close function from Modal component via $ref
					this.resetForm()
				} else {
					this.formError = 'Form Error!! Title needs to be longer than 8 characters and description longer than 10 characters!!'
				}
			},
			resetForm() {
				this.form.title = ''
				this.form.description=''
			}
		}
	}
</script>