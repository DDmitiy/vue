<template>
  <v-dialog v-model='dialog' attach='#app' max-width="400px">
    <v-btn slot='activator'>Sign in</v-btn>
    <v-form v-model="valid" ref="form" novalidate id='auth_form'>
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
        style="padding-left:35%"
      >
        Sign in
      </v-btn>
    </v-form>
  </v-dialog>
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
    padding: 30px; 
    background-color: white;
  }
</style>