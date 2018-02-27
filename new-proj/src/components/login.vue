<template>
  <v-container fluid fill-height id="auth_form"> 
  <v-layout align-center justify-center>  
    <v-card  
      data-ripple="false"
      color='primary'
      style="height: auto; width: 400px;"
    >
    <v-flex pa-5>
  <v-form v-model="valid" ref="form" novalidate>
    <v-text-field
      label="Username"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      min="8"
      :rules="passRules"
      :type="e1 ? 'password' : 'text'"
      counter
      required
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
      passRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || "At least 8 characters",
      ],
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
    padding-top: 10%;
  }
</style>