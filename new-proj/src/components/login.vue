<template>
  <v-container fluid fill-height id="auth_form"> 
  <v-layout align-center justify-center>  
    <v-card style="height: auto; width: 400px;" data-ripple="false">
    <v-flex pa-5>
  <v-form v-model="valid" ref="form" novalidate>
    <v-text-field
      input-group
      primary-text
      label="Username"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      input-group
      primary-text
      label="Password"
      hint="At least 8 characters"
      v-model="password"
      min="8"
      :append-icon="e1 ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (e1 = !e1)"
      :type="e1 ? 'password' : 'text'"
      counter
    ></v-text-field>

    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      Sign in
    </v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
  </v-form>
</v-flex>
</v-card>
</v-layout>
</v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      password: '',
      e1: true,
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            password: this.password,
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  #auth_form{
    vertical-align:middle;
  }
</style>